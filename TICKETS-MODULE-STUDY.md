# Tickets Module — Complete Study & P3 Implementation Plan

> Compiled 2026-07-16 from a four-way code sweep of `/var/www/faveo` (branch `enhancement-faveo-theme`)
> and the signed-off prototype (`Faveo-UI-Kit/pages/pages/ticket-inbox.html`, `ticket-timeline.html`).
> This is the source of truth for Phase 3 (agent ticket pages). Companion plan file:
> `/root/.claude/plans/distributed-swimming-muffin.md` (ground rules + phase-gate ritual apply).

---

## 1. Headline numbers

| Metric | Count |
|---|---|
| Module-specific Vue components (inbox side) | 27 (incl. 5 shared bulk modals, 1 dead file) |
| Module-specific Vue components (timeline side) | 31 |
| Shared leaf components pulled in (form fields, editor, modal, loaders, parsers…) | ~18 (14 of them already Tailwind-converted in P1) |
| **Total component surface** | **~75 files** |
| Components rendered THROUGH EVENTS (plugin injection) | **20 injected components over 16 mount targets + 2 runtime-resolved** (ThreadBody + TinyMCE via `window.Faveo.plugins.get`) |
| `window.emitter` event names the module participates in | ~50 |
| API endpoints consumed | ~45 |
| Permission gates (`hasPermission('agent', …)`) | 20+ distinct permissions |
| Prototype sections — inbox | 9 |
| Prototype sections — timeline | 10 + 6 drawers/modals |

Already Tailwind: `TicketSortingMenu.vue` (fully), `TicketsIndex.vue` Search-By block, `Common/Modal.vue`
(base shell — EditTicket/PdfModal/TaskModal/TicketFork render through it), pockets in
TimelineDetails/ThreadBody/InboxReply/TicketTags/TicketLabel/EditTicket/PdfModal. Everything else is classic Bootstrap.

---

## 2. Routes

| path | name | component | notes |
|---|---|---|---|
| `tickets` | Tickets Index | `Inbox/InboxLayout.vue` | router import alias "TicketsIndex" actually = InboxLayout |
| `tickets/:type/:id` | Tickets widget Index | InboxLayout | report drill-down |
| `tickets/filter/:id` | Filter Tickets Index | InboxLayout | saved-filter views |
| `thread/:id` | Tickets Timeline | `Inbox/View/TicketTimeline.vue` | `beforeEnter` rewrites breadcrumb from `getUserData.filter_id` |
| `newticket` | NewTicket | `Common/NewForm/FormGenerator.vue` | perm `create_ticket`; generic form engine |
| `agent/recur/*` | Recurring tickets | RecurringTicketsIndex / FaveoForm | separate pages |

No `meta.permission` on `tickets`/`thread/:id` — authorization is server-side. The timeline renders **both**
standalone (route) and embedded inside TicketsIndex (split view) and `Agent/User/UserView.vue`.

## 3. Component tree

### 3.1 Inbox (list) side

```
InboxLayout.vue (181)                          ── GET /ticket-datatable/permissions; on('refreshTicketPage') remount
└─ TicketsIndex.vue (1413)                     ── THE list page; GET /api/agent/ticket-list; view mode list|datatable
   ├─ Alert (componentName="inbox")
   ├─ BulletListLoader (vue-content-loader)
   ├─ SelectAllTickets (60)                    ── emit('selectTicket', bool)
   ├─ TicketActions (396)  [v-if selected]     ── bulk bar; hosts 6 modals:
   │    AssignTicketModal / MergeTicketModal / ChangeStatusModal / DeleteTicketModal / EditTicket / BulkUpdateModal
   ├─ TicketPerPage (56)                       ── 10/25/50/100
   ├─ TicketSortingMenu (221)  [TAILWIND ✓]    ── ticket_number/updated_at/created_at + answered/unanswered
   ├─ TicketFilter (988)  [v-if isShowFilter]  ── filter aside; children:
   │    commonApiFilter(318) commonFilter(307) CustomFieldFilter(463) SaveFilter(596) TimeRangeFilter(299) CustomFields(414)
   ├─ TicketDetails (396)  [v-for rows]        ── row: priority dot/avatar/checkbox/subject/badges/timers
   │    ├─ TicketPopover (305)                 ── subject hover preview; GET /ticket/tooltip; click→timeline
   │    ├─ UserInfo (155) / OrgInfo (139)      ── hover cards
   │    └─ FaveoImageElement
   ├─ SimplePagination (29)                    ── prev/next
   ├─ TabularReportLayout (FaveoReport)        ── datatable mode → ColumnList + DynamicDatatable (SHARED ENGINE)
   └─ TicketTimeline [v-if timelineId]         ── embedded detail (below)
DEAD: View/TicketsTable.vue (237) — imported by nothing; delete in cleanup sweep.
```

### 3.2 Timeline (detail) side

```
TicketTimeline.vue (1055)                      ── GET /api/agent/ticket-details/:id; inject hasPermission
├─ TimelineActions (160)                       ── header toolbar; mounts: #timeline-action-bar #timeline-action-div #ai-ticket-summary-modal
│   ├─ TicketLabel (444) / TicketTags (426)    ── /labels-ticket, /add-tag, dependency lists
│   └─ MoreEvents (344)                        ── "more" menu; mount #ticket-more-actions; owns 9 modals:
│        DueDateModal(158) PdfModal(559) SurrenderModal(107) DepartmentModal(136) ApprovalWorkflowModal(138)
│        ForwardModal(189) ChangeRequesterModal(134) TimelineMergeModal(254) RecordTimeModal(276)
├─ InboxThreads (310)  ["conversation" tab]    ── infinite-loading; ASC/DESC; GET /api/agent/ticket-conversation/:id
│   └─ ThreadBody (1368)                       ── one message: ActivityParser body, AttachmentBlock, per-thread
│        reply/edit/delete, note inline-edit (AddMedia), redaction (secret/api/thread/*), AI summarize/translate
│        (runtime window.Faveo.plugins.get('elea-assistant')); mount .ai-ticket-thread-summary (byClass)
├─ InboxTicketActivity (250)  ["activity" tab] ── GET /api/agent/ticket-activity-log/:id
├─ InboxAssociates (146)                       ── approval + time-track + associated tickets + 9 plugin mount divs
│   ├─ InboxApproval (52) → ApprovalProgress
│   ├─ InboxRecordedTime (228) → RecordRow (179) → RecordTimeModal
│   └─ AssociatedTickets (223)                 ── GET api/agent/associated-tickets
├─ InboxReply (680)                            ── reply composer: To/CC, canned, worktime, AddMedia→TinyMCE,
│    send / send-and-set-status; mounts #support-session-view #redaction-view #whatsapp-template-list
├─ InboxNotes (353)                            ── note composer (mutually exclusive with reply)
├─ TimelineDetails (585)                       ── right property card (status/priority/dept/SLA/custom fields…);
│    mount #timeline-meta-list-box; hosts EditTicket
├─ TimelineRequester (211)                     ── requester card + latest tickets
├─ IframeInjection (90)                        ── integrations iframe tabs (GET /api/integration-status)
├─ RatingComponent (205), SvgIconHandler
├─ AssignTicketModal / ChangeStatusModal / EditTicket (654; form-builder edit + closure forms)
└─ extra modals registered globally: TaskModal (110), TicketFork (189)
Mounts on the page itself: #ai-sentiment-label (title row), #ai-client-ticket-history (tab)
```

### 3.3 Shared leaves (blast radius outside tickets)

AddMedia(269)→**TinyMCE(1889)** (drafts via autosave plugin, mentions, custom upload, Elea AI hooks),
ActivityParser, AttachmentBlock, DataTableComponents/DeleteModal, Alert, Modal ✓, loaders ✓,
FormField/{DynamicSelect, TextField ✓, TimeField, DateTimePicker, Checkbox, RadioButton, Switch ✓},
NewForm/{FormWithCaptcha, FormRenderer}, ApprovalProgress.
**DynamicDatatable.vue = widest blast radius** (client + admin + ServiceDesk/Calendar/ProductivitySuite/FaveoReport
indexes). `TabularReportLayout` also renders in the client panel (ClientTicketsTable) → dual-class pattern needed.

## 4. Event-driven rendering (MUST NOT BREAK)

Mechanism: core components render empty `<div id="…">` + emit a mount event; plugin bundles registered via
`agent-panel-scripts-dispatch` call `injectComponentIntoView(name, comp, event, containerId)` (bootstrap.js:496/545/590).

| Mount target (owner component) | Trigger event | Plugin → component |
|---|---|---|
| `#ticket-actions-mounted` (TicketsIndex, closed/archived) | `ticketActionsMounted` | DataArchive → ArchiveTicketActions |
| `#timeline-action-bar` (TimelineActions) | `timeline-action-bar-mounted` | ServiceDesk → SdTicketActions |
| `#timeline-action-div` (TimelineActions) | `timeline-action-div-mounted` | Calendar + ProductivitySuite → TaskTicketActions |
| `#ai-ticket-summary-modal` (TimelineActions) | `elea-ticket-summary-loaded` | EleaAssistant → summary modal |
| `#ticket-more-actions` span (MoreEvents) | `ticket-actions-rendered` | Cloner → CloningAction |
| `#timeline-meta-list-box` (TimelineDetails) | `timeline-meta-box-mounted` | ProductivitySuite → AssociatedProblem |
| `#timeline-tab` (InboxAssociates) | `ticket-tab-mounted` | ServiceDesk → TicketAssociatedList |
| `#timeline-display-box-tasks` (InboxAssociates) | `ticket-timeline-mounted-tasks` | Calendar + ProductivitySuite → AssociatedTasks |
| `#timeline-boxes` (InboxAssociates) | `ticket-timeline-boxes-mounted` | AllianceCRM |
| `#timeline-requested-items-tab` (InboxAssociates) | `timeline-requested-items-card-mounted` | ServiceCatalogue |
| `#timeline-{github,slack,teams,jira,google-chat}-box` (InboxAssociates, source-gated) | `timeline-*-box-mounted` | source plugins |
| `#support-session-view` (InboxReply) | `support-session-renderer` | RemoteDesktop |
| `#redaction-view` (InboxReply) | `redaction-box-mounted` | FaveoRedaction |
| `#whatsapp-template-list` (InboxReply) | `whatsapp-template-dropdown-loaded` | Whatsapp |
| `#ai-sentiment-label` (TicketTimeline title) | `elea-sentiment-label-loaded` | EleaAssistant → SentimentLabel |
| `#ai-client-ticket-history` (TicketTimeline tab) | `elea-client-ticket-history-loaded` | EleaAssistant → EleaClientHistory |
| `.ai-ticket-thread-summary` class (ThreadBody) | `elea-ticket-thread-summary-loaded` | EleaAssistant (byClass) |

Plus runtime resolution (no DOM injection): ThreadBody thread-summary/translate and TinyMCE
grammar/better-reply/translate via `window.Faveo.plugins.get('elea-assistant')`.
AdHocApproval surfaces through CORE components (InboxApproval/ApprovalWorkflowModal) gated by
ticketSettings getters — no injection. Telephony mounts at layout level, not in ticket DOM.

**Rule: every mount id/class and every trigger-event name above is API. Keep verbatim.**

## 5. Event bus (key flows)

- `refreshTicketPage` → InboxLayout remounts everything (sidebar filter links emit this).
- `updateAgentSidebar` → single listener in AgentNavigationBar (ticket counts); ~30 emitters.
- `updateTimeline(from)` in TicketTimeline = central fan-out → `updateAgentSidebar` + `closeTimelineActions` +
  `updateTimelineActivity` + refetch, keyed by action tag (status/note/reply/edit/assign/…).
- `actionDone` (19 emitters incl. plugins) + `workflowUpdated` → timeline refresh.
- Selection: `selectTicket` / `unCheckTicket` / `uncheckCheckbox` / `selectedTickets` (DataArchive listens!).
- `refreshNotificationTriggered` (websocket, AgentPanelLayout) → list view-mode refetch + timeline reload.
- `threadReply` → TicketTimeline.replyOnThread → `updateContent` (into InboxReply, 1s delay).
- Full list (~50 names) in section 3 of the sweep reports; grep before renaming anything.

## 6. State, permissions, helpers

- **Vuex**: `ticketSettings` (actions list `/api/agent/action-list`, per-page, selected ticket, bulk status,
  time-track settings, CAB/approval visibility), `auth` (permissions, `formattedTime`/`timeDiff*`,
  `getNavigationArray`), `clientSettings` (`getPushDetails` sidebar push, `getDefaultRatings`),
  `alert`, `sdAssociates`, `pluginRegistry` (`isPluginActive`), runtime `eleaUtils` (`isSettingActive` —
  ALWAYS guarded via hasOwnProperty-style check).
- **Permissions** (20+): send_ticket_reply, send_internal_notes, edit_all/only_ticket_properties,
  edit_ticket_{assignee,status,tags_and_labels,requester,due_date,department}, merge_ticket, delete_ticket,
  allow_ticket_clone, apply_remove_approval_workflow, forward_ticket, redact_ticket,
  edit/delete_own|all_{ticket_internal_notes,ticket_conversations,time_track}, ticket_export, create_ticket.
- **Helpers**: globalMixin (trans/lang, basePath, boolean, isSettingActive, pluginState),
  extraLogics (getIdFromUrl, renderLabelWithEmoji, getSubStringValue, filter param builders),
  responseHandler (all alerts). Time formatting = auth getters, NOT a helper function.

## 7. Prototype inventory (the target design)

Source files (never use dist/ — stale): `Faveo-UI-Kit/pages/pages/ticket-inbox.html` (2698 lines),
`ticket-timeline.html` (3443 lines). Shared JS `src/ui.js` + `src/js/views.js`; CSS `src/styles/components.css`,
`dark.css`, `rtl.css`, tokens.

### Inbox sections (9)
1. **Views panel** `#views-panel` (288px, left; `renderViews('tickets')`, `#views-search` live filter, accordion sections)
2. **Toolbar** (h-57px): `#select-all-tickets`, `#sort-controls` → `#sort-dropdown` (9 fields + Asc/Desc groups),
   `#layout-control` → `#layout-dropdown` (Card/Inbox/Table), Export btn, pagination "1-3 of 3" + prev/next, `#btn-toggle-filters`
3. **Bulk bar** `#bulk-actions` (replaces sort/layout when ≥1 checked): `#btn-bulk-assign` → `#panel-bulk-assign`
   (Group/Agent tabs + searches), Close (toast), Bulk update, Merge, `#bulk-more-dropdown` (Add label / Re-assign / Spam / Delete)
4. **Ticket rows** `ul[aria-label="Ticket list"]`: card rows (min-h 98px) — `.ticket-checkbox`, avatar/initials +
   sentiment emoji overlay, pastel SLA/tag pills, bold subject, meta line (company • time • SLA), right col (280px):
   `.priority-btn`/`.agent-btn`/`.status-btn` inline dropdown triggers; selected row `bg-[#eef6ff]`
5. **Filter aside** `#filter-aside` (260px right; auto-open ≥1280px, overlay below): applied-filters view
   (`.filter-row[data-filter]` + remove) ↔ all-filters view; `#btn-add-filter` → searchable `#add-filter-dropdown`;
   Reset/Apply sticky footer
6. **Shared floating panels**: `#panel-priority` / `#panel-status` / `#panel-agent` (Group/Agent tabs + searches) —
   ONE fixed-position instance each, placed under clicked trigger (`markActive()`/`place()`/`closeAll()` pattern)
7. **Toast** `#toast-close` (auto-hide 4s)
8. Renew flyout + shared chrome (already converted in P1)
9. **Empty state — DOES NOT EXIST in prototype; must be authored** (keep classic `no-ticket-found` content)

### Timeline sections (10 + drawers/modals)
1. **Header toolbar**: Reply/Note (scroll-to composer), Forward, Attach assets, Problem, `#action-more-dropdown`
   (escape-overflow; Edit ticket details / Delete), `#btn-activities`, `#btn-requester-analysis`, Time Track,
   SD Associates "(5)", ticket pager (prev/dots→`#pagination-ticket-list` 500px list/next), contact-info toggle
2. **Subject/meta**: sticky title + source icon, SLA badge, sentiment pill, hidden `#toolbar-language-wrapper` (RA view only), `#btn-expand-props`
3. **Thread** `#view-threads`/`#threads-scroll`: original report (no bubble), agent replies (gray `bg-[#f3f3f3]`),
   customer replies (yellow `bg-[#fff6e4]`), hover action toolbar per message (forward/note/delete),
   rich content + attachments chips, quoted-chain collapse `[data-toggle-quote]`
4. **Activities view** `#view-activities` (12 system-event row types)
5. **Requester Analysis view** `#view-requester-analysis`
6. **Composer** `#reply-composer`: tabs reply/note (border color swaps), collapsed placeholder ↔ expanded,
   From/To + Cc/Bcc (reply) / Notify-to (note), contenteditable `#composer-editor` + 16 `data-cmd` tools
   (**real app keeps TinyMCE — see decisions**), bottom tools, split Send / Add-note buttons
7. **Properties panel** `#panel-properties` (230px; `data-toggle=panel` + companion; sticky heading w/
   IntersectionObserver shadow; display-only rows in prototype; Update button footer)
8. **Contact-info panel** `#panel-contact-info` (270px, `data-persistent`; accordions + `#ci-icon-strip`)
9. **Drawers** (right, `.drawer-shadow`): `#panel-edit-ticket` (610px), `#panel-time-track` (560px; rows w/
   edit/delete hover actions; sticky total), `#panel-sd-associates` (tabs assets/changes/contracts + empty state)
10. **Modals** (slide-down + backdrop): `#modal-delete-ticket`, `#modal-edit-timelog`, `#modal-delete-timelog`

### JS patterns Vue must replicate (from ui.js + inline IIFEs)
- Standard dropdown (`data-toggle=dropdown`, closes others, `dropdown-open` state, icon swap) — matches
  our established jQuery/emitter dropdown feedback rules
- `data-persistent` panels (outside click ignored; only own toggle closes)
- `data-escape-overflow` + `.dropdown-anchor` (+`data-anchor=start|end`, RTL-aware) — fixed-position menus escaping overflow ancestors
- Shared floating panel: markActive()/place()/closeAll() — one panel serves all row triggers
- Modal slide-down replay (`void card.offsetWidth` reflow), MutationObserver closing dropdowns when drawers open
- Panel toggle w/ `data-companion`, accordions, `data-scroll-to`, tab filters, escaping tooltips
- components.css classes to carry: `.view-item/.view-section-header`, `.filter-select` (RTL caret),
  `.composer-editor:empty::before`, `.modal-slide-down`, `.drawer-shadow` (RTL flip), `.icon-flip`, `.scrollbar-none`

### Dark/RTL specifics
Row selection `bg-[#eef6ff]` → `rgba(61,166,215,.16)` dark; pastel pill remaps (dark.css:55-160);
bubble fills remap; `#filter-aside`/`#views-panel` dark surfaces; `.icon-flip`, `.filter-select` caret,
`.drawer-shadow` offset flips in RTL. All spacing logical (ms-/me-/ps-/pe-/start/end).

## 8. Prototype ↔ classic functionality deltas (decisions needed at gates)

**Prototype ADDS (wire to real APIs):**
- Per-row priority/agent/status inline changers (floating panels) — status→`/ticket/change-status/:id/:status`,
  agent→`/ticket/assign?ticket_id=`, priority→endpoint TBD at implementation (verify; likely via edit/bulk API)
- 9 sort fields (classic API supports sort-field param — verify which of the 9 the backend accepts; else map/hide)
- Views panel as in-content region (classic saved views live in sidebar + filter panel — feed from
  getNavigationArray + /api/agent/ticket-filter)
- Bulk "Mark as spam" / "Add label" / "Re-assign group" in more-menu — map to real endpoints or drop at gate
- Requester Analysis view (maps to Elea client_analysis_in_desk tab), quoted-chain collapse

**Prototype LACKS (keep classic functionality, restyle with prototype recipes):**
- Empty state; per-page selector; export dropdown detail (Excel/CSV); datatable mode internals
- ~30 real filter fields (prototype shows 9) + SaveFilter save/update/delete/share — map all into the
  add-filter dropdown/all-filters view
- Subject hover popover (TicketPopover), user/org hover cards — KEEP (feature), restyle
- Labels/tags editors, rating stars, all 11 MoreEvents/bulk modals, canned responses, worktime fields,
  redaction UI, approval progress, recorded-time list, associated tickets, iframe integrations,
  infinite scroll thread paging, maximize toggle, SLA countdown timers
- TinyMCE editor (prototype has execCommand mock) — KEEP TinyMCE (drafts/mentions/AI), skin toolbar to prototype look

---

## 9. Implementation plan (P3, two stages, gates per plan file)

**Ground rules (unchanged):** edit in place; comment-out don't delete (sweep after sign-off); UI-only —
no new heuristics; byte-for-byte prototype fidelity incl. quirks; build+lint clean per file; verify root
cause before changing; every converted page gets an interactive behavior checklist; rebase at phase boundary.
**Hard constraints:** all §4 mount ids/events verbatim; all §5 emitter names; Vuex/permission logic untouched;
dual-class for anything the client panel renders (TabularReportLayout/DynamicDatatable path, per BarcodeModal precedent).

### Stage A — Ticket Inbox (order of work)
- **A0 Shared primitives** (used by both pages): floating-panel component (markActive/place/closeAll as a
  composable/component — one instance, teleported, RTL-aware); escape-overflow dropdown treatment;
  toast; carry-over CSS hooks into tickets-page css (or components layer).
- **A1 Views panel**: new region in TicketsIndex fed by real saved views/filters (getNavigationArray +
  filter APIs); search + accordions per prototype.
- **A2 Rows**: TicketDetails → prototype card-row anatomy (checkbox, avatar/initials+sentiment, pills,
  subject, meta, right col triggers); keep timers/permission gates; TicketPopover/UserInfo/OrgInfo restyled;
  selected-row highlight; wire priority/agent/status panels to real APIs.
- **A3 Toolbar**: select-all, sort dropdown (map real sort fields), layout dropdown ↔ list/datatable modes,
  export, pagination + per-page, filter toggle; bulk bar + assign panel + more-menu mapped onto
  TicketActions' real modals/permissions.
- **A4 Filter aside**: TicketFilter + 6 children → applied/all/add-filter views over ALL real fields; SaveFilter
  flows (save/update/delete/share) kept.
- **A5 Modals**: the 6 bulk modals restyled (they already render through converted Modal.vue where applicable).
- **A6 Datatable mode**: TabularReportLayout/DynamicDatatable — dual-class (client panel shares it); minimal
  restyle now, full conversion when client panel converts.
- **A7 Gate**: behavior checklist (sorting, search shortcodes, filters incl. saved views, bulk ops incl.
  DataArchive injection on archived pages, pagination, view modes, refresh events, RTL, dark) → user sign-off
  → cleanup sweep → commit + rebase.

### Stage B — Ticket Timeline
- **B1 Scaffold**: TicketTimeline layout → header toolbar / subject row / thread column / properties panel /
  contact-info panel; view switching (threads/activities/RA) preserving tab logic + Elea client-history tab.
- **B2 Thread**: InboxThreads + ThreadBody → prototype message anatomy (bubbles by author type, hover actions,
  quote collapse, attachments chips) keeping infinite-loading, redaction, per-thread edit/delete/reply, AI menu,
  `.ai-ticket-thread-summary` mounts.
- **B3 Composer**: InboxReply/InboxNotes unified into prototype tabbed composer (collapsed↔expanded, tab colors,
  Cc/Bcc, notify-to) — TinyMCE stays (skin to prototype toolbar look); canned responses, worktime, send-and-set-status,
  whatsapp/redaction/remote-desktop mounts preserved.
- **B4 Panels**: TimelineDetails → properties panel (rows become the REAL editable fields, Update flow =
  EditTicket); TimelineRequester → contact-info accordions + icon strip (persistent-panel behavior).
- **B5 Drawers/modals**: EditTicket → 610px drawer; time-track (InboxRecordedTime/RecordRow/RecordTimeModal) →
  drawer + edit/delete modals; SD-associates drawer hosting InboxAssociates content + ALL plugin mount divs;
  delete-ticket modal; remaining MoreEvents modals via Modal.vue recipes.
- **B6 Header extras**: ticket pager (real prev/next ticket list), Time Track/SD Associates counts, activities/RA
  toggles, more-menu, rating, labels/tags editors, sentiment pill (#ai-sentiment-label).
- **B7 Gate**: behavior checklist (reply/note/forward, drafts, canned, attachments, status/assign/priority flows,
  time tracking, labels/tags, redaction, approval, merge/fork/surrender/due-date/department/requester/PDF,
  plugin boxes per source, websocket refresh, RTL, dark) → sign-off → sweep → commit + rebase.

### Cleanup-sweep extras for this phase
Delete dead `View/TicketsTable.vue`; remove any superseded scoped CSS; re-check unscoped utility-name collisions.
