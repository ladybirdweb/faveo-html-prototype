# Faveo Agent Panel — Modern UI: Consolidated Design Document

**Status:** Final draft for sign-off · 2026-07-10
**Owner:** Sakthi (sole Modern developer — rest of the team continues on Classic, unaware of this effort)
**Prototype (visual source of truth):** `/var/www/faveo-html-prototype/Faveo-UI-Kit` (Tailwind v4 static pages)
**Target app:** `/var/www/faveo` (Laravel + Vue 3.5 + Vuex 4, branch `development`)

Everything in this document was validated once in a discarded dry-run build (2026-07-10): the composable
extraction, the parallel entry/blade, Tailwind v4 in this Vite setup, and the prototype CSS port all
compiled and ran. The rebuild follows this document from scratch.

---

## 1. Concept

Two complete, parallel **themes** of the agent panel. A theme is not a stylesheet — it is a whole
document: its own blade, its own Vite entry, its own router, its own CSS pipeline.

| | **Classic** (existing) | **Modern** (new) |
|---|---|---|
| UI stack | AdminLTE 4 + Bootstrap 5 + jQuery | Tailwind v4 only — no Bootstrap, no AdminLTE, no jQuery |
| Status | Untouched; team keeps working here | Built page-by-page by one developer |
| Served when | Default for everyone | Opt-in via theme setting (later: org default) |

**Collision is impossible by construction**: the two themes never load in the same page. The only
shared runtime is the backend. Shared *source* (composables, store, helpers) is compile-time — each
bundle gets its own copy, and a logic fix lands in both.

---

## 2. Naming (locked — derive everything from the keyword pair Classic/Modern)

| What | Classic | Modern |
|---|---|---|
| Theme name in settings UI | `Classic` | `Modern` |
| URL prefix | `/panel` | `/panel-modern` |
| Blade | `spa.blade.php` | `spa-modern.blade.php` |
| Vite entry | `resources/assets/js/agent.js` | `resources/assets/js/agentModern.js` |
| Source folder | `resources/assets/js/` (as-is) | `resources/assets/js/modern/agent/` |
| Router | `router/agentRouter.js` + `agentRoutes.js` | `modern/agent/router/agentRouter.js` + `agentRoutes.js` |
| Components | `components/Agent/...` | `modern/agent/components/{Shell, Common, Tickets, ...}/` |
| Mount point | `#app-agent` | `#app-agent-modern` |
| DB org setting | — | `agent_panel_theme` = `'classic' \| 'modern'` (default `classic`) |
| Per-agent override | — | `panel_theme` on user settings (`null` = inherit org) |
| Browser storage prefix | — | `fv-` (e.g. `fv-theme-mode` for future dark mode) |

Future panels reuse the shape with zero renaming: `modern/admin/`, `modern/client/`, entries
`adminModern.js` / `clientModern.js`, URLs `/admin-modern`, `/client-modern`.

`/panel` remains the canonical URL forever. `/panel-modern` is the parallel door during transition;
after the org default flips, `/panel` serves the Modern blade and `/panel-modern` stays as alias.

---

## 3. Source layout

```
resources/assets/js/
  agent.js                          ← Classic entry (NEVER touched)
  agentModern.js                    ← Modern entry (new; entries live at js root beside agent.js)

  setup/                            ← NEW: theme-neutral app plumbing shared by BOTH entries (§7.3)
    axios.js                        ← interceptors, baseURL, keep-page-alive
    emitter.js                      ← mitt instance (window.emitter)

  composables/                      ← shared LOGIC (both themes consume; theme-neutral)
    usePermissions.js               ← existing, untouched
    Agent/
      Ticket/                       useTicketList.js, useInboxPage.js, later useTicketTimeline.js,
                                    useChangeStatus.js, useAssignTicket.js, useTicketFilter.js ...
    Modern/                         ← helpers only the Modern UI needs
      useTheme.js, useAgentNavigation.js

  modern/
    shared/                         ← PANEL-AGNOSTIC (owner decision: agent + admin share the
                                      layout; only APIs differ). Panel specifics enter ONLY via
                                      the 'fvPanel' provide/inject contract (contracts.js):
                                      { name, navigation, classicUrl, topMenu, switchPanel }
      components/
        Shell/                      AppShell (injects fvPanel), SidebarRail, SidebarExpanded,
                                    TopNav, FooterBar, NavSubmenu(+Tree), SearchOverlay,
                                    NotificationsDropdown, AgentStatusDropdown, LanguageDropdown,
                                    UpdatesBadge,
                                    contracts.js (injection keys + render-safe fallbacks)
        Common/                     NavCountBadge, FloatingPanel, Modal, Alert, buttons ...
      css/
        main.css                    ← Tailwind entry (§6.1); @source "../../" covers modern/
        tokens.css base.css sidebar.css topnav.css components.css color-scheme.css dark.css rtl.css
      assets/                       faveo-logo.png
    agent/
      AgentShell.vue                ← thin wrapper: provide(fvPanel) with useAgentNavigation()
                                      + /panel classicUrl; router root component
      router/
        agentRouter.js              ← creates router, guards (mirrors legacy split)
        agentRoutes.js              ← route definitions ONLY — only converted pages ever listed
      components/
        Tickets/                    TicketListPage, TicketList, TicketRow, InboxToolbar,
                                    SortDropdown, PriorityPanel, StatusPanel, AgentPanel,
                                    BulkActionsBar, FilterAside, ViewsPanel ...
    (later: admin/AdminShell.vue + router + pages — reuses ALL of shared/)

  composables/Modern/
    createPanelNavigation.js        ← navigation factory: { endpoint, classicBase,
                                      convertedRoutes, refreshEvents }
    useAgentNavigation.js           ← agent instance of the factory
    useTopMenu.js                   ← "New" menu factory (classic AgentNavbar.getTopMenu):
                                      showOnTopNavbar nodes, icon inheritance, create_contact
                                      permission case; instance provided as fvPanel.topMenu
    useInAppNotifications.js        ← classic InAppNotification.vue: paginated feed, unread
                                      count, mark read / delete all, action-link redirect rules
    useAgentStatus.js               ← classic navbar status dropdown: lazy paginated statuses,
                                      available/unavailable groups, own-status POST
    useLanguages.js                 ← classic AgentLang.vue: language list (+store share),
                                      flag URLs, user-language switch + reload
    useAppUpdates.js                ← classic ApplicationUpdates.vue: update count
    useGlobalSearch.js              ← classic GlobalSearch.vue: /search-all grouped results,
                                      recent searches, category filter, search-by preferences
    panelSeed.js                    ← reader for window.fvPanelSeed (blade-seeded layout flags:
                                      whiteLabel/dummyInstall/isMailConfigured/is2fa*/isCustomJsEnabled)
    useLayoutBanners.js             ← classic AgentPanelLayout banners: display-pop-ups flow
                                      (decrypt + remind-me days), check/search-cron states
    useCustomScripts.js             ← classic scriptMixin (CustomJs plugin), logic only
    useTwoFactorSetup.js            ← classic BarcodeModal wizard: password → recovery codes →
                                      QR/secret → passcode validate
                                    ← ported from the prototype, kept diffable against it
```

Rules: PascalCase `.vue` files; one folder per page domain under `components/`; page components end
with `Page` (`TicketListPage.vue`); no file outside `modern/`, `composables/`, `setup/` and the five
one-line shared-file touches (§10) is ever created or modified for this effort.

---

## 4. Laravel side

### 4.1 Route (`routes/web.php`, next to the existing /panel catch-all)

The route is **gated behind a config flag and ships disabled** (owner's decision): merged code is
fully dormant — no reachable URL — until all UI conversion is done. Dev/demo environments set the
flag `true` for testing; production stays `false` until the final enable (an `.env` flip, not a
deploy).

```php
// config/modern-ui.php: 'enabled' => env('MODERN_UI_ENABLED', false), plus the converted-pages map
if (config('modern-ui.enabled')) {
    Route::get('/panel-modern/{one?}/{two?}/{three?}/{four?}/{five?}/{six?}', function () {
        return view('themes.default1.agent.layout.spa-modern');
    })->middleware(['role.agent']);
}
```

With the flag off, `/panel-modern` falls through to normal 404 handling — indistinguishable from a
nonexistent URL.

### 4.2 Blade (`spa-modern.blade.php`)

Copies the *conventions* of `spa.blade.php`, not its content:

- `<html lang="{{ App::getLocale() }}" dir="{{ App::getLocale() == 'ar' ? 'rtl' : 'ltr' }}">`
- `<base href="{{ url('/panel-modern/') }}">` — vue-router 4 picks its history base up from this tag
  (same mechanism the legacy router uses; no base is passed in JS)
- **Inline variable block at the top** (CRITICAL): `$portal`, `$title_name`, `$tag` are NOT provided
  by view composers — spa.blade.php defines them inline (Portal/System model lookups +
  `Config::get('app.tags')`) and spa-modern.blade.php must do the same. Missing them throws an
  undefined-variable exception that the `UserLimitExceeded` middleware's blanket try/catch (it wraps
  `$next($request)`) converts into `redirect('/400')` — the page silently "redirects to 400" with
  nothing in the logs.
- `<title>{!! strip_tags($title_name) !!}</title>`, csrf metas, `api-base-url` meta, `$portal->icon` favicon
- Google Fonts link for **Inter** (the prototype font; whole document is ours, no seam concern)
- Pre-paint script applying `data-theme` from `localStorage['fv-theme-mode']` before CSS loads (future
  dark mode; harmless no-op until then)
- `@vite(['resources/assets/js/agentModern.js'])`
- The same sessionStorage seeding block as spa.blade.php (full_name, mail, profile_pic, user_id,
  is_rtl, header_color, formats, timezone, role, app_version, app_language) **plus one new key**:
  `portal_logo` = `$portal->logo ?? $portal->icon` (sidebar logo)
- `<div id="app-agent-modern"></div>` + the `bundleLink('js/lang')` translator script

NO AdminLTE links, no Bootstrap links, no jQuery, no AdminLTE body classes.

### 4.3 View composers (`app/Providers/ComposerServiceProvider.php`)

Add `'themes.default1.agent.layout.spa-modern'` to the three arrays that include the agent spa blade:
`AgentLayout` (gives `$portal`, `$title_name`, `$tag`), `AuthUser`, `UserLanguage`.

### 4.4 Theme selection — DEFERRED (design kept for later; nothing built now)

**Current (static) model — what we actually implement:** the theme IS the URL. `/panel` serves
Classic for everyone; `/panel-modern` serves Modern for whoever opens it (subject to the
`MODERN_UI_ENABLED` flag, §4.1). No DB setting, no admin settings page, no per-agent preference,
no `/panel` redirect logic. The only converted-pages list that exists now is the JS-side one inside
`useAgentNavigation` (decides router-link vs legacy `/panel` href in the Modern sidebar).

**Deferred design (implement when prioritized, after conversion is further along):**
- Migration: `agent_panel_theme` org setting (default `classic`) + `panel_theme` per-user (nullable).
- `/panel` catch-all resolves user override → org default → classic; Modern + converted path
  (PHP-side map joins `config/modern-ui.php` next to the `enabled` flag) → redirect to
  `/panel-modern/{path}`.
- Admin settings dropdown ("Agent panel theme: Classic / Modern") + per-agent toggle + switch links
  in both profile menus.
- **Release sequence**: (1) all pages converted → (2) `MODERN_UI_ENABLED=true` in production →
  (3) theme-selection machinery ships → (4) org default flips to `modern`. Env flag = reachability;
  theme setting = who gets it by default. Classic remains as fallback, then retires.

---

## 5. Build pipeline

- `vite.config.js`: **two additive lines** — the entry
  `{ path: 'resources/assets/js/agentModern.js', version: getCoreVersion() }` in `coreEntryFiles`,
  and `tailwindcss()` (from `@tailwindcss/vite`) prepended to `plugins`. The plugin only transforms
  CSS that imports `tailwindcss`, so every other entry (agent, admin, client, all plugins) is untouched.
- npm deps: `tailwindcss` + `@tailwindcss/vite` (dev), `@fortawesome/fontawesome-free` (the prototype
  uses FA 7 via npm — icons ship inside our bundle, no CDN).
- Validated output shape from the dry run: Modern emits its own `agentModern.css` (~115 kB incl.
  FontAwesome fonts) + entry chunk; classic bundles unchanged.

---

## 6. Template & style conventions (Modern components)

### 6.1 CSS entry (`modern/agent/css/main.css`)

```css
@import 'tailwindcss' source(none);   /* v4; disable auto source detection            */
@source "../";                        /* scan ONLY modern/agent — never the legacy tree */
@import '@fortawesome/fontawesome-free/css/all.min.css';
@import './tokens.css';  ... base, sidebar, topnav, components, dark, rtl (prototype order)
```

`source(none)` + `@source` is mandatory — without it Tailwind v4 scans the whole repo and bloats the
CSS with utilities from legacy files.

### 6.2 Template rules

1. **Markup ports 1:1 from the prototype.** Same Tailwind classes, same structure, same arbitrary
   values (`rounded-[6px]`, `bg-[#f7f9fa]`, `text-[13px]`). Do not "improve" spacing/colors inline —
   fidelity to the prototype is the review criterion.
2. **No inline `style=""`** (standing rule). Dynamic values that must be computed (e.g. priority dot
   color from API data) use `:style` bindings as the narrow exception; everything static is a class.
3. **RTL via logical utilities** exactly as the prototype: `ms-/me-`, `ps-/pe-`, `start-/end-`,
   `text-start`. Physical-transform icons get the prototype's `.icon-flip`. Never convert
   `left-1/2 -translate-x-1/2` centering to logical (standing rule — the transform is physical).
4. **ARIA comes with the markup**: the prototype's `aria-label/expanded/controls`, `role`, focus
   styles (`:focus-visible` in base.css) are part of the port, not optional.
5. **Icons**: FontAwesome classes / inline SVGs exactly as the prototype uses them.
6. **Repeated patterns** (nav buttons, toolbar buttons, submenu items) live once as component classes
   in `components.css` under `@layer components` (prototype already defines `.sidebar-nav`,
   `.submenu-item`; we add ours, e.g. `.fv-toolbtn`). Anything used 3+ times with identical classes
   becomes either a component class or a small Vue component — no copy-paste class soup.
7. **`<style>` blocks in Modern SFCs are the exception**, not the rule. Prefer utilities + shared
   component classes. When a scoped block is justified (complex states), it uses the `--c-*` tokens,
   never raw hex.
8. **Translations**: `lang()`/`trans()` from the global mixin (available in every component — the
   mixin is applied app-wide in the Modern entry too). Only use keys that exist in the translator;
   a missing key renders raw. New strings require adding the backend lang key first.

### 6.3 Script rules

1. **Composition API with `<script setup>` in every Modern component — no exceptions** (owner
   mandate: enterprise-level quality/performance). Concretely:
   - `<script setup>` SFCs; `defineProps` with types/defaults, `defineEmits` with event names,
     `defineOptions` only when a name is genuinely needed (recursive components self-reference by
     filename).
   - Derived data is `computed`, never methods called from templates; no work in render paths.
   - Stable `:key`s from data identity (routeString/name/id) — never bare indexes on dynamic lists.
   - Every global listener (emitter, document, window, media queries, timers) is removed in
     `onBeforeUnmount` — zero leaks, always paired bind/unbind.
   - Non-reactive data stays non-reactive (plain consts/`shallowRef` where deep reactivity buys
     nothing); no reactivity wrapping of static config.
   - Repeated UI fragments (3+ uses) become small focused components; no copy-paste markup.
   - JSDoc on every composable's contract and on non-obvious component logic; constants over magic
     strings.
   Classic stays Options API — never converted except the composable-consumption refactor (§7.2).
2. **Components own markup + wiring only.** Anything that talks to axios/Vuex/URL/emitter belongs in
   a composable. If a Modern component grows an axios import, that's a review flag.
3. **jQuery never appears in Modern code.** Prototype inline-JS behaviors are rebuilt as Vue:
   the shared floating-panel pattern (`place()` rect positioning, viewport clamp, single-open,
   outside-click/Escape/scroll close) becomes `Common/FloatingPanel.vue` (teleport to body).
4. **Emitter discipline**: Modern components that bind `window.emitter` events always unbind in
   `onBeforeUnmount` (composables expose `bindEmitterEvents`/`unbindEmitterEvents` pairs). The
   classic side keeps its historical no-cleanup behavior — do not "fix" it there.
5. **provide/inject keys** are namespaced `fv*`: `fvPageTitle` (shell header title, set by pages),
   `fvTheme`/`fvThemeToggle` (future dark mode). Document each new key in this file.
6. **Row/ticket data comes from the API as-is** — no client-side reshaping in components; if the
   shape needs adapting, adapt in the composable.

---

## 7. Shared logic — the composable strategy

### 7.1 What lives in composables

Per converted page, ALL of: API calls + endpoints, request-param building, list/selection/pagination
state, search token logic, URL query sync, emitter event handlers. Naming: `use<Domain><Thing>` under
`composables/Agent/<Domain>/`. First pair (validated in dry run):

- `useTicketList.js` — everything from classic `TicketsIndex.vue` (~700 lines moved verbatim)
- `useInboxPage.js` — permissions fetch + page-type resolution from `InboxLayout.vue`

Later, per legacy modal: `useChangeStatus`, `useAssignTicket`, `useBulkUpdate`, `useMergeTickets`,
`useDeleteTicket`, `useTicketFilter` — extracted the same way so the classic modals and the Modern
Tailwind modals share validation and endpoints.

### 7.2 How classic consumes them (behavior-neutral refactor — the ONLY classic edits ever made)

`setup(props) { return { ...useTicketList(props) }; }` — template unchanged, `data()` keeps only
what didn't move, `watch:` block moves into the composable. Framed to the team as an ordinary
"extract logic to composables" refactor PR — self-justifying, no mention of Modern needed.

**Landmines (all hit and solved in the dry run — treat as a checklist):**

1. A key existing in both `data()` and the composable return silently breaks reactivity (grep-check).
2. `paramsObj` must be `ref({})`, NOT `reactive({})` — `setFilter` replaces it wholesale.
3. Local vars that shadow refs (`search`, `filterParams`, `isApplyClicked` params) must be renamed.
4. Moved watchers use getter form `watch(() => x.value, ...)` to keep Options-API shallow semantics.
5. Inline arrow emitter handlers become named functions so they can be `off()`-ed.
6. jQuery scrolling / `$refs` access stays in the classic component; composable exposes state-only
   helpers (`setTimelineId`/`clearTimelineId`).
7. `this.$route` → `useRoute()`; undeclared instance props become plain lets (documented dead writes).
8. Emitter registration exposed as `bind/unbindEmitterEvents`; classic calls bind only (preserves its
   pre-existing leak), Modern calls both.

**Regression gate for each extraction PR**: classic page byte-identical in behavior — full manual
pass (list loads for every category, `is:` search tokens, sort both axes, per-page, pagination,
filter apply/save + URL-driven filters, list↔datatable persist, export, bulk modals, inline timeline
open/close + URL sync, refresh, remount) + identical network sequences in devtools.

### 7.3 Shared app plumbing (`setup/` split — prerequisite, Phase 0)

`bootstrap.js` currently front-loads Bootstrap-era CSS AND defines the axios interceptors — so Modern
cannot import it wholesale. To prevent entry drift (a dev adds an interceptor and Modern silently
misses it): extract the theme-neutral pieces of `bootstrap.js` into `setup/axios.js` (interceptors,
baseURL, keep-page-alive) and `setup/emitter.js`; `bootstrap.js` imports them (classic unchanged in
behavior); `agentModern.js` imports the same modules. One more "plain refactor" PR. CSS imports and
Bootstrap-coupled globals stay in `bootstrap.js`.

### 7.4 State & services shared as-is

Same Vuex store (`resources/assets/store`) in both entries: auth/user, navigation, permissions
(`usePermissions` + provide), alert. Modern renders alerts via its own `Common/Alert.vue` reading the
same alert store, so `errorHandler`/`successHandler` keep working unmodified.

---

## 8. Rebuilt legacy pieces (Bootstrap components never embedded in Modern)

| Legacy piece | Modern replacement |
|---|---|
| Ticket rows/toolbar (TicketDetails, SelectAll, PerPage, SortingMenu, SimplePagination) | Prototype markup on `useTicketList` |
| The 6 action modals | Tailwind modals on per-modal composables (§7.1). Status quick-change must route through the change-status flow — mandatory-comment rules can't be bypassed |
| Row priority/agent/status quick actions | `FloatingPanel`-based popovers; endpoints verified in dry run: statuses `GET /api/dependency/statuses?meta=true&supplements[]=…`; assign `POST /ticket/assign?ticket_id=… {assign_to, _method:'PATCH'}`; priority via `POST /api/bulk-update-ticket {ticket_ids, priority_id}` (smoke-test minimal payload before wiring) |
| TicketFilter (988 lines) | Prototype filter aside (applied/all views, add-filter dropdown) on `useTicketFilter`, same endpoints, same `@filter → setFilter(payload, scroll, isApplyClicked)` contract |
| TabularReportLayout (datatable view) | `v-tables-3` — already a dependency, has a built-in `tailwind` theme (`compiled/themes/tailwind.js`), registered per-app so classic is unaffected; fed by the same `dataUrl` the composable builds |
| AdminLTE chrome | Prototype chrome: icon rail + expanded sidebar overlay + topnav + footer. Sidebar is **data-driven** from `GET /api/agent/navigation` (same payload classic uses) via `useAgentNavigation`: converted paths (from the converted-pages map) → router-links; everything else → absolute `/panel/...` links |

---

## 9. Working alongside ~40 unaware developers

- **They can never break Modern**: it lives in new files; their classic edits touch nothing Modern
  depends on. Worst case is "Modern didn't get a change", never breakage.
- **New routes/components they add**: self-absorbing. The Modern sidebar shows new nav items
  automatically (backend data), and unknown routes render as links into classic — the feature is
  fully usable from day one and simply joins the conversion queue.
- **Edits to already-converted pages**: detected by the owner, not reported by the team. Keep a
  watchlist of converted classic files; once per sprint/release run
  `git log --oneline development -- <watchlist paths>` and port what matters. Logic changes usually
  land in the shared composable automatically (that's where the code they debug lives).
- **Total shared-file touch surface** (the only possible merge-conflict points, all additive or
  one-time): per-page extraction refactor, `setup/` split, one `vite.config.js` line, one `web.php`
  route, one composer entry, the additive `agent-panel-modern-scripts-dispatch` listeners in
  app/Health/routes.php + app/Plugins/EleaAssistant/routes.php, later the settings migration.

---

## 10. Rebuild phases & merge strategy

**Merge strategy (owner's decision):** PRs are raised only after BOTH initial pages (ticket list +
ticket detail/timeline) are complete — no early merging. Until then everything lives on the owner's
branch. Consequences:

- Even when raised together, split the work into **separate stacked PRs by kind** so review stays
  tractable and blame stays clean: (a) `setup/` refactor, (b) composable extractions + classic
  consumption, (c) the Modern app (all new files), (d) shared-file one-liners (vite/web.php/composer).
- **Rebase onto `development` regularly** (weekly at minimum). The Modern tree can't conflict with
  anyone, but the classic-file refactors (TicketsIndex/InboxLayout/TicketTimeline consumption edits,
  bootstrap.js split) WILL conflict if a teammate edits those files during the weeks of silent work —
  frequent rebases keep each conflict small instead of one big archaeology session at PR time.
- The phase regression gates below still apply at the END of each phase, on the branch — batched
  merging must not mean batched verification.

**Phases (build order + verification gates, zero user-visible change when merged):**

- **Phase 0 — plumbing**: `setup/` split out of `bootstrap.js` (§7.3). Verify classic app behaves
  identically (build + smoke).
- **Phase 1 — extraction**: `useTicketList` + `useInboxPage`; classic `TicketsIndex`/`InboxLayout`
  consume them. Full regression gate (§7.2).
- **Phase 2 — Modern foundation, LAYOUT FIRST (owner-mandated order)**: deps, vite entry, blade +
  flag-gated `/panel-modern` route + composer entry, `agentModern.js`, router pair, CSS port — then
  the chrome shell built and verified as its own milestone BEFORE any page content:
  1. `AppShell.vue` — viewport frame (flex column, rail + content-col split), router-view slot empty
  2. `TopNav.vue` — 55px toolbar strip: mobile menu button, page title (fvPageTitle), profile dropdown
  3. `SidebarRail.vue` (69px icon rail) + `SidebarExpanded.vue` (295px overlay) — data-driven from
     `useAgentNavigation` / `GET /api/agent/navigation`; expand/collapse; active states
  4. `FooterBar.vue` — copyright + version strip
  5. Verification gate: chrome renders with live navigation, all nav items link correctly
     (converted → router-link, everything else → `/panel/...`), responsive (rail hidden on mobile,
     hamburger opens overlay), RTL mirrors, before proceeding
  5b. **TopNav classic parity (added 2026-07-11, owner-mandated before Phase 1):** every classic
     AgentNavbar functionality implemented in the Modern TopNav — data-driven "New" menu, live
     global search (results/recent/preferences), in-app notifications (feed, mark read, delete,
     redirect rules), agent-status dropdown, language switcher, switch-to-admin link,
     application-updates badge, profile sign-out. NOT carried over: pushMenu body-class toggle
     (different layout model), changeNavColor black-header hack + portal header_color classes
     (deferred, §11.8), dead `navbarMounted()` emit, classic's unused elapsed-status timer,
     broken 'update-sidebar' → getCount binding (method doesn't exist in classic). Owner
     decisions 2026-07-11: the prototype "Apps" button REMOVED from TopNav (no classic
     counterpart, no marketplace content yet; restore from starter.html when it exists) and the
     profile menu's "Dashboard" entry REMOVED — profile menu now matches classic exactly
     (Profile + Sign out).
  5c. **Renderer/Layout parity (added 2026-07-11):** classic AgentPanelRenderer +
     AgentPanelLayout behaviors in the Modern shell — layout banners in the prototype
     banner-yellow/banner-red design (pop-ups w/ remind-me 1/3/7 days, dummy-install,
     mail-not-configured, search-cron/user-migration/bulk-update states), enforced-2FA gate
     (Tailwind TwoFactorSetupModal replaces router-view, classic onClose contract), route-change
     unsetAlert/unsetValidationError, updateAgentProfile → store merge, CustomJs scripts
     (logic only, no UI), external widgets (Health heart + Elea assistant) via
     `Event::dispatch('agent-panel-scripts-dispatch')` in spa-modern.blade + `layout-loaded` /
     `elea-widget-loaded` emits with retry (widget bundles register listeners late).
     Enablers: `window.fvPanelSeed` blade seed; setup/axios.js idempotency guard (plugin bundles
     import classic bootstrap.js — its chunk runs once per document, its Bootstrap CSS is never
     linked into the Modern page). **Plugin separation (owner mandate): plugin code never appears
     in core — spa-modern.blade fires `agent-panel-modern-scripts-dispatch` and Modern-compatible
     plugins/modules opt in with their own Event::listen echoing script/css tags (app/Health/
     routes.php, app/Plugins/EleaAssistant/routes.php). Listeners must skip the Vite dev server
     (`file_exists(public_path('hot'))`): in dev, any bundle importing classic bootstrap.js gets
     its CSS injected as live <style> tags and breaks the pure-Tailwind document; in the built
     app that CSS is never linked. Widgets therefore render with built assets only.
     Frontend side of the same rule: AppShell emits ONLY the generic `layout-loaded` lifecycle
     event (repeated ~1s×30; append-once injection makes duplicates harmless) plus the
     window.app store-install glue; each widget bundle owns its gating, creates its own mount
     div and fires its own follow-up events (healthCheck.js creates #monitoring-system-status;
     eleaAssistant.js gates on conversation-widget, creates #ai-assistant-widget, emits
     'elea-widget-loaded') — all guarded on `#app-agent-modern` existing so classic docs are
     untouched.** NOT ported: --sidebar-offset height juggling (banners are
     normal flex children above the app row), breadcrumbs (prototype uses TopNav title), fade
     route transition. Still deferred: RefreshNotification websocket banner (ticket phases).
  6. Only then **main content**: `TicketListPage`/`TicketList` with rows, selection, pagination,
     refresh. Ticket click opens classic thread page (Modern thread page comes later).
- **Phase 3 — full ticket list**: toolbar (search with `is:` tokens, sort, per-page, layout switch,
  export), row popovers, bulk bar + Tailwind modals on modal composables.
- **Phase 4 — remaining list features**: filter aside, views panel, datatable via v-tables-3, alert
  component, RTL + polish pass.
- **Phase 5+ — next pages**: ticket detail (timeline) first, then per the conversion queue; each page
  = extraction refactor → Modern page → add to JS converted list → add to watchlist.
- **Deferred phase — theme selection** (§4.4): built later, when prioritized; not part of the
  two-page milestone.

Per-phase verification: `npm run build` clean; eslint clean; classic `/panel` loads zero Modern
bytes (network tab); manual pass by owner (standing rule: owner verifies changes personally).

---

## 11. Known risks & standing constraints

1. `bootstrap.js` must never be imported by the Modern entry (CSS side effects) — hence Phase 0.
2. Tailwind source scanning must stay restricted (§6.1) or CSS bloats with legacy classes.
3. The blade depends on view-composer variables (`$title_name`, `$portal`, `$tag`) — composer
   registration (§4.3) is required or the blade 500s.
4. Missing translator keys render raw — audit every `lang()` key per PR.
5. The list API has no sentiment field — the prototype's sentiment emoji is omitted until backend
   support exists. SLA badges map to `is_overdue` (red) / `due_today` (amber) with existing keys.
6. Status changes must go through the change-status flow (mandatory comments); no direct POST bypass.
7. Dark mode is designed (tokens + `data-theme` + `dark.css` are ported and functional) but **not a
   current priority** — no toggle is exposed until prioritized.
8. `header_color` branding of `--c-brand` is a later decision; Modern ships the prototype's palette.
9. Owner commits and pushes everything personally; assistant never runs git commit/push.

## 12. Sign-offs needed before Phase 0 starts

1. Manager: Tailwind adoption in the Modern-only bundle (supersedes the earlier hand-written-CSS
   decision — the reasons for that recommendation died with the separate-document architecture).
2. Manager: the eventual gradual rollout via theme setting (§4.4, deferred build) — supersedes the
   all-at-once switch-over as the end-state plan.
3. Naming table (§2) — confirm or rename the keyword `modern` once; everything derives from it.
4. Conversion queue order after ticket list + ticket detail.
