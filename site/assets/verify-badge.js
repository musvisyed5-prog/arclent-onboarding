/* Recruiter (creator/company) platform-verification badge — shared across recruiter-facing pages.
   Talent pages never use this. A recruiter earns the blue tick once they have at least one
   connected platform account (see creator-connected-account.html / co-connected-account.html). */
(function (w) {
  var KEY = { creator: "arclent_verified_creator", company: "arclent_verified_company" };
  function get(role) { try { return localStorage.getItem(KEY[role]) === "1"; } catch (e) { return false; } }
  function set(role, on) { try { localStorage.setItem(KEY[role], on ? "1" : "0"); } catch (e) {} }
  var TICK = '<svg width="18" height="18" viewBox="0 0 24 24" fill="#1D9BF0" stroke="#fff" stroke-width="1.6"><path d="M12 2 14.9 3.9 18.4 3.6 19.4 7 22.6 8.6 21.4 12 22.6 15.4 19.4 16 18.4 20.4 14.9 20.1 12 22 9.1 20.1 5.6 20.4 4.6 16 1.4 15.4 2.6 12 1.4 8.6 4.6 7 5.6 3.6 9.1 3.9Z"/><path d="m8.2 12.2 2.6 2.6 5-5.2" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  function badge(title) { return '<span class="rv-badge" title="' + (title || "Verified recruiter — platform connected") + '" aria-label="Verified recruiter">' + TICK + "</span>"; }
  function mount(el, role) { if (el && get(role)) el.insertAdjacentHTML("beforeend", badge()); }
  w.RVerify = { get: get, set: set, badge: badge, mount: mount };
})(window);
