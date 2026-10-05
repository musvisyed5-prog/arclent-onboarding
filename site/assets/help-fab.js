/* Floating help button for every dashboard page: hand FAB -> Feedback / Talk with founder / Close. */
(function () {
  if (window.__helpFab) return; window.__helpFab = true;
  var css = "\
#hf-root{position:fixed;right:24px;bottom:24px;z-index:70;display:flex;flex-direction:column;align-items:flex-end;gap:12px;font-family:'Inter Tight',system-ui,sans-serif}\
#hf-root .hf-row{display:flex;align-items:center;gap:14px;opacity:0;transform:translateY(14px) scale(.96);pointer-events:none;transition:opacity .45s cubic-bezier(.16,1,.3,1),transform .45s cubic-bezier(.16,1,.3,1)}\
#hf-root.open .hf-row{opacity:1;transform:none;pointer-events:auto}\
#hf-root.open .hf-row:nth-child(2){transition-delay:.05s}\
#hf-root .hf-label{font-size:18px;color:#222F30;letter-spacing:-.01em;white-space:nowrap}\
#hf-root .hf-tile{display:grid;place-items:center;width:64px;height:64px;border-radius:20px;background:#F3F3F1;color:#222F30;border:0;cursor:pointer;box-shadow:0 8px 24px rgba(34,47,48,.12);transition:background-color .4s,transform .4s}\
#hf-root .hf-tile:hover{background:#CEF79E;transform:translateY(-2px)}\
#hf-main{display:grid;place-items:center;width:56px;height:56px;border-radius:50%;background:#222F30;color:#CEF79E;border:0;cursor:pointer;transition:transform .5s cubic-bezier(.16,1,.3,1),background-color .4s,border-radius .4s}\
#hf-main:hover{transform:scale(1.06)}\
#hf-main .hf-x{display:none}\
#hf-root.open #hf-main{width:64px;height:64px;border-radius:20px;background:#D64545;color:#fff}\
#hf-root.open #hf-main .hf-hand{display:none}#hf-root.open #hf-main .hf-x{display:block}\
#hf-root .hf-close-row{display:flex;align-items:center;gap:14px}\
#hf-root .hf-close-row .hf-label{opacity:0;transition:opacity .3s}#hf-root.open .hf-close-row .hf-label{opacity:1}\
#hf-scrim{position:fixed;inset:0;z-index:65;background:rgba(247,247,245,.55);backdrop-filter:blur(2px);opacity:0;pointer-events:none;transition:opacity .4s}\
#hf-scrim.on{opacity:1;pointer-events:auto}\
.hf-modal{position:fixed;inset:0;z-index:90;display:none;align-items:center;justify-content:center;padding:16px;background:rgba(34,47,48,.7);backdrop-filter:blur(4px)}\
.hf-modal.on{display:flex}\
.hf-card{position:relative;width:100%;max-width:520px;max-height:calc(100vh - 32px);overflow:auto;border-radius:24px;background:#222F30;color:#fff;padding:32px;animation:hfIn .5s cubic-bezier(.16,1,.3,1) both}\
@keyframes hfIn{from{opacity:0;transform:translateY(16px) scale(.98)}}\
.hf-card .mono{font-family:'Roboto Mono',monospace;font-size:12px;text-transform:uppercase}\
.hf-card h2{margin:8px 0 0;font-size:32px;line-height:1;font-weight:400;letter-spacing:-.035em}\
.hf-card .hf-x2{position:absolute;right:20px;top:20px;width:40px;height:40px;border-radius:10px;border:0;background:#394546;color:#fff;cursor:pointer;display:grid;place-items:center}\
.hf-card .hf-x2:hover{background:#CEF79E;color:#222F30}\
.hf-card textarea{width:100%;min-height:130px;margin-top:20px;border:0;border-radius:12px;background:#394546;color:#fff;padding:16px;font:inherit;font-size:16px;resize:vertical;outline:1px solid transparent}\
.hf-card textarea:focus{outline:1px solid #CEF79E}\
.hf-chips{display:flex;flex-wrap:wrap;gap:8px;margin-top:20px}\
.hf-chip{border:0;border-radius:999px;padding:12px 16px;background:#394546;color:rgba(255,255,255,.85);cursor:pointer;font-family:'Roboto Mono',monospace;font-size:12px;text-transform:uppercase;transition:background-color .4s,color .4s}\
.hf-chip:hover{background:#4A5859}.hf-chip[aria-pressed=true]{background:#CEF79E;color:#222F30}\
.hf-send{width:100%;height:56px;margin-top:20px;border:0;border-radius:12px;background:#CEF79E;color:#222F30;cursor:pointer;font-family:'Roboto Mono',monospace;font-size:12px;text-transform:uppercase;transition:background-color .4s}\
.hf-send:hover{background:#fff}\
.hf-err{margin-top:12px;color:#FF8A8A;display:none}\
.hf-founder-row{margin-top:26px;display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;border-top:1px solid rgba(255,255,255,.15);padding-top:22px}\
.hf-founder-who{display:flex;align-items:center;gap:12px}\
.hf-founder-av{display:block;width:48px;height:48px;border-radius:50%;background-size:cover;background-position:center;flex-shrink:0}\
.hf-founder-name{font-size:17px;line-height:1.2;color:#fff}\
.hf-founder-role{margin-top:2px;color:rgba(255,255,255,.55)}\
.hf-cta{height:52px;padding:0 22px;border:0;border-radius:12px;background:#CEF79E;color:#222F30;font-size:16px;cursor:pointer;white-space:nowrap;transition:background-color .3s}\
.hf-cta:hover{background:#fff}\
.hf-back{margin-top:4px;color:rgba(255,255,255,.6);background:none;border:0;cursor:pointer;font-size:13px;display:flex;align-items:center;gap:6px;padding:0}\
.hf-back:hover{color:#fff}\
.hf-toast{position:fixed;right:24px;bottom:104px;z-index:95;border-radius:10px;background:#222F30;color:#CEF79E;padding:12px 16px;font-family:'Roboto Mono',monospace;font-size:12px;text-transform:uppercase}\
@media(max-width:640px){#hf-root{right:16px;bottom:16px}.hf-card{padding:24px}}\
@media(prefers-reduced-motion:reduce){#hf-root .hf-row,#hf-main,.hf-card{transition:none!important;animation:none!important}}";
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  var HAND = '<svg class="hf-hand" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M18 11V6a2 2 0 0 0-4 0v5"/><path d="M14 10V4a2 2 0 0 0-4 0v6"/><path d="M10 10.5V6a2 2 0 0 0-4 0v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/></svg>';
  var X = '<svg class="hf-x" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12"/><path d="M18 6 6 18"/></svg>';
  var PENCIL = '<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="M15 5l4 4"/><path d="M12 22h10"/></svg>';
  var CAL = '<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4"/><path d="M16 3v4"/><circle cx="9" cy="13" r="2"/><circle cx="15" cy="13" r="2"/><path d="M11 13h2"/><path d="M8 17h8"/></svg>';
  var CLOSEX = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12"/><path d="M18 6 6 18"/></svg>';

  var root = document.createElement("div"); root.id = "hf-root";
  root.innerHTML = '<div class="hf-row"><span class="hf-label">Feedback</span><button type="button" class="hf-tile" data-hf="feedback" aria-label="Send feedback">' + PENCIL + '</button></div>' +
    '<div class="hf-row"><span class="hf-label">Talk with founder</span><button type="button" class="hf-tile" data-hf="founder" aria-label="Talk with the founder">' + CAL + '</button></div>' +
    '<div class="hf-close-row"><span class="hf-label">Close</span><button type="button" id="hf-main" aria-label="Help" aria-expanded="false" aria-haspopup="true">' + HAND + X + '</button></div>';
  var scrim = document.createElement("div"); scrim.id = "hf-scrim";
  document.body.appendChild(scrim); document.body.appendChild(root);

  function setOpen(o) {
    root.classList.toggle("open", o); scrim.classList.toggle("on", o);
    var m = document.getElementById("hf-main"); m.setAttribute("aria-expanded", String(o)); m.setAttribute("aria-label", o ? "Close" : "Help");
  }
  function toast(msg) { var t = document.createElement("p"); t.className = "hf-toast"; t.textContent = msg; document.body.appendChild(t); setTimeout(function () { t.remove(); }, 2600); }

  function modal(html) {
    var m = document.createElement("div"); m.className = "hf-modal on"; m.setAttribute("role", "dialog"); m.setAttribute("aria-modal", "true");
    m.innerHTML = '<div class="hf-card"><button type="button" class="hf-x2" aria-label="Close">' + CLOSEX + '</button><div class="hf-body">' + html + "</div></div>";
    function close() { m.remove(); document.removeEventListener("keydown", esc); }
    function esc(e) { if (e.key === "Escape") close(); }
    function setBody(h) { m.querySelector(".hf-body").innerHTML = h; }
    m.addEventListener("click", function (e) { if (e.target === m || e.target.closest(".hf-x2")) close(); });
    document.addEventListener("keydown", esc); document.body.appendChild(m);
    return { el: m, close: close, setBody: setBody };
  }
  function chips(m) {
    m.el.querySelectorAll(".hf-chip").forEach(function (c) {
      c.addEventListener("click", function () { var g = c.parentNode; g.querySelectorAll(".hf-chip").forEach(function (x) { x.setAttribute("aria-pressed", String(x === c)); }); });
    });
  }

  function feedback() {
    var m = modal('<p class="mono" style="color:#CEF79E">Feedback</p><h2>Tell us what you think</h2>' +
      '<div class="hf-chips"><button type="button" class="hf-chip" aria-pressed="true">Idea</button><button type="button" class="hf-chip" aria-pressed="false">Something is broken</button><button type="button" class="hf-chip" aria-pressed="false">Praise</button></div>' +
      '<textarea placeholder="Write your feedback" aria-label="Your feedback"></textarea><p class="hf-err mono">Please write a few words first.</p><button type="button" class="hf-send">Send feedback</button>');
    chips(m); var ta = m.el.querySelector("textarea"); setTimeout(function () { ta.focus(); }, 60);
    m.el.querySelector(".hf-send").addEventListener("click", function () {
      if (!ta.value.trim()) { m.el.querySelector(".hf-err").style.display = "block"; return; }
      m.close(); toast("Thanks for your feedback");
    });
  }
  var FOUNDER_NAME = "Idris Navarro", FOUNDER_AVATAR = "https://images.unsplash.com/photo-1741455620227-3b1c51e01419?crop=faces&fit=crop&w=100&h=100&q=80";

  function slotsHTML() {
    var days = [], d = new Date(), fmt = new Intl.DateTimeFormat(undefined, { weekday: "short", day: "numeric", month: "short" });
    while (days.length < 3) { d = new Date(d.getTime() + 864e5); if (d.getDay() % 6) days.push(fmt.format(d)); }
    var slots = ""; days.forEach(function (dd) { ["10:00 AM", "4:00 PM"].forEach(function (t) { slots += '<button type="button" class="hf-chip" aria-pressed="false">' + dd + " &middot; " + t + "</button>"; }); });
    return '<button type="button" class="hf-back" id="hf-back">&larr; Back</button><p class="mono" style="color:#CEF79E;margin-top:14px">Book a call with ' + FOUNDER_NAME.split(" ")[0] + '</p><h2>Pick a time</h2><p style="margin:14px 0 0;color:rgba(255,255,255,.7);font-size:17px;line-height:1.3">Questions, ideas or a problem you want solved? Pick a time and you will talk for 15 minutes.</p>' +
      '<div class="hf-chips">' + slots + '</div><textarea placeholder="Anything we should know first? (optional)" aria-label="Note" style="min-height:90px"></textarea><p class="hf-err mono">Pick a time first.</p><button type="button" class="hf-send">Request call</button>';
  }
  function showSlots(m) {
    m.setBody(slotsHTML()); chips(m);
    m.el.querySelector("#hf-back").addEventListener("click", function () { showIntro(m); });
    m.el.querySelector(".hf-send").addEventListener("click", function () {
      if (!m.el.querySelector('.hf-chip[aria-pressed="true"]')) { m.el.querySelector(".hf-err").style.display = "block"; return; }
      m.close(); toast("Call requested. We will confirm by email");
    });
  }
  function introHTML() {
    return '<p class="mono" style="color:#CEF79E">Talk with the founder</p><h2>Let’s improve your results on Arclent</h2>' +
      '<p style="margin:14px 0 0;color:rgba(255,255,255,.7);font-size:17px;line-height:1.4">If something felt confusing, didn’t go as expected, or seemed missing while using Arclent, book a call with <b style="font-weight:400;color:#fff">' + FOUNDER_NAME.split(" ")[0] + "</b>, our co-founder, and share your experience so we can help and make things better.</p>" +
      '<div class="hf-founder-row"><div class="hf-founder-who"><span class="hf-founder-av" style="background-image:url(\'' + FOUNDER_AVATAR + '\')"></span><div><p class="hf-founder-name">' + FOUNDER_NAME + '</p><p class="mono hf-founder-role">Co-founder</p></div></div>' +
      '<button type="button" class="hf-cta" id="hf-book-cta">Book a Call with ' + FOUNDER_NAME.split(" ")[0] + "</button></div>";
  }
  function showIntro(m) { m.setBody(introHTML()); m.el.querySelector("#hf-book-cta").addEventListener("click", function () { showSlots(m); }); }
  function founder() { var m = modal(introHTML()); m.el.querySelector("#hf-book-cta").addEventListener("click", function () { showSlots(m); }); }

  root.addEventListener("click", function (e) {
    var b = e.target.closest("[data-hf]");
    if (b) { setOpen(false); (b.dataset.hf === "feedback" ? feedback : founder)(); return; }
    if (e.target.closest("#hf-main")) setOpen(!root.classList.contains("open"));
  });
  scrim.addEventListener("click", function () { setOpen(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setOpen(false); });

  // Nav-bar "call" button (avatar + phone) present on every dashboard page opens the same booking modal.
  document.addEventListener("click", function (e) { if (e.target.closest("[data-hf-call]")) founder(); });
})();
