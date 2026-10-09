/* Hover tooltips for badges: every tier badge (Bronze to Red Diamond) says which badge it is, and every
   element with class "rv-tip" + data-tip (e.g. the recruiter verified badge) shows its text.
   One shared tooltip is positioned with fixed coordinates and clamped to the viewport, so it is never
   clipped by a card's overflow:hidden. Also covers badges that page scripts render later. */
(function () {
  if (window.__tierTip) return; window.__tierTip = true;
  var INFO = {
    bronze: "Arclent Verified Bronze · under 100K subscribers",
    silver: "Arclent Verified Silver · 100K+ subscribers",
    gold: "Arclent Verified Gold · 1M+ subscribers",
    diamond: "Arclent Verified Diamond · 10M+ subscribers",
    reddiamond: "Arclent Verified Red Diamond · 100M+ subscribers"
  };
  var css = ".rv-tip{position:relative;display:inline-flex;vertical-align:middle;cursor:help;flex-shrink:0}.rv-tip::after{display:none!important}" +
    "#tt-global{position:fixed;left:0;top:0;z-index:2147483000;display:none;pointer-events:none;white-space:nowrap;max-width:calc(100vw - 16px);padding:8px 12px;border-radius:8px;background:#222F30;color:#fff;font:400 12px/1.2 'Roboto Mono',monospace;text-transform:none;letter-spacing:0;box-shadow:0 8px 24px rgba(34,47,48,.25);opacity:0;transition:opacity .15s}";
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  var tip = document.createElement("div"); tip.id = "tt-global"; tip.setAttribute("role", "tooltip");
  function ready(fn) { if (document.body) fn(); else document.addEventListener("DOMContentLoaded", fn); }
  ready(function () { document.body.appendChild(tip); });
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

  var RX = /assets\/badge-(bronze|silver|gold|diamond|reddiamond)\.png/;
  function wrap(img) {
    var m = RX.exec(img.getAttribute("src") || ""); if (!m || img.dataset.tipped) return;
    img.dataset.tipped = "1";
    var p = img.parentNode; if (p && p.title) p.removeAttribute("title");   // drop the plain browser tooltip
    var s = document.createElement("span"); s.className = "rv-tip"; s.tabIndex = 0; s.setAttribute("data-tip", INFO[m[1]]);
    img.parentNode.insertBefore(s, img); s.appendChild(img);
  }
  function scan(root) { (root.querySelectorAll ? root.querySelectorAll('img[src*="assets/badge-"]') : []).forEach(wrap); }
  scan(document);
  new MutationObserver(function (ms) {
    ms.forEach(function (m) { m.addedNodes.forEach(function (n) { if (n.nodeType === 1) { if (n.tagName === "IMG") wrap(n); else scan(n); } }); });
  }).observe(document.documentElement, { childList: true, subtree: true });
})();
