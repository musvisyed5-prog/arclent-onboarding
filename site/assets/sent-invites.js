/* Recruiter-side invitation state (creator and company dashboards). The rows live in the page markup
   (invitations-sent pages, notifications); this script says which of them exist and what each talent answered.
   Keys: "s-1".."s-5" are sample history; "sent:<talent>:<job>" is an invitation sent from a talent's portfolio page.
   Only this prototype's talent ("mosvie-media") can answer, from the talent dashboard. */
(function (w) {
  var SEED = { "s-1": "Pending", "s-2": "Accepted", "s-3": "Declined", "s-4": "Pending", "s-5": "Accepted" };
  var json = function (k, d) { try { return JSON.parse(localStorage.getItem(k)) || d; } catch (e) { return d; } };
  var save = function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };
  var DAY = 864e5;
  function state() {
    var wd = json("arclent_withdrawn", []), resp = json("arclent_invites", {}), out = {};
    Object.keys(SEED).forEach(function (k) { if (wd.indexOf(k) < 0) out[k] = { status: SEED[k], ts: 0, msg: "" }; });
    json("arclent_sent_invites", []).forEach(function (r) {
      var k = "sent:" + r.talentId + ":" + r.jobId; if (wd.indexOf(k) >= 0) return;
      out[k] = { status: r.talentId === "mosvie-media" ? (resp[k] || "Pending") : "Pending", ts: r.ts, msg: r.msg || "" };
    });
    return out;
  }
  function withdraw(k) {
    var wd = json("arclent_withdrawn", []); if (wd.indexOf(k) < 0) wd.push(k); save("arclent_withdrawn", wd);
    save("arclent_sent_invites", json("arclent_sent_invites", []).filter(function (r) { return "sent:" + r.talentId + ":" + r.jobId !== k; }));
  }
  function ago(ts) {
    var h = Math.floor((Date.now() - ts) / 36e5), d = Math.floor((Date.now() - ts) / DAY);
    return h < 1 ? "Just now" : h < 24 ? h + (h === 1 ? " hour ago" : " hours ago") : d === 1 ? "Yesterday" : d < 14 ? d + " days ago" : Math.floor(d / 7) + " weeks ago";
  }
  w.SentInvites = { state: state, withdraw: withdraw, ago: ago };
})(window);
