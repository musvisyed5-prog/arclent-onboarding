/* Recruiter invite flow on a talent's page. The Invite button is visible to everyone:
   logged-out visitors (and talent) get a sign-in prompt, recruiters pick one of their jobs, add a note and send.
   Sent invitations are kept in localStorage; invitations sent to "mosvie-media" show up in that talent's Invitations page. */
(function (w) {
  var SESSION = "arclent_session", SENT = "arclent_sent_invites";
  var JOBS = [
    { id: "hoops-video-editor", title: "Video Editor", co: "Hoops", meta: "Full time · 600 – 700 / month" },
    { id: "hoops-short-form-editor", title: "Short-form Editor", co: "Hoops", meta: "Full time · Not disclosed" }
  ];
  var esc = function (t) { return String(t).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var session = function () { try { return JSON.parse(localStorage.getItem(SESSION)); } catch (e) { return null; } };
  var sent = function () { try { return JSON.parse(localStorage.getItem(SENT)) || []; } catch (e) { return []; } };
  var already = function (tid, jid) { return sent().some(function (s) { return s.talentId === tid && s.jobId === jid; }); };
  var send = function (rec) { var l = sent(); l.push(rec); try { localStorage.setItem(SENT, JSON.stringify(l)); } catch (e) {} };

  var tid = function () { return new URLSearchParams(location.search).get("id") || "leo-jean"; };
  var css = "#iv-back{position:fixed;inset:0;z-index:2147482000;display:none;align-items:center;justify-content:center;padding:16px;background:rgba(34,47,48,.55);backdrop-filter:blur(6px)}#iv-back.on{display:flex}" +
    "#iv-box{position:relative;width:100%;max-width:540px;max-height:calc(100vh - 32px);overflow:auto;border-radius:24px;background:#222F30;color:#fff;padding:32px;font-family:'Inter Tight',system-ui,sans-serif;animation:ivin .45s cubic-bezier(.16,1,.3,1)}" +
    "@keyframes ivin{from{opacity:0;transform:translateY(16px) scale(.98)}to{opacity:1;transform:none}}" +
    "#iv-box .iv-x{position:absolute;right:16px;top:16px;width:36px;height:36px;border-radius:10px;background:rgba(255,255,255,.1);color:#fff;border:0;cursor:pointer;font-size:18px}" +
    "#iv-box .iv-eb{font:400 11px/1.3 'Roboto Mono',monospace;text-transform:uppercase;color:#CEF79E}" +
    "#iv-box h2{margin:12px 0 0;font-size:34px;line-height:1.05;letter-spacing:-.03em;font-weight:400}#iv-box h2 span{color:rgba(255,255,255,.5)}" +
    "#iv-box p.iv-s{margin:12px 0 0;color:rgba(255,255,255,.7);font-size:16px;line-height:1.35}" +
    "#iv-box .iv-job{display:flex;align-items:center;gap:12px;width:100%;text-align:left;margin-top:8px;padding:14px 16px;border-radius:14px;background:rgba(255,255,255,.07);border:1px solid transparent;color:#fff;cursor:pointer;transition:background .3s,border-color .3s}" +
    "#iv-box .iv-job:hover{background:rgba(255,255,255,.12)}#iv-box .iv-job[aria-pressed=true]{border-color:#CEF79E;background:rgba(206,247,158,.12)}#iv-box .iv-job[disabled]{opacity:.45;cursor:not-allowed}" +
    "#iv-box .iv-job b{display:block;font-weight:400;font-size:17px}#iv-box .iv-job small{font:400 11px/1.3 'Roboto Mono',monospace;text-transform:uppercase;color:rgba(255,255,255,.55)}" +
    "#iv-box .iv-dot{width:18px;height:18px;border-radius:50%;border:1.5px solid rgba(255,255,255,.4);flex-shrink:0}#iv-box .iv-job[aria-pressed=true] .iv-dot{background:#CEF79E;border-color:#CEF79E;box-shadow:inset 0 0 0 4px #222F30}" +
    "#iv-box label{display:block;margin-top:20px;font:400 11px/1.3 'Roboto Mono',monospace;text-transform:uppercase;color:rgba(255,255,255,.6)}" +
    "#iv-box textarea{width:100%;min-height:104px;margin-top:8px;padding:14px 16px;border-radius:14px;border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.06);color:#fff;font:400 16px/1.35 'Inter Tight',sans-serif;resize:vertical}#iv-box textarea:focus{outline:none;border-color:#CEF79E}" +
    "#iv-box .iv-row{display:flex;flex-wrap:wrap;gap:8px;margin-top:24px}" +
    "#iv-box .iv-cta{display:inline-flex;align-items:center;justify-content:center;height:48px;padding:0 24px;border-radius:12px;border:0;background:#CEF79E;color:#222F30;font:400 13px/1 'Roboto Mono',monospace;text-transform:uppercase;cursor:pointer;text-decoration:none;transition:background .4s,color .4s}#iv-box .iv-cta:hover{background:#fff}#iv-box .iv-cta[disabled]{opacity:.4;cursor:not-allowed}" +
    "#iv-box .iv-ghost{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.3)}#iv-box .iv-ghost:hover{background:rgba(255,255,255,.1)}" +
    "#invite-btn.invited{background:#EEEEEE;color:#222F30}";
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);
  var back = document.createElement("div"); back.id = "iv-back"; back.innerHTML = '<div id="iv-box" role="dialog" aria-modal="true" aria-labelledby="iv-h"></div>';
  document.body.appendChild(back);
  var box = back.firstChild, talent = null, pick = "";
  var close = function () { back.classList.remove("on"); document.body.style.overflow = ""; };
  var open = function () { back.classList.add("on"); document.body.style.overflow = "hidden"; };
  var X = '<button type="button" class="iv-x" data-x aria-label="Close">&times;</button>';

  function gate(role) {
    var talentSession = role === "talent";
    box.innerHTML = X + '<p class="iv-eb">Invite to a job</p><h2 id="iv-h">Invite <span>' + esc(talent.name) + "</span></h2>" +
      '<p class="iv-s">' + (talentSession ? "Invitations can only be sent from a recruiter account. Log in as a creator or company to invite " + esc(talent.name) + "." :
        "Log in as a recruiter (creator or company) to invite " + esc(talent.name) + " to one of your jobs. They choose whether to accept.") + "</p>" +
      '<div class="iv-row"><a class="iv-cta" href="login.html?next=' + encodeURIComponent(location.pathname.replace(/^\//, "") + location.search) + '">Log in as recruiter</a><a class="iv-cta iv-ghost" href="choose-role.html">Create an account</a></div>';
    open();
  }
  function form() {
    pick = "";
    var jobs = JOBS.map(function (j) {
      var dis = already(tid(), j.id);
      return '<button type="button" class="iv-job" data-job="' + j.id + '" aria-pressed="false"' + (dis ? " disabled" : "") + '><span class="iv-dot"></span><span><b>' + esc(j.title) + "</b><small>" + esc(j.co) + " · " + esc(j.meta) + (dis ? " · Already invited" : "") + "</small></span></button>";
    }).join("");
    box.innerHTML = X + '<p class="iv-eb">Invite to a job</p><h2 id="iv-h">Invite <span>' + esc(talent.name) + "</span></h2>" +
      '<p class="iv-s">Pick the job you would like them to apply for. They can accept or decline from their dashboard.</p>' + '<div style="margin-top:20px">' + jobs + "</div>" +
      '<label for="iv-msg">Message (optional)</label><textarea id="iv-msg" placeholder="Tell ' + esc(talent.name.split(" ")[0]) + ' why you think they are a fit."></textarea>' +
      '<div class="iv-row"><button type="button" class="iv-cta" id="iv-send" disabled>Send invitation</button><button type="button" class="iv-cta iv-ghost" data-x>Cancel</button></div>';
    open();
  }
  function done(job) {
    box.innerHTML = X + '<p class="iv-eb">Invitation sent</p><h2 id="iv-h">' + esc(talent.name) + " <span>has been invited.</span></h2>" +
      '<p class="iv-s">They will see your invitation for <b style="color:#fff;font-weight:400">' + esc(job.title) + "</b> in their dashboard and can accept or decline. We will let you know when they respond.</p>" +
      '<div class="iv-row"><button type="button" class="iv-cta" data-x>Done</button></div>';
  }
  function mark() {
    var b = document.getElementById("invite-btn"); if (!b || !talent) return;
    var n = JOBS.filter(function (j) { return already(tid(), j.id); }).length;
    b.classList.toggle("invited", n > 0);
    b.lastChild.textContent = n ? "Invited (" + n + ")" : "Invite to a job";
  }
  document.addEventListener("click", function (e) {
    var t = e.target;
    if (t.closest("#invite-btn")) { talent = talent || w.TALENT; if (!talent) return; var s = session(); if (s && s.role === "recruiter") form(); else gate(s && s.role); return; }
    if (t === back || t.closest("[data-x]")) { close(); return; }
    var j = t.closest("[data-job]");
    if (j && !j.disabled) { pick = j.dataset.job; box.querySelectorAll(".iv-job").forEach(function (b) { b.setAttribute("aria-pressed", String(b === j)); }); document.getElementById("iv-send").disabled = false; return; }
    if (t.closest("#iv-send") && pick) {
      var job = JOBS.filter(function (x) { return x.id === pick; })[0], s2 = session() || {};
      send({ talentId: tid(), jobId: job.id, msg: document.getElementById("iv-msg").value.trim(), from: s2.name || "Hoops", ts: Date.now() });
      done(job); mark();
    }
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
  if (w.TALENT) { talent = w.TALENT; mark(); }
  w.InviteFlow = { setTalent: function (t) { talent = t; mark(); } };
})(window);
