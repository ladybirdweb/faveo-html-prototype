import $ from 'jquery'
import { renderViews } from './views.js'

// ── Second-level submenus ────────────────────────────────────────
let _submenuTimer = null
let _$activeSubmenu = null

function showSubmenu($el, navKey) {
  if (window.innerWidth < 768) return
  const $menu = $(`#submenu-${navKey}`)
  if (!$menu.length) return
  clearTimeout(_submenuTimer)
  if (_$activeSubmenu && _$activeSubmenu[0] !== $menu[0]) {
    _$activeSubmenu.addClass('hidden')
  }
  const r = $el[0].getBoundingClientRect()
  const $panel = $('#sidebar-expanded').hasClass('hidden') ? $('#sidebar') : $('#sidebar-expanded')
  const panelRect = $panel[0].getBoundingClientRect()
  const rtl = document.documentElement.getAttribute('dir') === 'rtl'
  // The panel sits at the trailing edge of the reading direction (right in
  // LTR, left in RTL) — the submenu opens on the opposite (leading) side.
  $menu.css({ left: '', right: '', top: r.top, visibility: 'hidden' }).removeClass('hidden')
  if (rtl) {
    $menu.css('right', window.innerWidth - panelRect.left)
  } else {
    $menu.css('left', panelRect.right)
  }
  const menuH = $menu[0].offsetHeight
  const top = Math.min(r.top, window.innerHeight - menuH - 8)
  $menu.css({ top: Math.max(8, top), visibility: '' })
  _$activeSubmenu = $menu
}

function hideSubmenu() {
  _submenuTimer = setTimeout(() => {
    if (_$activeSubmenu) { _$activeSubmenu.addClass('hidden'); _$activeSubmenu = null }
  }, 150)
}

$(document).on('mouseenter', '[data-nav]', function () {
  showSubmenu($(this), $(this).data('nav'))
}).on('mouseleave', '[data-nav]', function () {
  hideSubmenu()
})

$(document).on('mouseenter', '.nav-submenu-panel', function () {
  clearTimeout(_submenuTimer)
}).on('mouseleave', '.nav-submenu-panel', function () {
  hideSubmenu()
})

$(document).on('click', '.submenu-item', function () {
  if (_$activeSubmenu) { _$activeSubmenu.addClass('hidden'); _$activeSubmenu = null }
})

// ── Nav icon click ────────────────────────────────────────────────
$(document).on('click', '[data-nav]', function () {
  const navKey = $(this).data('nav')
  const $submenu = $(`#submenu-${navKey}`)

  if (window.innerWidth < 768 && $submenu.length) {
    const $existing = $(this).next('.mobile-subnav')
    $('.mobile-subnav').not($existing).addClass('hidden')
    if ($existing.length) {
      $existing.toggleClass('hidden')
    } else {
      const items = $submenu.find('.submenu-item').map(function () { return $(this).text().trim() }).get()
      const html = '<div class="mobile-subnav flex flex-col pb-1">' +
        items.map(label =>
          '<button class="mobile-subnav-item text-start text-[12px] text-[#4a5565] py-2 ps-14 pe-3 rounded-[8px] hover:bg-[#e8e8e8] bg-transparent border-none w-full cursor-pointer font-medium">' + label + '</button>'
        ).join('') +
        '</div>'
      $(this).after(html)
    }
    return
  }

  $('.sidebar-nav[data-nav]').removeClass('active')
  $(`[data-nav="${navKey}"]`).addClass('active')
  renderViews(navKey)
  $('#views-search').val('')
  $('#sidebar-expanded').addClass('hidden')
})

$(document).on('click', '.mobile-subnav-item', function () {
  $('#sidebar-expanded').addClass('hidden')
})

// ── Sidebar expand / collapse ────────────────────────────────────
$('#sidebar-logo').on('error', function () {
  $(this).addClass('hidden')
  $('#sidebar-logo-fallback').removeClass('hidden')
})

$('#btn-toggle-sidebar').on('click', function (e) {
  e.stopPropagation()
  $('#sidebar-expanded').removeClass('hidden')
})
$('#btn-collapse-sidebar').on('click', function () {
  $('#sidebar-expanded').addClass('hidden')
})
$(document).on('click', function (e) {
  if (!$(e.target).closest('#sidebar-expanded, #btn-toggle-sidebar, #btn-mobile-menu').length) {
    $('#sidebar-expanded').addClass('hidden')
  }
})
