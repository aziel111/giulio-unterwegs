// Giulio Unterwegs

// Kopfzeile: dunkler Hintergrund nach dem ersten Scrollen + Handy-Menü
(function () {
  var kopf = document.getElementById('kopf');
  if (!kopf) return;
  var update = function () { kopf.classList.toggle('ist-gescrollt', window.scrollY > 24); };
  update();
  window.addEventListener('scroll', update, { passive: true });

  var knopf = kopf.querySelector('.menue-knopf');
  var nav = document.getElementById('menue');
  if (!knopf || !nav) return;
  var setze = function (offen) {
    knopf.setAttribute('aria-expanded', offen ? 'true' : 'false');
    kopf.classList.toggle('menue-offen', offen);
    document.body.classList.toggle('menue-offen', offen);
  };
  knopf.addEventListener('click', function () { setze(knopf.getAttribute('aria-expanded') !== 'true'); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setze(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setze(false); });
})();

// Elemente tauchen beim Scrollen auf
(function () {
  var els = document.querySelectorAll('.auftauchen');
  if (!els.length) return;
  if (!('IntersectionObserver' in window)) { els.forEach(function (el) { el.classList.add('ist-sichtbar'); }); return; }
  var io = new IntersectionObserver(function (eintraege) {
    eintraege.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('ist-sichtbar'); io.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  els.forEach(function (el) { io.observe(el); });
})();

// YouTube erst nach Klick laden (Datenschutz). data-format="hoch" = Shorts/Reels im 9:16-Player
(function () {
  var dialog = document.getElementById('player');
  var knoepfe = document.querySelectorAll('[data-video]');
  if (!dialog || !knoepfe.length) return;
  var buehne = dialog.querySelector('.player-buehne');
  var titel = dialog.querySelector('.player-titel');
  var zuletzt = null;

  var schliessen = function () {
    buehne.replaceChildren();
    if (dialog.open) dialog.close();
    if (zuletzt) zuletzt.focus();
  };

  knoepfe.forEach(function (k) {
    k.addEventListener('click', function () {
      var id = k.getAttribute('data-video');
      var name = k.getAttribute('data-titel') || '';
      var hoch = k.getAttribute('data-format') === 'hoch';
      if (typeof dialog.showModal !== 'function') {
        window.open('https://www.youtube.com/' + (hoch ? 'shorts/' : 'watch?v=') + id, '_blank', 'noopener');
        return;
      }
      zuletzt = k;
      dialog.classList.toggle('player--hoch', hoch);
      var f = document.createElement('iframe');
      f.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) + '?autoplay=1&rel=0&playsinline=1';
      f.title = name;
      f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
      f.allowFullscreen = true;
      buehne.replaceChildren(f);
      titel.textContent = name;
      dialog.showModal();
    });
  });
  dialog.querySelector('[data-zu]').addEventListener('click', schliessen);
  dialog.addEventListener('click', function (e) { if (e.target === dialog) schliessen(); });
  dialog.addEventListener('close', function () { buehne.replaceChildren(); });
})();
