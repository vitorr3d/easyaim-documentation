/* ============================================================
   EasyAim Documentation — Application Logic
   ============================================================ */

/* ── Utilities ── */
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function anchorId(sectionId, item) {
  return item ? sectionId + '-' + slugify(item) : sectionId;
}

/* ── State ── */
let activeSection = 'welcome';
let sidebarOpen = true;
let searchQuery = '';

/* ── DOM refs ── */
const sidebarNav  = document.getElementById('sidebarNav');
const docContent  = document.getElementById('docContent');
const sidebar     = document.getElementById('sidebar');
const searchInput = document.getElementById('searchInput');
const menuToggle  = document.getElementById('menuToggle');

/* ── Helpers ── */
function isVisible(text) {
  const q = searchQuery.trim().toLowerCase();
  if (!q) return true;
  return text.toLowerCase().includes(q);
}

/* ── Render sidebar ── */
function renderSidebar() {
  const q = searchQuery.trim().toLowerCase();

  const filtered = !q
    ? sections
    : sections
        .map(function (sec) {
          var labelMatch = sec.label.toLowerCase().includes(q);
          var itemMatch = sec.items
            ? sec.items.filter(function (i) { return i.toLowerCase().includes(q); })
            : [];
          return {
            ...sec,
            _match: labelMatch || itemMatch.length > 0,
            items: labelMatch ? sec.items : itemMatch,
          };
        })
        .filter(function (s) { return s._match; });

  var html = '';
  filtered.forEach(function (sec) {
    html += '<div class="sidebar-group">';
    html +=
      '<button class="sidebar-item' +
      (activeSection === sec.id ? ' active' : '') +
      '" data-nav="' + sec.id + '">' +
      '<span class="item-icon">' + sec.icon + '</span>' +
      '<span class="item-label">' + sec.label + '</span>' +
      '</button>';

    if (sec.items && sec.items.length) {
      html += '<div class="sidebar-sublist">';
      sec.items.forEach(function (item) {
        var id = anchorId(sec.id, item);
        html +=
          '<button class="sidebar-subitem' +
          (activeSection === id ? ' active' : '') +
          '" data-nav="' + id + '">' +
          item +
          '</button>';
      });
      html += '</div>';
    }

    html += '</div>';
  });

  sidebarNav.innerHTML = html;

  // Attach click handlers
  sidebarNav.querySelectorAll('[data-nav]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      scrollTo(btn.getAttribute('data-nav'));
    });
  });
}

/* ── Render content ── */
function renderContent() {
  var html = '';

  // ── Welcome ──
  html +=
    '<section id="welcome" class="doc-section">' +
    '<div class="section-header">' +
    '<h1 class="section-title">' +
    '<span class="title-accent">EasyAim</span> ' +
    '<span class="title-light">Scenario Builder</span>' +
    '</h1>' +
    '<div class="section-badge">DOCUMENTATION</div>' +
    '</div>' +
    '<div class="welcome-card">' +
    '<p class="welcome-text">' +
    'Welcome to the <strong>EasyAim Scenario Builder</strong> documentation. ' +
    'Here you will find explanations of every function and some examples ' +
    'of scenarios created by <a href="#" class="doc-link">r3d</a>.' +
    '</p>' +
    '<div class="welcome-stats">' +
    '<div class="stat"><span class="stat-value">' + (sections.length - 1) + '+</span><span class="stat-label">Sections</span></div>' +
    '<div class="stat"><span class="stat-value">' + sections.reduce(function (a, s) { return a + (s.items ? s.items.length : 0); }, 0) + '</span><span class="stat-label">Configurations</span></div>' +
    '<div class="stat"><span class="stat-value">18</span><span class="stat-label">Actions</span></div>' +
    '</div>' +
    '</div>' +
    '</section>';

  // ── First Configurations ──
  html +=
    '<section id="first-configurations" class="doc-section">' +
    '<h2 class="section-title secondary"><span class="section-icon">⚙️</span> First Configurations</h2>' +
    '<p class="section-desc">Global scenario settings that define the environment and rules.</p>' +
    '<div class="fields-grid">';

  sections[1].items.forEach(function (item) {
    var id = anchorId('first-configurations', item);
    var highlighted = searchQuery && isVisible(item) ? ' highlighted' : '';
    html +=
      '<div id="' + id + '" class="field-card' + highlighted + '">' +
      '<h3 class="field-name">' + item + '</h3>' +
      '<p class="field-desc">' + (fieldDescriptions[item] || '') + '</p>' +
      '</div>';
  });

  html += '</div></section>';

  // ── Targets Configuration ──
  html +=
    '<section id="targets-configuration" class="doc-section">' +
    '<h2 class="section-title secondary"><span class="section-icon">🎯</span> Targets Configuration</h2>' +
    '<p class="section-desc">Create and configure targets for your scenario.</p>' +
    '<div class="fields-grid">';

  sections[2].items.forEach(function (item) {
    var id = anchorId('targets-configuration', item);
    var label = item;
    var desc = item === 'New Target' ? 'Creates a new target configuration.' : (targetDescriptions[item] || '');
    html +=
      '<div id="' + id + '" class="field-card">' +
      '<h3 class="field-name">' + label + '</h3>' +
      '<p class="field-desc">' + desc + '</p>' +
      '</div>';
  });

  html += '</div></section>';

  // ── Behaviours Configuration ──
  html +=
    '<section id="behaviours-configuration" class="doc-section">' +
    '<h2 class="section-title secondary"><span class="section-icon">🧠</span> Behaviours Configuration</h2>' +
    '<div class="info-block">' +
    '<p>This is where you set up everything that will happen with your target. You control every action.</p>' +
    '<div class="info-callout">' +
    '<strong>Behaviours</strong> are "folders" of actions executed by targets. Inside them you will find <strong>Frames</strong>, and inside Frames are the <strong>actions</strong>.' +
    '</div>' +
    '</div>' +
    '</section>';

  // ── Actions ──
  html +=
    '<section id="actions" class="doc-section">' +
    '<h2 class="section-title secondary"><span class="section-icon">⚡</span> Actions</h2>' +
    '<p class="section-desc">All available actions that can be attached to target behaviour frames.</p>' +
    '<div class="actions-list">';

  sections[4].items.forEach(function (item) {
    var id = anchorId('actions', item);
    var info = actionData[item] || {};
    var tagClass = info.tag === 'event' ? ' event' : '';
    html +=
      '<div id="' + id + '" class="action-card">' +
      '<div class="action-header">' +
      '<code class="action-name">' + item + '</code>' +
      '<span class="action-tag' + tagClass + '">' + (info.tag || '') + '</span>' +
      '</div>' +
      '<p class="action-desc">' + (info.desc || '') + '</p>';

    if (info.subfields) {
      html += '<div class="action-subfields">';
      info.subfields.forEach(function (sf) {
        html +=
          '<div class="subfield">' +
          '<code>' + sf[0] + '</code>' +
          '<span>' + sf[1] + '</span>' +
          '</div>';
      });
      html += '</div>';
    }

    html += '</div>';
  });

  html += '</div></section>';

  // ── Footer ──
  html +=
    '<footer class="doc-footer">' +
    '<p>EasyAim Scenario Builder &mdash; Documentation v1.0</p>' +
    '<p>Built for the aiming community by r3d</p>' +
    '</footer>';

  docContent.innerHTML = html;
}

/* ── Navigation ── */
function scrollTo(id) {
  activeSection = id;
  var el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
  renderSidebar();
}

/* ── Search ── */
function handleSearch() {
  searchQuery = searchInput.value;
  renderSidebar();
  renderContent();
}

/* ── Sidebar toggle ── */
function toggleSidebar() {
  sidebarOpen = !sidebarOpen;
  sidebar.classList.toggle('collapsed', !sidebarOpen);
}

/* ── Init ── */
renderContent();
renderSidebar();

// Event listeners
searchInput.addEventListener('input', handleSearch);
menuToggle.addEventListener('click', toggleSidebar);

// Watch for scroll to update active section
docContent.addEventListener('scroll', function () {
  // no-op: activeSection updates only on click
});
