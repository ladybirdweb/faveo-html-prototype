import $ from 'jquery'
import { matIcon } from './mat-icons.js'

const navData = {
  dashboard: {
    sections: [
      { title: 'Shared', items: [] },
      { title: 'Default', items: [
        { label: 'Overview',         icon: 'fa-gauge-high' },
        { label: 'My Widgets',       icon: 'fa-table-cells-large' },
        { label: 'Team Performance', icon: 'fa-chart-line' },
      ]},
    ],
  },
  views: {
    sections: [
      { title: 'Shared', items: [
        { label: 'My open and pending tickets',      icon: 'fa-ticket' },
        { label: 'My overdue tickets',               icon: 'fa-clock' },
        { label: 'Open tickets in my groups',        icon: 'fa-users' },
        { label: 'Urgent and high priority tickets', icon: 'fa-circle-exclamation' },
      ]},
      { title: 'Default', items: [
        { label: 'All Tickets',                 icon: 'fa-list' },
        { label: 'All undelivered messages',    icon: 'fa-envelope-open' },
        { label: 'All unresolved tickets',      icon: 'fa-circle-xmark' },
        { label: 'New and my open tickets',     icon: 'fa-ticket' },
        { label: 'Tickets handled by AI Agent', icon: 'fa-robot' },
        { label: 'Tickets I raised',            icon: 'fa-arrow-up-from-bracket' },
        { label: "Tickets I'm mentioned in",    icon: 'fa-at' },
        { label: "Tickets I'm watching",        icon: 'fa-eye' },
        { label: 'Spam',                        icon: 'fa-ban' },
        { label: 'Trash',                       icon: 'fa-trash' },
      ]},
    ],
  },
  tickets: {
    sections: [
      { title: 'Shared', items: [
        { label: 'My open and pending tickets',      icon: 'fa-ticket' },
        { label: 'My overdue tickets',               icon: 'fa-clock' },
        { label: 'Open tickets in my groups',        icon: 'fa-users' },
        { label: 'Urgent and high priority tickets', icon: 'fa-circle-exclamation' },
      ]},
      { title: 'Default', items: [
        { label: 'All Tickets',                 icon: 'fa-list' },
        { label: 'All undelivered messages',    icon: 'fa-envelope-open' },
        { label: 'All unresolved tickets',      icon: 'fa-circle-xmark' },
        { label: 'New and my open tickets',     icon: 'fa-ticket' },
        { label: 'Tickets handled by AI Agent', icon: 'fa-robot' },
        { label: 'Tickets I raised',            icon: 'fa-arrow-up-from-bracket' },
        { label: "Tickets I'm mentioned in",    icon: 'fa-at' },
        { label: "Tickets I'm watching",        icon: 'fa-eye' },
        { label: 'Spam',                        icon: 'fa-ban' },
        { label: 'Trash',                       icon: 'fa-trash' },
      ]},
    ],
  },
  contacts: {
    sections: [
      { title: 'Shared', items: [] },
      { title: 'Default', items: [
        { label: 'Contacts',  icon: 'fa-user' },
        { label: 'Companies', icon: 'fa-building' },
      ]},
    ],
  },
  kb: {
    sections: [
      { title: 'Default', items: [
        { label: 'Articles',   icon: 'fa-file-lines' },
        { label: 'Categories', icon: 'fa-folder' },
        { label: 'Tags',       icon: 'fa-tag' },
      ]},
    ],
  },
  reports: {
    sections: [
      { title: 'Default', items: [
        { label: 'Overview',         icon: 'fa-chart-pie' },
        { label: 'Ticket Reports',   icon: 'fa-ticket' },
        { label: 'Agent Reports',    icon: 'fa-headset' },
        { label: 'Canned Responses', icon: 'fa-comment-dots' },
      ]},
    ],
  },
  agents: {
    sections: [
      { title: 'Default', items: [
        { label: 'All Agents',  icon: 'fa-headset' },
        { label: 'Roles',       icon: 'fa-shield-halved' },
        { label: 'Teams',       icon: 'fa-people-group' },
        { label: 'Departments', icon: 'fa-sitemap' },
      ]},
    ],
  },
  analytics: {
    sections: [
      { title: 'Default', items: [
        { label: 'Dashboard',      icon: 'fa-chart-line' },
        { label: 'Custom Reports', icon: 'fa-chart-bar' },
        { label: 'Export',         icon: 'fa-file-export' },
      ]},
    ],
  },
  admin: {
    sections: [
      { title: 'Default', items: [
        { label: 'Settings',       icon: 'fa-gear' },
        { label: 'Email Settings', icon: 'fa-envelope' },
        { label: 'Plugins',        icon: 'fa-puzzle-piece' },
        { label: 'Integrations',   icon: 'fa-link' },
      ]},
    ],
  },
}

export function renderViews(navKey) {
  const data = navData[navKey]
  if (!data) return

  // soft-gray section cards (same recipe as the dashboards side panel);
  // active item = brand blue + trailing check (shown via .view-item.active css)
  let html = ''
  data.sections.forEach(section => {
    html += `<section class="shrink-0 rounded-[12px] bg-[#f5f7f9] p-4">
      <h2 class="m-0 pb-3 text-[13px] font-normal text-(--c-text-1)">${section.title}</h2>
      <div class="section-items flex flex-col">`
    section.items.forEach(item => {
      html += `<a href="#" class="view-item">
        <span class="w-4 flex items-center justify-center flex-shrink-0">
          ${matIcon(item.icon, 'text-[13px]')}
        </span>
        <span class="flex-1 min-w-0 truncate">${item.label}</span>
        ${matIcon('fa-check', 'view-item-check text-sm')}
      </a>`
    })
    html += '</div></section>'
  })

  $('#views-content').html(html)
}

// Views search
$(document).on('input', '#views-search', function () {
  const q = $(this).val().toLowerCase().trim()
  $('#views-content .view-item').each(function () {
    if (!q || $(this).text().toLowerCase().includes(q)) {
      $(this).removeClass('hidden')
    } else {
      $(this).addClass('hidden')
    }
  })
})

// View item highlight
$(document).on('click', '.view-item', function () {
  $('#views-content .view-item').removeClass('active')
  $(this).addClass('active')
})

// Toolbar toggle → views panel (angles icon flips with open state)
$('#btn-toggle-views').on('click', function () {
  var hidden = $('#views-panel').toggleClass('hidden').hasClass('hidden')
  $(this).attr('aria-expanded', String(!hidden))
  $(this).find('.m-angles-right').toggleClass('hidden', !hidden)
  $(this).find('.m-angles-left').toggleClass('hidden', hidden)
})
