/* Promo banner: measures the banner already in the page (#promo-bar) so the fixed nav and body offset follow its height. */
(function () {
  var bar = document.getElementById("promo-bar"); if (!bar) return;
  function size() { document.documentElement.style.setProperty("--promo-h", bar.offsetHeight + "px"); }
  size(); addEventListener("resize", size);
  if (window.ResizeObserver) new ResizeObserver(size).observe(bar);
})();
