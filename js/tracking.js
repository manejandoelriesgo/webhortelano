/* HortelanoUrbano.es — Tracking de clics en enlaces de afiliado Amazon */
(function () {
  function esEnlaceAmazon(href) {
    if (!href) return false;
    return href.includes('amzn.to') || href.includes('amazon.es') || href.includes('amazon.com');
  }

  function nombreProducto(el) {
    // Intenta sacar un nombre legible del producto desde el contexto del link
    var card = el.closest('.kit-item, .affiliate-card, .afiliado-box, [data-producto]');
    if (card) {
      var dataAttr = card.getAttribute('data-producto');
      if (dataAttr) return dataAttr;
      var h = card.querySelector('h4, h3, strong');
      if (h && h.textContent.trim()) return h.textContent.trim().slice(0, 100);
    }
    // Fallback: el propio texto del link, o "producto sin nombre"
    var texto = el.textContent.trim();
    return texto ? texto.slice(0, 100) : 'producto_sin_nombre';
  }

  document.addEventListener('click', function (e) {
    var link = e.target.closest('a');
    if (!link) return;
    var href = link.getAttribute('href') || '';
    if (!esEnlaceAmazon(href)) return;

    if (typeof gtag === 'function') {
      gtag('event', 'click_amazon', {
        producto: nombreProducto(link),
        pagina_origen: window.location.pathname,
        url_destino: href
      });
    }
  }, true); // captura en fase de captura para no perder clics por stopPropagation de otros scripts
})();
