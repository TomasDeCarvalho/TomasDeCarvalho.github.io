// Tomás de Carvalho — menu mobile (único JS do site; sem dependências).
(function () {
  var btn = document.querySelector('.menu-btn');
  var nav = document.querySelector('.nav-main');
  if (!btn || !nav) return;
  function close() {
    nav.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  }
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  });
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) close();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { close(); btn.focus({ preventScroll: true }); }
  });
})();
