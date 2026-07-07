/* HortelanoUrbano.es — Utilidades compartidas v2 */

/* ── Nav y Footer ─────────────────────────────────────────────────────────── */
const NAV_HTML = `
<nav class="nav">
  <div class="container nav-inner">
    <a href="/index.html" class="nav-logo">Hortelano<span>Urbano</span></a>
    <ul class="nav-links">
      <li><a href="/herramientas/calendario-siembra.html">Calendario</a></li>
      <li><a href="/herramientas/calculadora-riego.html">Riego</a></li>
      <li><a href="/herramientas/guia-plagas.html">Plagas</a></li>
      <li><a href="/herramientas/planificador-huerto.html">Planificador</a></li>
      <li><a href="/herramientas/guia-principiantes.html">Empezar</a></li>
    </ul>
    <button class="nav-menu-btn" id="navToggle" aria-label="Menú">
      <span></span><span></span><span></span>
    </button>
  </div>
  <div class="nav-mobile" id="navMobile">
    <a href="/index.html">Inicio</a>
    <a href="/herramientas/calendario-siembra.html">Calendario de siembra</a>
    <a href="/herramientas/calculadora-riego.html">Calculadora de riego</a>
    <a href="/herramientas/guia-plagas.html">Guía de plagas</a>
    <a href="/herramientas/calculadora-espacio.html">Calculadora de espacio</a>
    <a href="/herramientas/compatibilidad-plantas.html">Compatibilidad</a>
    <a href="/herramientas/guia-temporadas.html">Por temporada</a>
    <a href="/herramientas/planificador-huerto.html">Planificador</a>
    <a href="/herramientas/guia-principiantes.html">Empezar desde cero</a>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <div class="footer-brand">HortelanoUrbano</div>
        <p class="footer-desc">Herramientas gratuitas para cultivar tu huerto urbano en España. Calendarios, calculadoras y guías adaptadas a tu zona climática.</p>
      </div>
      <div class="footer-col">
        <h4>Herramientas</h4>
        <ul>
          <li><a href="/herramientas/calendario-siembra.html">Calendario de siembra</a></li>
          <li><a href="/herramientas/calculadora-riego.html">Calculadora de riego</a></li>
          <li><a href="/herramientas/guia-plagas.html">Guía de plagas</a></li>
          <li><a href="/herramientas/calculadora-espacio.html">Calculadora de espacio</a></li>
          <li><a href="/herramientas/compatibilidad-plantas.html">Compatibilidad</a></li>
          <li><a href="/herramientas/guia-temporadas.html">Por temporada</a></li>
          <li><a href="/herramientas/planificador-huerto.html">Planificador</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Empezar</h4>
        <ul>
          <li><a href="/herramientas/guia-principiantes.html">Guía para principiantes</a></li>
          <li><a href="/herramientas/guia-principiantes.html#plantas-faciles">Las 5 plantas más fáciles</a></li>
          <li><a href="/herramientas/guia-principiantes.html#lista-compra">Lista de compra</a></li>
          <li><a href="/herramientas/guia-principiantes.html#errores">Errores comunes</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2024 HortelanoUrbano.es — Herramientas gratuitas de huerto urbano</span>
      <span>Las compras a través de nuestros enlaces de Amazon generan una pequeña comisión sin coste adicional para ti.</span>
    </div>
  </div>
</footer>`;

function initNav() {
  const navContainer = document.getElementById('nav-root');
  if (navContainer) navContainer.innerHTML = NAV_HTML;
  const footerContainer = document.getElementById('footer-root');
  if (footerContainer) footerContainer.innerHTML = FOOTER_HTML;

  document.addEventListener('click', e => {
    const btn = e.target.closest('#navToggle');
    if (btn) {
      const mobile = document.getElementById('navMobile');
      mobile.classList.toggle('open');
    }
  });

  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(a => {
    if (a.getAttribute('href') && path.endsWith(a.getAttribute('href').replace(/^\//, ''))) {
      a.classList.add('active');
    }
  });
}

/* ── FAQ accordion ────────────────────────────────────────────────────────── */
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const answer = btn.nextElementSibling;
      const isOpen = answer.classList.contains('open');
      document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('open'));
      if (!isOpen) answer.classList.add('open');
    });
  });
}

/* ── Schema markup helpers ────────────────────────────────────────────────── */
function addSchema(type, data) {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify({ '@context': 'https://schema.org', '@type': type, ...data });
  document.head.appendChild(script);
}

/* ── Render helpers ───────────────────────────────────────────────────────── */
function dificultadBadge(d) {
  const map = { facil: ['badge-easy','Fácil'], media: ['badge-med','Media'], dificil: ['badge-hard','Difícil'] };
  const [cls, txt] = map[d] || ['badge-med','Media'];
  return `<span class="badge ${cls}">${txt}</span>`;
}

function categoriaNombre(c) {
  return { hortaliza: 'Hortaliza', fruta: 'Fruta', aromatica: 'Aromática' }[c] || c;
}

function mesNombre(m) { return MESES[m - 1] || ''; }

function renderMonthPills(info) {
  if (!info) return '<span class="text-muted text-sm">Sin datos para esta zona</span>';
  const all = [1,2,3,4,5,6,7,8,9,10,11,12];
  return `<div class="months-row">
    ${all.map(m => {
      let cls = 'nil', label = MESES[m-1];
      if (info.interior.includes(m)) cls = 'int';
      if (info.exterior.includes(m)) cls = 'ext';
      if (info.cosecha.includes(m)) cls = 'cos';
      return `<span class="month-pill ${cls === 'int' ? 'pill-interior' : cls === 'ext' ? 'pill-exterior' : cls === 'cos' ? 'pill-cosecha' : 'pill-none'}">${label}</span>`;
    }).join('')}
  </div>`;
}

function renderAffiliateProducts(productos) {
  const items = Object.entries(productos);
  if (!items.length) return '';
  return items.map(([, p]) => `
    <div class="affiliate-card">
      <div class="affiliate-card-label">Recomendado</div>
      <h4>${p.nombre}</h4>
      <a href="${p.url}" target="_blank" rel="nofollow noopener" class="amazon-btn">🛒 Ver en Amazon</a>
    </div>`).join('');
}

/* ── Provincia select ─────────────────────────────────────────────────────── */
function renderProvinciaSelect(selectEl, includeBlank = true) {
  const provincias = Object.values(ZONAS).flatMap(z => z.provincias).sort();
  let html = includeBlank ? '<option value="">Selecciona tu provincia</option>' : '';
  html += provincias.map(p => `<option value="${p}">${p}</option>`).join('');
  selectEl.innerHTML = html;
}

/* ── Init ─────────────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initFAQ();
});
