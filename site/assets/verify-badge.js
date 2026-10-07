/* Recruiter (creator/company) platform-verification badge — shared across recruiter-facing pages.
   Talent pages never use this. A recruiter earns the badge once they have at least one
   connected platform account (see creator-connected-account.html / co-connected-account.html). */
(function (w) {
  var KEY = { creator: "arclent_verified_creator", company: "arclent_verified_company" };
  function get(role) { try { return localStorage.getItem(KEY[role]) === "1"; } catch (e) { return false; } }
  function set(role, on) { try { localStorage.setItem(KEY[role], on ? "1" : "0"); } catch (e) {} }
  var st = document.createElement("style");
  st.textContent = ".rv-badge{display:inline-flex;vertical-align:-4px;margin-left:6px}.rv-badge img{display:block;width:22px;height:22px;object-fit:contain}h1 .rv-badge img{width:.42em;height:.42em;min-width:34px;min-height:34px}h1 .rv-badge{vertical-align:.12em;margin-left:.1em}" + ".rv-tip{position:relative;display:inline-flex;vertical-align:middle;cursor:help}.rv-tip::after{content:attr(data-tip);position:absolute;left:-8px;bottom:calc(100% + 8px);transform:translate(0,4px);white-space:nowrap;padding:8px 12px;border-radius:8px;background:#222F30;color:#fff;font:400 12px/1.2 'Roboto Mono',monospace;text-transform:none;letter-spacing:0;pointer-events:none;opacity:0;transition:opacity .2s,transform .2s;z-index:80}.rv-tip:hover::after,.rv-tip:focus-visible::after{opacity:1;transform:translate(0,0)}";
  document.head.appendChild(st);
  function badge(title) { var t = title || "This recruiter is Arclent Verified"; return '<span class="rv-badge rv-tip" tabindex="0" data-tip="' + t + '"><img src="assets/recruiter-verified.png" alt="' + t + '" /></span>'; }
  function mount(el, role) { if (el && get(role)) el.insertAdjacentHTML("beforeend", badge()); }
  w.RVerify = { get: get, set: set, badge: badge, mount: mount };
})(window);
