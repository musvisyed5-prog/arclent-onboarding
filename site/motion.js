// Apple-style press feedback (see .claude/skills apple-design):
// - respond on pointerdown, not click (§1 Response)
// - spring from the *current* on-screen value so a second press mid-animation
//   redirects smoothly instead of jumping (§3 Interruptibility)
// - critically damped, no overshoot — a tap carries no momentum (§4 Behavior over animation)
//
// Usage: add data-press to any element that should get spring press feedback.
// Skips everything under prefers-reduced-motion (CSS :active states still apply).
(function () {
  if (typeof Motion === "undefined") return;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const PRESS_SCALE = 0.96;
  const SPRING = { type: "spring", stiffness: 500, damping: 40 }; // critically damped, fast response

  function wire(el) {
    let down = false;

    const press = () => {
      down = true;
      Motion.animate(el, { scale: PRESS_SCALE }, SPRING);
    };
    const release = () => {
      if (!down) return;
      down = false;
      Motion.animate(el, { scale: 1 }, SPRING);
    };

    el.addEventListener("pointerdown", press);
    el.addEventListener("pointerup", release);
    el.addEventListener("pointercancel", release);
    el.addEventListener("pointerleave", release);
  }

  function init() {
    document.querySelectorAll("[data-press]").forEach(wire);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
