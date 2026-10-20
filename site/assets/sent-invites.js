/* Invitations a recruiter (creator or company) has sent to talent, with the talent's response.
   Merges sample history with invitations sent from talent pages (localStorage "arclent_sent_invites").
   Responses from this prototype's talent (mosvie-media) are read from the talent's Invitations state. */
(function (w) {
  var PEOPLE = { "leo-jean": ["Léo Jean", 0], "freddy": ["Freddy", 1], "cauan-silva": ["Cauan Silva", 2], "calibun": ["Calibun", 3], "temitope-ojomo": ["Temitope Ojomo", 4], "mosvie-media": ["Mosvie Media", 5], "miv": ["Miv", 6], "dieamond-epic": ["Dieamond Epic", 7], "gabriel": ["Gabriel", 8] };
  var JOBS = { "hoops-video-editor": "Video Editor", "hoops-short-form-editor": "Short-form Editor" };
  var DAY = 864e5, now = Date.now();
  var SEED = [
    { id: "s-1", talentId: "leo-jean", jobId: "hoops-video-editor", status: "Pending", ts: now - 2 * DAY, msg: "Loved your pacing on the documentary cut." },
    { id: "s-2", talentId: "freddy", jobId: "hoops-video-editor", status: "Accepted", ts: now - 7 * DAY, msg: "Your channel growth work is exactly what we need." },
    { id: "s-3", talentId: "cauan-silva", jobId: "hoops-short-form-editor", status: "Declined", ts: now - 5 * DAY, msg: "" },
    { id: "s-4", talentId: "calibun", jobId: "hoops-video-editor", status: "Pending", ts: now - 1 * DAY, msg: "Would you like to join us on long-form basketball edits?" },
    { id: "s-5", talentId: "gabriel", jobId: "hoops-short-form-editor", status: "Accepted", ts: now - 14 * DAY, msg: "" }
  ];
  var json = function (k, d) { try { return JSON.parse(localStorage.getItem(k)) || d; } catch (e) { return d; } };
  function ago(ts) { var d = Math.floor((Date.now() - ts) / DAY); if (d < 1) { var h = Math.max(1, Math.floor((Date.now() - ts) / 36e5)); return h <= 1 ? "Just now" : h + " hours ago"; } return d === 1 ? "Yesterday" : d < 14 ? d + " days ago" : Math.floor(d / 7) + " weeks ago"; }
  function list() {
    var withdrawn = json("arclent_withdrawn", []), resp = json("arclent_invites", {});
    var sent = json("arclent_sent_invites", []).map(function (r) {
      return { id: "sent-" + r.ts, talentId: r.talentId, jobId: r.jobId, ts: r.ts, msg: r.msg, status: r.talentId === "mosvie-media" ? (resp["sent-" + r.ts] || "Pending") : "Pending" };
    });
    return sent.concat(SEED).filter(function (i) { return withdrawn.indexOf(i.id) < 0 && PEOPLE[i.talentId]; }).map(function (i) {
      var p = PEOPLE[i.talentId]; i.name = p[0]; i.idx = p[1]; i.job = JOBS[i.jobId] || "Job"; i.when = ago(i.ts); return i;
    }).sort(function (a, b) { return b.ts - a.ts; });
  }
  function withdraw(id) {
    var wd = json("arclent_withdrawn", []); wd.push(id); try { localStorage.setItem("arclent_withdrawn", JSON.stringify(wd)); } catch (e) {}
    var s = json("arclent_sent_invites", []).filter(function (r) { return "sent-" + r.ts !== id; });
    try { localStorage.setItem("arclent_sent_invites", JSON.stringify(s)); } catch (e) {}
  }
  w.SentInvites = { list: list, withdraw: withdraw };
})(window);
