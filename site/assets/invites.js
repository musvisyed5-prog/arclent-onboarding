/* Talent-side invitation state. The invitation cards themselves are in the page markup (talent-invitations.html,
   notifications.html); this script keeps who-responded-what in localStorage and shows/hides what exists.
   Ids: "inv-1".."inv-4" are the sample invitations; "sent:<talent>:<job>" is one a recruiter sent from a portfolio page
   (this prototype's talent is "mosvie-media"). */
(function (w) {
  var SEED = ["inv-1", "inv-2", "inv-3", "inv-4"];
  var KEY = "arclent_invites";
  var json = function (k, d) { try { return JSON.parse(localStorage.getItem(k)) || d; } catch (e) { return d; } };
  function sentIds() {
    return json("arclent_sent_invites", []).filter(function (r) { return r.talentId === "mosvie-media"; })
      .map(function (r) { return "sent:" + r.talentId + ":" + r.jobId; });
  }
  var ids = function () { return sentIds().concat(SEED); };
  var status = function (id) { return json(KEY, {})[id] || "Pending"; };
  var set = function (id, s) { var m = json(KEY, {}); m[id] = s; try { localStorage.setItem(KEY, JSON.stringify(m)); } catch (e) {} paint(); };
  var pending = function () { return ids().filter(function (i) { return status(i) === "Pending"; }).length; };
  function paint() {
    var n = pending();
    document.querySelectorAll("#sidebar .inv-count").forEach(function (c) { c.textContent = n; c.classList.toggle("hidden", !n); });
    document.querySelectorAll("[data-inv-pending]").forEach(function (e) { e.textContent = n; });
  }
  w.Invites = { ids: ids, status: status, set: set, pending: pending, paint: paint };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", paint); else paint();
})(window);
