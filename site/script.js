// ---------- Icons ----------
const icon = {
  profile: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></svg>`,
  role: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>`,
  link: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></svg>`,
  mail: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>`,
  inbox: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11Z"/></svg>`,
  check: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m5 13 4 4L19 7"/></svg>`,
  connect: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></svg>`,
  design: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="10" r="2.5"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><path d="M14 20c0-2.2 1.6-4 4-4"/></svg>`,
  broadcast: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="2"/><path d="M8.5 8.5a5 5 0 0 0 0 7"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M5.5 5.5a9 9 0 0 0 0 13"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/></svg>`,
  bars: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 19V10"/><path d="M12 19V5"/><path d="M19 19v-6"/></svg>`,
};

const logoMark = `<svg viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5 text-brand-green"><rect x="2" y="10" width="20" height="4" rx="2" transform="rotate(45 12 12)"/><rect x="2" y="10" width="20" height="4" rx="2" transform="rotate(-45 12 12)"/></svg>`;

// ---------- Data ----------
const steps = [
  { title: "Set Up Profile", desc: "Provide an email and password", icon: icon.profile },
  {
    title: "Choose Your Role",
    desc: "Provide an email and password",
    icon: icon.role,
    subtitle: "Choose your primary role to personalize your experience and recommendations.",
  },
  {
    title: "Link Your Videos",
    desc: "Provide an email and password",
    icon: icon.link,
    heading: "Link the 6 best YouTube videos in which you had the mentioned role",
    subtitle: "Pick your top skills to get matched with the right opportunities",
  },
  {
    title: "Job Section",
    desc: "Provide an email and password",
    icon: icon.mail,
    subtitle:
      "A complete profile helps us match you with the right opportunities, makes you more visible to recruiters and clients, and gives you the best chance of getting noticed.",
  },
  {
    title: "Connect Accounts",
    desc: "Provide an email and password",
    icon: icon.inbox,
    heading: "Connect Your Accounts",
    subtitle:
      "A complete profile helps us match you with the right opportunities, makes you more visible to recruiters and clients, and gives you the best chance of getting noticed.",
  },
];

const platforms = ["Instagram", "TikTok", "YouTube", "LinkedIn"];

const roles = [
  { label: "Ui/Ux Design", icon: icon.design },
  { label: "Video Editor", icon: icon.broadcast },
  { label: "Video Editor", icon: icon.broadcast },
  { label: "Graphic Designer", icon: icon.bars },
  { label: "Streaming", icon: icon.broadcast },
  { label: "Streaming", icon: icon.broadcast },
  { label: "Ui/Ux Design", icon: icon.design },
  { label: "Streaming", icon: icon.broadcast },
  { label: "Ui/Ux Design", icon: icon.design },
  { label: "Graphic Designer", icon: icon.bars },
  { label: "Ui/Ux Design", icon: icon.design },
  { label: "Graphic Designer", icon: icon.bars },
  { label: "Graphic Designer", icon: icon.bars },
];

const connectAccounts = [
  { name: "Discord", color: "#5865F2", letter: "D" },
  { name: "Pinterst", color: "#E60023", letter: "P" },
  { name: "Twitch", color: "#9146FF", letter: "T" },
  { name: "Youtube", color: "#FF0000", letter: "Y" },
  { name: "Personal Website", color: null, letter: null },
];

// ---------- State ----------
const state = {
  currentStep: 0,
  name: "",
  description: "",
  platform: platforms[0],
  selectedRole: null,
  showAllRoles: true,
  videoLinks: ["", "", "", "", "", ""],
  jobTitle: "",
  jobDescription: "",
  jobLink: "",
  currentlyWorking: false,
  jobStartDate: "",
  jobEndDate: "",
  connected: connectAccounts.map(() => false),
  showSuccess: false,
};

const app = document.getElementById("app");

// ---------- Render ----------
function render() {
  const progress = ((state.currentStep + 1) / steps.length) * 100;
  const isLastStep = state.currentStep === steps.length - 1;

  app.innerHTML = `
    <div class="min-h-screen flex items-start justify-center bg-[#f5f5e6] p-4 py-8 lg:items-center">
      <div class="flex w-full max-w-[1440px] flex-col gap-6 lg:flex-row">
        ${renderSidebar(progress)}
        ${renderMainPanel(progress, isLastStep)}
      </div>
      ${state.showSuccess ? renderSuccessModal() : ""}
    </div>
  `;

  bindEvents(isLastStep);
}

function renderSidebar(progress) {
  const navItems = steps
    .map((step, i) => {
      const active = i === state.currentStep;
      const completed = i < state.currentStep;
      const visited = i <= state.currentStep;
      const iconBg = active
        ? `style="background-color:#FFA845"`
        : completed
          ? `style="background-color:#f0d7ff"`
          : "";
      const iconClass = active
        ? "scale-110 text-white animate-soft-pulse"
        : completed
          ? "text-brand-green"
          : "bg-white/10 text-white/60";
      return `
        <button type="button" data-step-nav="${i}" ${visited ? "" : "disabled"}
          class="relative z-10 flex items-center gap-3 rounded-xl px-2 py-2.5 text-left ${visited ? "cursor-pointer" : "cursor-not-allowed"}">
          <div class="flex h-9 w-9 shrink-0 scale-100 items-center justify-center rounded-lg transition-all duration-500 ease-out ${iconClass}" ${iconBg}>
            ${completed ? icon.check : step.icon}
          </div>
          <div>
            <p class="text-sm font-semibold leading-tight ${active || completed ? "text-white" : "text-white/60"}">${step.title}</p>
            <p class="text-xs leading-tight ${active ? "text-white/70" : completed ? "text-white/50" : "text-white/40"}">${completed ? "Completed" : step.desc}</p>
          </div>
        </button>
      `;
    })
    .join("");

  const lineFill = (state.currentStep / (steps.length - 1)) * 100;

  return `
    <aside class="flex w-full flex-col rounded-3xl border-[1.5px] border-black px-5 py-6 text-white shadow-sm lg:w-[36%] lg:min-w-[260px] lg:px-7 lg:py-8"
      style="background: linear-gradient(180deg, #000000 0%, #054d44 100%)">
      <div class="mb-6 flex items-center">
        <img src="https://i.ibb.co/GfWNP5Mk/hireinc-1.png" alt="arclent" class="h-16 w-auto lg:h-28" />
      </div>

      <div class="mb-6">
        <div class="mb-1.5 flex items-center justify-between text-xs font-medium text-white/60">
          <span>Progress</span>
          <span>${Math.round(progress)}%</span>
        </div>
        <div class="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <div class="h-full rounded-full transition-[width] duration-500 ease-out" style="width:${progress}%; background-color:#FFA845"></div>
        </div>
      </div>

      <nav class="relative flex flex-1 flex-col justify-evenly">
        <div class="pointer-events-none absolute top-[9%] bottom-[9%] left-[26px] w-px bg-white/8"
          style="mask-image: linear-gradient(to bottom, transparent, black 12%, black 88%, transparent); -webkit-mask-image: linear-gradient(to bottom, transparent, black 12%, black 88%, transparent);">
          <div class="w-full transition-[height] duration-700 ease-out" style="height:${lineFill}%; background-color:#FFA845; opacity:0.6"></div>
        </div>
        ${navItems}
      </nav>

      <div class="mt-6 flex items-center justify-between text-sm font-semibold">
        <button type="button" class="flex items-center gap-2">
          <span>&larr;</span> Back Home
        </button>
        <button type="button">Need Help ?</button>
      </div>
    </aside>
  `;
}

function renderMainPanel(progress, isLastStep) {
  const step = steps[state.currentStep];
  const segments = steps
    .map(
      (_, i) =>
        `<span class="h-1.5 flex-1 rounded-full" style="background-color:${i <= state.currentStep ? "#FFA845" : "rgba(0,0,0,0.1)"}"></span>`
    )
    .join("");

  return `
    <main class="flex-1 rounded-3xl border-[1.5px] border-black bg-brand-cream px-5 py-6 shadow-sm lg:px-10 lg:py-10">
      <p class="text-sm font-medium text-black/60">Step ${state.currentStep + 1} of ${steps.length}</p>
      <div class="mt-2 mb-6 flex gap-1.5">${segments}</div>

      <h1 class="${step.subtitle ? "text-2xl font-bold text-black font-display" : "mb-6 text-2xl font-bold text-black font-display"}">${step.heading ?? step.title}</h1>
      ${step.subtitle ? `<p class="mt-1 mb-6 text-sm text-black/60">${step.subtitle}</p>` : ""}

      ${renderStepContent()}

      <div class="mt-6 flex gap-3">
        ${
          state.currentStep > 0
            ? `<button type="button" data-action="back" class="rounded-md border-[1.5px] border-black px-6 py-3 text-sm font-bold text-black transition-colors duration-300 ease-out hover:bg-black/5">Back</button>`
            : ""
        }
        <button type="button" data-action="${isLastStep ? "finish" : "continue"}" class="btn-hard flex-1 rounded-md border-[1.5px] border-black bg-brand-green py-3 text-sm font-bold text-white hover:opacity-90">
          ${isLastStep ? "Finish" : "Continue"}
        </button>
      </div>
    </main>
  `;
}

function renderStepContent() {
  if (state.currentStep === 0) return renderStepProfile();
  if (state.currentStep === 1) return renderStepRole();
  if (state.currentStep === 2) return renderStepVideos();
  if (state.currentStep === 3) return renderStepJob();
  return renderStepConnect();
}

function renderStepProfile() {
  return `
    <div class="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/15 bg-brand-green px-5 py-4">
      <div class="flex items-center gap-3">
        <div class="flex h-11 w-11 items-center justify-center rounded-full bg-white">${logoMark}</div>
        <span class="font-semibold text-white">Alex Morgan</span>
      </div>
      <div class="flex gap-2">
        <button type="button" class="rounded-md bg-white px-4 py-1.5 text-sm font-semibold text-black">Upload</button>
        <button type="button" class="rounded-md bg-white/20 px-4 py-1.5 text-sm font-semibold text-white">Remove</button>
      </div>
    </div>

    <div class="flex flex-col gap-4">
      <div class="rounded-2xl border-[1.5px] border-black p-5">
        <label class="mb-2 block text-sm font-semibold text-black">Name</label>
        <input type="text" data-field="name" value="${escapeAttr(state.name)}" placeholder="Jane Smith"
          class="w-full rounded-xl border-[1.5px] border-black bg-white px-4 py-3 text-sm placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-brand-green" />
      </div>
      <div class="rounded-2xl border-[1.5px] border-black p-5">
        <label class="mb-2 block text-sm font-semibold text-black">Description</label>
        <textarea data-field="description" rows="4" placeholder="Describe , your ,responsibilities and important activities regarding this experience"
          class="w-full resize-y rounded-xl border-[1.5px] border-black bg-white px-4 py-3 text-sm placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-brand-green">${escapeHtml(state.description)}</textarea>
      </div>
    </div>
  `;
}

function renderStepRole() {
  const visibleRoles = state.showAllRoles ? roles : roles.slice(0, 6);
  const pills = visibleRoles
    .map((role, i) => {
      const active = state.selectedRole === i;
      return `
        <button type="button" data-role="${i}"
          class="flex items-center gap-2 rounded-md border-[1.5px] border-black px-3 py-2 text-sm font-medium transition-colors duration-300 ease-out ${active ? "bg-brand-green text-white" : "bg-white text-black hover:bg-black/5"}">
          ${role.icon}${role.label}
        </button>
      `;
    })
    .join("");

  const options = platforms
    .map((p) => `<option value="${p}" ${p === state.platform ? "selected" : ""}>${p}</option>`)
    .join("");

  return `
    <div class="rounded-2xl border-[1.5px] border-black p-5">
      <label class="mb-2 block text-sm font-semibold text-black">Primary platform</label>
      <select data-field="platform" class="mb-5 w-full rounded-xl border-[1.5px] border-black bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green">
        ${options}
      </select>
      <div class="flex flex-wrap gap-2">
        ${pills}
        <button type="button" data-action="toggle-roles" class="flex items-center gap-2 rounded-md bg-brand-green px-3 py-2 text-sm font-medium text-white">
          <span>${state.showAllRoles ? "&minus;" : "+"}</span>${state.showAllRoles ? "Show less" : "Show more"}
        </button>
      </div>
    </div>
    <p class="mt-6 text-center text-sm text-black/60">
      Don't see the role you're hiring for? Send us a message with the button in the bottom right corner or email us at
      <span class="font-semibold text-black">support@arclent.co</span>
    </p>
  `;
}

function renderStepVideos() {
  const cards = state.videoLinks
    .map(
      (value, i) => `
      <div class="rounded-2xl border-[1.5px] border-black p-5">
        <label class="mb-2 block text-sm font-semibold text-black">Link ${i + 1}</label>
        <input type="url" data-video-link="${i}" value="${escapeAttr(value)}" placeholder="Add Link"
          class="w-full rounded-xl border-[1.5px] border-black bg-white px-4 py-3 text-sm placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-brand-green" />
      </div>
    `
    )
    .join("");

  return `
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">${cards}</div>
    <p class="mt-6 text-center text-sm text-black/60">
      Don't see the role you're hiring for? Send us a message with the button in the bottom right corner or email us at
      <span class="font-semibold text-black">support@arclent.co</span>
    </p>
  `;
}

function renderStepJob() {
  return `
    <div class="rounded-2xl border-[1.5px] border-black p-5">
      <label class="mb-2 block text-sm font-semibold text-black">Current Or Last Job</label>
      <input type="text" data-field="jobTitle" value="${escapeAttr(state.jobTitle)}" placeholder="e.g. Yt editor"
        class="mb-5 w-full rounded-xl border-[1.5px] border-black bg-white px-4 py-3 text-sm placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-brand-green" />

      <label class="mb-2 block text-sm font-semibold text-black">Description</label>
      <textarea data-field="jobDescription" rows="4" placeholder="Describe , your ,responsibilities and important activities regarding this experience"
        class="mb-5 w-full resize-y rounded-xl border-[1.5px] border-black bg-white px-4 py-3 text-sm placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-brand-green">${escapeHtml(state.jobDescription)}</textarea>

      <label class="mb-2 block text-sm font-semibold text-black">Link(optional)</label>
      <input type="url" data-field="jobLink" value="${escapeAttr(state.jobLink)}" placeholder="https://example.com"
        class="mb-5 w-full rounded-xl border-[1.5px] border-black bg-white px-4 py-3 text-sm placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-brand-green" />

      <div class="rounded-xl border-[1.5px] border-black bg-brand-green p-4">
        <label class="flex items-center gap-3">
          <input type="checkbox" data-field="currentlyWorking" ${state.currentlyWorking ? "checked" : ""} class="h-4 w-4 accent-white" />
          <span class="text-sm font-medium text-white">I am currently working in this role</span>
        </label>
        <div class="mt-4 grid grid-cols-1 gap-4 ${state.currentlyWorking ? "" : "sm:grid-cols-2"}">
          <div>
            <label class="mb-2 block text-sm font-medium text-white/70">Start date</label>
            <input type="date" data-field="jobStartDate" value="${escapeAttr(state.jobStartDate)}"
              class="w-full rounded-xl border-[1.5px] border-black bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green" />
          </div>
          ${
            state.currentlyWorking
              ? ""
              : `
          <div>
            <label class="mb-2 block text-sm font-medium text-white/70">End date</label>
            <input type="date" data-field="jobEndDate" value="${escapeAttr(state.jobEndDate)}"
              class="w-full rounded-xl border-[1.5px] border-black bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green" />
          </div>
          `
          }
        </div>
      </div>
    </div>
  `;
}

function renderStepConnect() {
  const rows = connectAccounts
    .map((account, i) => {
      const isConnected = state.connected[i];
      return `
        <div class="flex flex-col items-start gap-3 rounded-2xl border-[1.5px] border-black p-4 sm:flex-row sm:items-center sm:justify-between">
          <div class="flex items-center gap-3">
            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-[1.5px] border-black text-sm font-bold ${account.color ? "text-white" : "text-black"}"
              style="background-color:${account.color ?? "#fff"}">
              ${account.letter ? account.letter : icon.link}
            </div>
            <div>
              <p class="text-sm font-semibold text-black">${account.name}</p>
              <p class="text-xs text-black/50">Status : ${isConnected ? "Connected" : "Not Connected"}</p>
            </div>
          </div>
          <button type="button" data-connect="${i}"
            class="flex w-full items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-semibold transition-colors duration-300 ease-out sm:w-auto ${isConnected ? "bg-white text-black border-[1.5px] border-black" : "bg-brand-green text-white"}">
            ${icon.connect}${isConnected ? "Disconnect" : "Connect"}
          </button>
        </div>
      `;
    })
    .join("");

  return `<div class="flex flex-col gap-4">${rows}</div>`;
}

function renderSuccessModal() {
  const dots = steps
    .map(
      () => `
      <div class="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#22c55e] shadow">${icon.check}</div>
    `
    )
    .join("");
  const numbers = steps.map((_, i) => `<span class="w-9 text-center">${i + 1}</span>`).join("");

  return `
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div class="w-full max-w-sm rounded-3xl border-[1.5px] border-black bg-brand-cream p-6 text-center shadow-xl">
        <h2 class="mb-2 text-xl font-bold text-black">You're All Set! &#127881;</h2>
        <p class="mb-6 text-sm text-black/60">
          Your profile has been successfully set up. You're ready to explore opportunities, connect with others, and showcase your work.
        </p>
        <div class="relative mb-2">
          <div class="absolute top-1/2 left-[18px] right-[18px] h-0.5 -translate-y-1/2" style="background: linear-gradient(90deg, #5EEAD4, #034f46)"></div>
          <div class="relative flex justify-between">${dots}</div>
        </div>
        <div class="flex justify-between text-xs font-bold" style="color:#034f46">${numbers}</div>
        <button type="button" data-action="close-success" class="mt-6 w-full rounded-md bg-brand-green py-3 text-sm font-bold text-white transition-colors duration-300 ease-out hover:opacity-90">Continue</button>
      </div>
    </div>
  `;
}

// ---------- Events ----------
function bindEvents(isLastStep) {
  app.querySelectorAll("[data-step-nav]").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.disabled) return;
      state.currentStep = Number(btn.dataset.stepNav);
      render();
    });
  });

  const backBtn = app.querySelector('[data-action="back"]');
  if (backBtn) backBtn.addEventListener("click", () => {
    state.currentStep -= 1;
    render();
  });

  const primaryBtn = app.querySelector('[data-action="continue"], [data-action="finish"]');
  if (primaryBtn) primaryBtn.addEventListener("click", () => {
    primaryBtn.disabled = true;
    setTimeout(() => {
      if (isLastStep) {
        state.showSuccess = true;
      } else {
        state.currentStep += 1;
      }
      render();
    }, 150);
  });

  const closeSuccessBtn = app.querySelector('[data-action="close-success"]');
  if (closeSuccessBtn) closeSuccessBtn.addEventListener("click", () => {
    state.showSuccess = false;
    render();
  });

  // Simple text/textarea/select fields -> update state without full re-render
  app.querySelectorAll("[data-field]").forEach((el) => {
    const field = el.dataset.field;
    if (el.type === "checkbox") {
      el.addEventListener("change", () => {
        state[field] = el.checked;
        render();
      });
    } else if (el.tagName === "SELECT") {
      el.addEventListener("change", () => {
        state[field] = el.value;
      });
    } else {
      el.addEventListener("input", () => {
        state[field] = el.value;
      });
    }
  });

  app.querySelectorAll("[data-video-link]").forEach((el) => {
    const i = Number(el.dataset.videoLink);
    el.addEventListener("input", () => {
      state.videoLinks[i] = el.value;
    });
  });

  app.querySelectorAll("[data-role]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.selectedRole = Number(btn.dataset.role);
      render();
    });
  });

  const toggleRolesBtn = app.querySelector('[data-action="toggle-roles"]');
  if (toggleRolesBtn) toggleRolesBtn.addEventListener("click", () => {
    state.showAllRoles = !state.showAllRoles;
    render();
  });

  app.querySelectorAll("[data-connect]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const i = Number(btn.dataset.connect);
      state.connected[i] = !state.connected[i];
      render();
    });
  });
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
function escapeAttr(str) {
  return escapeHtml(str);
}

render();
