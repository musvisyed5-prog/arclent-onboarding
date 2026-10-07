/* Sticky promo banner for the public pages: pinned to the top of the viewport, the fixed nav sits just below it. */
(function () {
  if (window.__promo) return; window.__promo = true;
  var css = "\
#promo-bar{position:fixed;top:0;left:0;right:0;z-index:60;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:6px 16px;padding:8px 16px;background:#222F30;color:#fff;font-family:'Inter Tight',system-ui,sans-serif;font-size:16px;letter-spacing:-.01em;text-align:center;border-bottom:1px solid rgba(255,255,255,.12)}\
#promo-bar b{font-weight:400;color:#CEF79E}\
#promo-bar a{display:inline-flex;align-items:center;gap:6px;height:36px;padding:0 16px;border-radius:999px;background:#CEF79E;color:#222F30;text-decoration:none;font-size:14px;white-space:nowrap;transition:background-color .3s,transform .3s}\
#promo-bar a:hover{background:#fff;transform:translateY(-1px)}\
body.has-promo{padding-top:var(--promo-h,52px)}\
body.has-promo .fixed.top-4{top:calc(var(--promo-h,52px) + 16px)!important}\
@media(max-width:640px){#promo-bar{font-size:14px;padding:8px 12px}}";
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);
  var bar = document.createElement("div"); bar.id = "promo-bar"; bar.setAttribute("role", "region"); bar.setAttribute("aria-label", "Promotion");
  bar.innerHTML = '<span>Job posting is <b>100% free</b> &mdash; for a limited time. Post now, pay nothing.</span><a href="choose-role.html">Post a job free <span aria-hidden="true">&rarr;</span></a>';
  document.body.insertBefore(bar, document.body.firstChild);
  document.body.classList.add("has-promo");
  function size() { document.documentElement.style.setProperty("--promo-h", bar.offsetHeight + "px"); }
  size(); addEventListener("resize", size);
  if (window.ResizeObserver) new ResizeObserver(size).observe(bar);
})();
