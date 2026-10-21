/* Recruiter invite flow on a talent's page. The Invite button is visible to everyone; the popup (#iv-back) is in the page markup.
   Logged-out visitors (and talent) see the sign-in view, recruiters pick one of their jobs, add a note and send.
   Sent invitations are kept in localStorage ("arclent_sent_invites"). */
(function (w) {
  var SESSION = "arclent_session", SENT = "arclent_sent_invites";
  var back = document.getElementById("iv-back"); if (!back) return;
  var json = function (k, d) { try { return JSON.parse(localStorage.getItem(k)) || d; } catch (e) { return d; } };
  var session = function () { return json(SESSION, null); };
  var tid = function () { return new URLSearchParams(location.search).get("id") || "leo-jean"; };
  var already = function (jid) { return json(SENT, []).some(function (s) { return s.talentId === tid() && s.jobId === jid; }); };
  var talent = null, pick = "";
  var send = back.querySelector("#iv-send"), msg = back.querySelector("#iv-msg"), btn = document.getElementById("invite-btn");
  var jobs = back.querySelectorAll(".iv-job");

  function view(name) { back.querySelectorAll("[data-iv-view]").forEach(function (v) { v.hidden = v.dataset.ivView !== name; }); }
  function names() { back.querySelectorAll("[data-iv-name]").forEach(function (e) { e.textContent = talent.name; }); }
  function open() { back.classList.add("on"); document.body.style.overflow = "hidden"; }
  function close() { back.classList.remove("on"); document.body.style.overflow = ""; }

  function gate(role) {
    names();
    back.querySelector('[data-gate="talent"]').hidden = role !== "talent";
    back.querySelector('[data-gate="guest"]').hidden = role === "talent";
    back.querySelector("#iv-login").setAttribute("href", "login.html?next=" + encodeURIComponent(location.pathname.replace(/^\//, "") + location.search));
    view("gate"); open();
  }
  function form() {
    pick = ""; names(); msg.value = ""; msg.setAttribute("placeholder", "Tell " + talent.name.split(" ")[0] + " why you think they are a fit."); send.disabled = true;
    jobs.forEach(function (j) {
      var dis = already(j.dataset.job);
      j.disabled = dis; j.setAttribute("aria-pressed", "false"); j.querySelector(".iv-already").hidden = !dis;
    });
    view("form"); open();
  }
  function mark() {
    if (!btn || !talent) return;
    var n = 0; jobs.forEach(function (j) { if (already(j.dataset.job)) n++; });
    btn.classList.toggle("invited", n > 0);
    btn.querySelector(".inv-label").textContent = n ? "Invited (" + n + ")" : "Invite to a job";
  }

  document.addEventListener("click", function (e) {
    var t = e.target;
    if (t.closest("#invite-btn")) { talent = talent || w.TALENT; if (!talent) return; var s = session(); if (s && s.role === "recruiter") form(); else gate(s && s.role); return; }
    if (t === back || t.closest("[data-x]")) { close(); return; }
    var j = t.closest(".iv-job");
    if (j && !j.disabled) { pick = j.dataset.job; jobs.forEach(function (b) { b.setAttribute("aria-pressed", String(b === j)); }); send.disabled = false; return; }
    if (t.closest("#iv-send") && pick) {
      var job = back.querySelector('.iv-job[data-job="' + pick + '"]'), s2 = session() || {};
      var list = json(SENT, []); list.push({ talentId: tid(), jobId: pick, msg: msg.value.trim(), from: s2.name || "Hoops", ts: Date.now() });
      try {
        localStorage.setItem(SENT, JSON.stringify(list));
        // a re-invite of a withdrawn invitation counts again
        var key = "sent:" + tid() + ":" + pick;
        localStorage.setItem("arclent_withdrawn", JSON.stringify(json("arclent_withdrawn", []).filter(function (k) { return k !== key; })));
      } catch (x) {}
      back.querySelectorAll("[data-iv-job]").forEach(function (e2) { e2.textContent = job.dataset.title; });
      names(); view("done"); mark();
    }
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
  if (w.TALENT) { talent = w.TALENT; mark(); }
  w.InviteFlow = { setTalent: function (t) { talent = t; mark(); } };
})(window);
