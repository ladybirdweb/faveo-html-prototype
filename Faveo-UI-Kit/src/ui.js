import $ from 'jquery'

// ── Dropdown ──────────────────────────────────────────────────────
// Usage: <button data-toggle="dropdown" data-target="#my-menu">
//        <div id="my-menu" class="... hidden">...</div>
//
// Options (on the menu element):
//   data-persistent       — only closes when the toggle button is clicked
//                           again; clicking outside keeps it open (e.g. the
//                           contact info panel)
//   data-escape-overflow  — menu sits inside an `overflow` ancestor (e.g. the
//                           horizontally-scrolling inner toolbar) that would
//                           clip it. Switches it to `position: fixed`,
//                           positioned in JS from the trigger's nearest
//                           `.dropdown-anchor` ancestor, so it escapes the
//                           clip. Pair with data-anchor="start"|"end"
//                           (defaults to "start") to say which logical edge
//                           it was originally pinned to, and data-gap="N"
//                           (px, above the anchor's bottom edge, default 4).

function positionEscapedMenu($menu, $trigger) {
  const $anchor = $trigger.closest('.dropdown-anchor')
  if (!$anchor.length) return
  const rect = $anchor[0].getBoundingClientRect()
  const gap = Number($menu.data('gap')) || 4
  const rtl = document.documentElement.getAttribute('dir') === 'rtl'
  const alignLeft = ($menu.data('anchor') || 'start') === 'start' ? !rtl : rtl
  $menu.css({ position: 'fixed', top: rect.bottom + gap, left: '', right: '' })
  if (alignLeft) {
    $menu.css('left', rect.left)
  } else {
    $menu.css('right', window.innerWidth - rect.right)
  }
}

// ── Tooltips that must escape an `overflow` ancestor ────────────────
// Usage: <button data-tooltip-anchor class="relative ...">
//          <span data-tooltip-escape class="absolute ... opacity-0
//                group-hover:opacity-100 transition-opacity">Label</span>
//        </button>
// The fade itself stays pure CSS (group-hover opacity); this only supplies
// `position: fixed` coordinates on hover so the tooltip isn't clipped by a
// scrolling/overflow ancestor (e.g. the horizontally-scrolling inner
// toolbar) the way `absolute` positioning would be.
$(document).on('mouseenter', '[data-tooltip-anchor]', function () {
  const $tip = $(this).find('[data-tooltip-escape]').first()
  if (!$tip.length) return
  const r = this.getBoundingClientRect()
  $tip.css({ position: 'fixed', top: r.bottom + 8, left: r.left + r.width / 2, right: '', margin: 0, transform: 'translateX(-50%)' })
})

$(document).on('click', '[data-toggle="dropdown"]', function (e) {
  e.stopPropagation()
  $('#search-overlay').addClass('hidden')
  const $menu = $($(this).data('target'))
  // Close every other open dropdown and remove their active highlight
  // Skip menus marked data-persistent — they only close via their own toggle
  $('[data-toggle="dropdown"]').not(this).each(function () {
    const $otherMenu = $($(this).data('target'))
    if ($otherMenu.is('[data-persistent]')) return
    $otherMenu.addClass('hidden')
    $(this).removeClass('dropdown-open')
  })
  $menu.toggleClass('hidden')
  const isOpen = !$menu.hasClass('hidden')
  if (isOpen && $menu.is('[data-escape-overflow]')) positionEscapedMenu($menu, $(this))
  $(this).toggleClass('dropdown-open', isOpen)
  $(this).attr('aria-expanded', isOpen ? 'true' : 'false')
  // Optional icon swap: data-icon-open / data-icon-closed on the button
  const iconOpen   = $(this).data('iconOpen')
  const iconClosed = $(this).data('iconClosed')
  if (iconOpen && iconClosed) {
    $(this).find('i').toggleClass(iconOpen, isOpen).toggleClass(iconClosed, !isOpen)
  }
})

// Click outside the toggle button → close
// data-persistent (boolean attr) — only closes via toggle; outside clicks ignored
$(document).on('click', function (e) {
  $('[data-toggle="dropdown"]').each(function () {
    const $menu = $($(this).data('target'))
    if ($menu.hasClass('hidden')) return
    if ($(e.target).closest(this).length) return
    if ($menu.is('[data-persistent]')) return
    $menu.addClass('hidden')
    $(this).removeClass('dropdown-open')
    $(this).attr('aria-expanded', 'false')
  })
})

// ── Modal ─────────────────────────────────────────────────────────
// Usage: <button data-toggle="modal" data-target="#my-modal">
//        <div id="my-modal" class="modal-overlay fixed inset-0 ... hidden">...</div>

$(document).on('click', '[data-toggle="modal"]', function (e) {
  e.stopPropagation()
  $($(this).data('target')).removeClass('hidden')
})

// Click on the backdrop (the overlay itself, not its children) → close
$(document).on('click', '.modal-overlay', function (e) {
  if ($(e.target).is('.modal-overlay')) {
    $(this).addClass('hidden')
  }
})

// ── Dismiss ───────────────────────────────────────────────────────
// Usage: <button data-dismiss="#banner">   ← hides that element
//        <button data-dismiss="parent">    ← hides the direct parent

$(document).on('click', '[data-dismiss]', function () {
  const target = $(this).data('dismiss')
  const $el = target === 'parent' ? $(this).parent() : $(target)
  $el.addClass('hidden')
})

// ── Tab filter ────────────────────────────────────────────────────
// Usage: <button data-toggle="tab" data-tab="tickets" data-target="#list-id">
//        <li data-item-type="tickets">...</li>
// Marks clicked button active within its group; shows/hides target list items.
// Tab group = all [data-toggle="tab"] sharing the same data-target value.

$(document).on('click', '[data-toggle="tab"]', function () {
  const tab     = $(this).attr('data-tab')
  const target  = $(this).attr('data-target')
  $(`[data-toggle="tab"][data-target="${target}"]`).removeClass('search-tab-active')
  $(this).addClass('search-tab-active')
  const $items = $(target).find('[data-item-type]')
  if (tab === 'all') {
    $items.removeClass('hidden')
  } else {
    $items.each(function () {
      $(this).attr('data-item-type') === tab
        ? $(this).removeClass('hidden')
        : $(this).addClass('hidden')
    })
  }
})

// Mobile menu — directly toggles sidebar-expanded overlay
$(document).on('click', '#btn-mobile-menu', function () {
  $('#sidebar-expanded').toggleClass('hidden')
})

// ── Side-panel toggle (multiple triggers → one target) ────────────
// Usage: <button data-toggle="panel" data-target="#panel-id">
// Any number of buttons may target the same panel.
$(document).on('click', '[data-toggle="panel"]', function () {
  var target   = $(this).data('target')
  var $panel   = $(target)
  var opening  = $panel.hasClass('hidden')
  $panel.toggleClass('hidden', !opening)
  // Toggle companion strip (e.g. collapsed placeholder), if declared on the panel
  var companion = $panel.data('companion')
  if (companion) {
    $(companion).toggleClass('hidden', opening).toggleClass('flex', !opening)
  }
  $('[data-toggle="panel"][data-target="' + target + '"]').attr('aria-expanded', opening ? 'true' : 'false')
})

// ── Contact info panel accordion ──────────────────────────────────
// Usage: <button data-acc-toggle data-acc-target="#csec-foo">
//        <div id="csec-foo" class="hidden">...</div>
$(document).on('click', '[data-acc-toggle]', function () {
  var $btn     = $(this)
  var $body    = $($btn.data('accTarget'))
  var $chevron = $btn.find('.acc-chevron')
  var closing  = !$body.hasClass('hidden')
  $body.toggleClass('hidden', closing)
  $chevron.toggleClass('fa-chevron-down', closing).toggleClass('fa-chevron-up', !closing)
  $btn.attr('aria-expanded', closing ? 'false' : 'true')
})

// ── Scroll-to ─────────────────────────────────────────────────────
// Usage: <button data-scroll-to="#target-id">
// Scrolls the nearest scrollable ancestor of the target into view.

$(document).on('click', '[data-scroll-to]', function () {
  const $target = $($(this).data('scroll-to'))
  if (!$target.length) return
  const $scroller = $target.closest('.overflow-y-auto')
  if ($scroller.length) {
    const targetTop = $target[0].getBoundingClientRect().top
      - $scroller[0].getBoundingClientRect().top
      + $scroller[0].scrollTop
    $scroller.animate({ scrollTop: targetTop }, 200)
  } else {
    $target[0].scrollIntoView({ behavior: 'smooth' })
  }
})

// ── Sort dropdown selection ────────────────────────────────────────
// Moves active highlight within each group (field / direction) independently.
// Updates the trigger button label when a field is selected.

const SORT_INACTIVE = 'sort-item flex items-center w-full px-2.5 py-1.5 rounded-[4px] text-[#4a5565] text-[12px] font-medium cursor-pointer border-none bg-transparent text-left hover:bg-[#f1f5f9] transition-colors'
const SORT_ACTIVE   = 'sort-item sort-active flex items-center justify-between w-full px-2.5 py-1.5 rounded-[4px] text-[12px] font-medium cursor-pointer border-none text-left transition-colors bg-[#cfcfcf] text-[#4a5565]'

$(document).on('click', '#sort-dropdown .sort-item', function () {
  const $item  = $(this)
  const $group = $item.closest('[data-sort-group]')

  $group.find('.sort-item').each(function () {
    $(this).attr('class', SORT_INACTIVE).find('.fa-check').remove()
  })

  $item.attr('class', SORT_ACTIVE)
  $item.append('<i class="fa-solid fa-check text-[10px]" aria-hidden="true"></i>')

  if ($group.data('sort-group') === 'field') {
    $('[data-target="#sort-dropdown"] span').text($item.text().trim())
  }
})
