/* Hover tooltip for badges. Every element with class "rv-tip" and a data-tip (tier badges, the recruiter verified badge)
   shows its text in the shared #tt-global box that is in the page markup. The box is positioned with fixed coordinates
   and clamped to the viewport, so it is never clipped by a card's overflow:hidden. */
(function () {
  if (window.__tierTip) return; window.__tierTip = true;
  var tip = document.getElementById("tt-global"); if (!tip) return;
  var cur = null;
  function show(el) {
    var t = el.getAttribute("data-tip"); if (!t) return;
    cur = el; tip.textContent = t; tip.style.display = "block"; tip.style.opacity = "0";
    var r = el.getBoundingClientRect(), w = tip.offsetWidth, h = tip.offsetHeight;
    var left = Math.min(Math.max(8, r.left + r.width / 2 - w / 2), innerWidth - w - 8);
    var top = r.top - h - 8; if (top < 8) top = r.bottom + 8;
    tip.style.left = left + "px"; tip.style.top = top + "px"; tip.style.opacity = "1";
  }
  function hide() { cur = null; tip.style.opacity = "0"; tip.style.display = "none"; }
  var near = function (e) { return e.target && e.target.closest ? e.target.closest(".rv-tip") : null; };
  document.addEventListener("mouseover", function (e) { var el = near(e); if (el) show(el); });
  document.addEventListener("mouseout", function (e) { var el = near(e); if (el && !el.contains(e.relatedTarget)) hide(); });
  document.addEventListener("focusin", function (e) { var el = near(e); if (el) show(el); });
  document.addEventListener("focusout", function (e) { if (near(e)) hide(); });
  addEventListener("scroll", function () { if (cur) hide(); }, { passive: true });
})();
