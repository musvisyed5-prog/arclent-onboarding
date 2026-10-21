/* Recruiter (creator/company) platform-verification state — shared across recruiter-facing pages.
   Talent pages never use this. A recruiter earns the badge once they have at least one connected platform account
   (see creator-connected-account.html / co-connected-account.html). The badge markup is in the pages:
   <span class="rv-badge rv-tip" data-rv-badge="creator|company" hidden> ... </span> — it is revealed here when the role is verified. */
(function (w) {
  var KEY = { creator: "arclent_verified_creator", company: "arclent_verified_company" };
  function get(role) { try { return localStorage.getItem(KEY[role]) === "1"; } catch (e) { return false; } }
  function set(role, on) { try { localStorage.setItem(KEY[role], on ? "1" : "0"); } catch (e) {} sync(); }
  function sync() { document.querySelectorAll("[data-rv-badge]").forEach(function (el) { el.hidden = !get(el.getAttribute("data-rv-badge")); }); }
  w.RVerify = { get: get, set: set, sync: sync };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", sync); else sync();
})(window);
