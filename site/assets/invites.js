/* Job invitations a talent has received from recruiters (sample data) + their accept/decline state.
   State lives in localStorage so the sidebar badge and the dashboard card stay in sync with the Invitations page. */
(function (w) {
  var U = function (id) { return "https://images.unsplash.com/photo-" + id + "?crop=faces&fit=crop&w=120&h=120&q=80"; };
  var INVITES = [
    { id: "inv-1", who: "Jess Carter", kind: "Creator", av: U("1741455620227-3b1c51e01419"), verified: true, job: "Longform Video Editor", jobId: "jess-longform-video-editor", co: "Jess Carter", pay: "$900 – $1,200 / month", type: "Full time", when: "2 hours ago", msg: "Loved your pacing on the documentary cut. We are scaling long-form this quarter and I think you would fit right in." },
    { id: "inv-2", who: "Hoops", kind: "Company", av: U("1633625576932-348e73c45e82"), verified: true, job: "Video Editor", jobId: "hoops-video-editor", co: "Hoops", pay: "$600 – $700 / month", type: "Full time", when: "Yesterday", msg: "Your highlight edits are exactly the style we want for our basketball channel. Would you like to apply?" },
    { id: "inv-3", who: "Arclent AI", kind: "Company", av: U("1714750977930-e7a7f4611257"), verified: true, job: "AI Video Editor", jobId: "arclent-ai-video-editor", co: "Arclent AI", pay: "Not disclosed", type: "Part time", when: "3 days ago", msg: "" },
    { id: "inv-4", who: "Mara Online", kind: "Creator", av: U("1783598539449-36a8e3faef54"), verified: false, job: "Social Media Intern", jobId: "social-media-intern", co: "Mara Online", pay: "Unpaid · credit", type: "Internship", when: "1 week ago", msg: "We are a small team and would love to have you on board for short-form clips." }
  ];
  // invitations a recruiter sent to this talent from their portfolio page (this prototype's talent is "mosvie-media")
  try {
    (JSON.parse(localStorage.getItem("arclent_sent_invites")) || []).forEach(function (r, k) {
      if (r.talentId !== "mosvie-media") return;
      var j = { "hoops-video-editor": ["Video Editor", "Full time", "$600 – $700 / month"], "hoops-short-form-editor": ["Short-form Editor", "Full time", "Not disclosed"] }[r.jobId]; if (!j) return;
      INVITES.unshift({ id: "sent-" + r.ts, who: r.from || "Hoops", kind: "Company", av: U("1633625576932-348e73c45e82"), verified: true, job: j[0], jobId: r.jobId, co: "Hoops", pay: j[2], type: j[1], when: "Just now", msg: r.msg || "" });
    });
  } catch (e) {}
  var KEY = "arclent_invites";
  var read = function () { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } };
  var status = function (id) { return read()[id] || "Pending"; };
  var set = function (id, s) { var m = read(); m[id] = s; try { localStorage.setItem(KEY, JSON.stringify(m)); } catch (e) {} paint(); };
  var pending = function () { return INVITES.filter(function (i) { return status(i.id) === "Pending"; }).length; };
  function paint() {
    var n = pending();
    document.querySelectorAll('a[href="talent-invitations.html"]').forEach(function (a) {
      var c = a.querySelector(".inv-count"); if (c) c.remove();
      if (n && a.closest("#sidebar")) a.insertAdjacentHTML("beforeend", '<span class="inv-count mono ml-auto grid h-5 min-w-5 place-items-center rounded-full bg-[#CEF79E] px-1.5 text-ink">' + n + "</span>");
    });
    document.querySelectorAll("[data-inv-pending]").forEach(function (e) { e.textContent = n; });
  }
  w.Invites = { all: INVITES, status: status, set: set, pending: pending, paint: paint };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", paint); else paint();
})(window);
