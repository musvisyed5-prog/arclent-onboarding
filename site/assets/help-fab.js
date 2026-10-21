/* Floating help button: hand FAB -> Feedback / Talk with founder / Close, plus the two popups.
   All markup is in the page (#hf-root, #hf-feedback, #hf-founder, #hf-toast); this script only opens, closes and reads them. */
(function () {
  if (window.__helpFab) return; window.__helpFab = true;
  var root = document.getElementById("hf-root"); if (!root) return;
  var scrim = document.getElementById("hf-scrim"), fb = document.getElementById("hf-feedback"), fo = document.getElementById("hf-founder"), toastEl = document.getElementById("hf-toast");
  var timer;

  function setOpen(o) {
    root.classList.toggle("open", o); scrim.classList.toggle("on", o);
    var m = document.getElementById("hf-main"); m.setAttribute("aria-expanded", String(o)); m.setAttribute("aria-label", o ? "Close" : "Help");
  }
  function toast(msg) { toastEl.textContent = msg; toastEl.hidden = false; clearTimeout(timer); timer = setTimeout(function () { toastEl.hidden = true; }, 2600); }
  function closeModals() { fb.classList.remove("on"); fo.classList.remove("on"); }
  function pick(chip) { chip.parentNode.querySelectorAll(".hf-chip").forEach(function (x) { x.setAttribute("aria-pressed", String(x === chip)); }); }
  function clearErrors(m) { m.querySelectorAll(".hf-err").forEach(function (e) { e.style.display = ""; }); }
  function view(name) { fo.querySelectorAll("[data-hf-view]").forEach(function (v) { v.hidden = v.dataset.hfView !== name; }); }

  function feedback() {
    var ta = fb.querySelector("textarea"); ta.value = ""; clearErrors(fb);
    fb.querySelectorAll(".hf-chip").forEach(function (c, i) { c.setAttribute("aria-pressed", String(i === 0)); });
    fb.classList.add("on"); setTimeout(function () { ta.focus(); }, 60);
  }
  function founder() {
    var days = [], d = new Date(), fmt = new Intl.DateTimeFormat(undefined, { weekday: "short", day: "numeric", month: "short" });
    while (days.length < 3) { d = new Date(d.getTime() + 864e5); if (d.getDay() % 6) days.push(fmt.format(d)); }
    var chips = fo.querySelectorAll(".hf-slot"), k = 0;
    days.forEach(function (dd) { ["10:00 AM", "4:00 PM"].forEach(function (t) { chips[k].textContent = dd + " \u00b7 " + t; chips[k].setAttribute("aria-pressed", "false"); k++; }); });
    fo.querySelector("textarea").value = ""; clearErrors(fo);
    view("intro"); fo.classList.add("on");
  }

  root.addEventListener("click", function (e) {
    var b = e.target.closest("[data-hf]");
    if (b) { setOpen(false); (b.dataset.hf === "feedback" ? feedback : founder)(); return; }
    if (e.target.closest("#hf-main")) setOpen(!root.classList.contains("open"));
  });
  scrim.addEventListener("click", function () { setOpen(false); });
  [fb, fo].forEach(function (m) {
    m.addEventListener("click", function (e) {
      if (e.target === m || e.target.closest(".hf-x2")) { closeModals(); return; }
      var c = e.target.closest(".hf-chip"); if (c) pick(c);
    });
  });
  fb.querySelector(".hf-send").addEventListener("click", function () {
    if (!fb.querySelector("textarea").value.trim()) { fb.querySelector(".hf-err").style.display = "block"; return; }
    closeModals(); toast("Thanks for your feedback");
  });
  fo.querySelector("#hf-book-cta").addEventListener("click", function () { view("slots"); });
  fo.querySelector("#hf-back").addEventListener("click", function () { view("intro"); });
  fo.querySelector(".hf-send").addEventListener("click", function () {
    if (!fo.querySelector('.hf-slot[aria-pressed="true"]')) { fo.querySelector('[data-hf-view="slots"] .hf-err').style.display = "block"; return; }
    closeModals(); toast("Call requested. We will confirm by email");
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") { setOpen(false); closeModals(); } });

  // Nav-bar "call" button (avatar + phone) present on every dashboard page opens the same booking popup.
  document.addEventListener("click", function (e) { if (e.target.closest("[data-hf-call]")) founder(); });
})();
