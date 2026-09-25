// ---------- Icons ----------
const icon = {
  profile: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></svg>`,
  role: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>`,
  link: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></svg>`,
  job: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>`,
  connect: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M9 17H7A5 5 0 0 1 7 7h2"/><path d="M15 7h2a5 5 0 1 1 0 10h-2"/><line x1="8" x2="16" y1="12" y2="12"/></svg>`,
  check: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25"><path d="m5 13 4 4L19 7"/></svg>`,
  design: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="10" r="2.5"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><path d="M14 20c0-2.2 1.6-4 4-4"/></svg>`,
  broadcast: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="12" cy="12" r="2"/><path d="M8.5 8.5a5 5 0 0 0 0 7"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M5.5 5.5a9 9 0 0 0 0 13"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/></svg>`,
  bars: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M5 19V10"/><path d="M12 19V5"/><path d="M19 19v-6"/></svg>`,
  camera: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"/><circle cx="12" cy="13" r="3"/></svg>`,
  upload: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25"><path d="M12 3v12"/><path d="m17 8-5-5-5 5"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/></svg>`,
  chevron: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m6 9 6 6 6-6"/></svg>`,
  instagram: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>`,
  youtube: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>`,
  linkedin: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`,
  twitch: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"/></svg>`,
  tiktok: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>`,
  discord: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>`,
  pinterest: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/></svg>`,
};


// ---------- Data ----------
const steps = [
  { key: "profile", title: "Profile", icon: icon.profile, heading: "Let's start with the basics", subtitle: "A photo and a short intro — this is the first thing recruiters see." },
  { key: "role", title: "Role", icon: icon.role, heading: "What do you make?", subtitle: "Pick your primary platform and the role that best fits your work." },
  { key: "videos", title: "Videos", icon: icon.link, heading: "Show us your best work", subtitle: "Link the 6 best videos where you had this role." },
  { key: "job", title: "Experience", icon: icon.job, heading: "Your most recent role", subtitle: "A complete profile makes you more visible to recruiters and clients." },
  { key: "connect", title: "Connect", icon: icon.connect, heading: "Connect your accounts", subtitle: "Link your platforms so recruiters can verify your reach at a glance." },
];

const platforms = [
  { label: "Instagram", icon: icon.instagram },
  { label: "TikTok", icon: icon.tiktok },
  { label: "YouTube", icon: icon.youtube },
  { label: "LinkedIn", icon: icon.linkedin },
];

const roles = [
  { label: "UI/UX Design", icon: icon.design },
  { label: "Video Editor", icon: icon.broadcast },
  { label: "Graphic Designer", icon: icon.bars },
  { label: "Streaming", icon: icon.broadcast },
  { label: "Copywriting", icon: icon.design },
  { label: "Photography", icon: icon.bars },
  { label: "Animation", icon: icon.design },
  { label: "Podcasting", icon: icon.broadcast },
  { label: "Illustration", icon: icon.bars },
];

const connectAccounts = [
  { name: "Discord", color: "#5865F2", icon: icon.discord },
  { name: "Pinterest", color: "#E60023", icon: icon.pinterest },
  { name: "Twitch", color: "#9146FF", icon: icon.twitch },
  { name: "YouTube", color: "#FF0000", icon: icon.youtube },
  { name: "Personal Website", color: null, icon: icon.link },
];

// ---------- State ----------
const state = {
  currentStep: 0,
  name: "",
  description: "",
  platform: 0,
  selectedRole: null,
  showAllRoles: false,
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
const escapeHtml = (str) => String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const escapeAttr = escapeHtml;
const BTN = `<button class="ib-btn ib-btn--light" type="button" data-action="__ACTION__"><span class="lbl">__LABEL__<i class="corner"><svg viewBox="0 0 18 48" preserveAspectRatio="none" aria-hidden="true"><path d="M0 0h6c8 0 13.4 7.2 11.4 15L11 39a11.5 11.5 0 0 1-11 9V0Z"/></svg></i></span><i class="ico"><svg viewBox="0 0 51 48" preserveAspectRatio="none" aria-hidden="true"><path class="shape" d="M6.8 9.2A12 12 0 0 1 18.4 0H39c6.6 0 12 5.4 12 12v24c0 6.6-5.4 12-12 12H12.4C4.6 48-1.2 40.7.7 33.2L6.8 9.2Z"/><path class="arrow" d="M23 24h13m-5-5 5 5-5 5" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></i></button>`;
const ibBtn = (label, action, dark) => BTN.replace("__LABEL__", label).replace("__ACTION__", action).replace("ib-btn--light", dark ? "" : "ib-btn--light");
const CONTOUR = `<svg class="pointer-events-none absolute inset-0 h-full w-full opacity-40" aria-hidden="true"><defs><pattern id="op" width="260" height="180" patternUnits="userSpaceOnUse" patternTransform="rotate(-28)"><rect x="8" y="8" width="240" height="160" rx="60" fill="none" stroke="#4D5757" stroke-width="1"/></pattern></defs><rect width="100%" height="100%" fill="url(#op)"/></svg>`;
let firstRender = true;

function render(animate) {
  const isLastStep = state.currentStep === steps.length - 1;
  const s = steps[state.currentStep];
  app.innerHTML = `
    <div class="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
      <div class="lg:sticky lg:top-28 lg:self-start">
        <p class="mono text-primary">Step ${state.currentStep + 1} of ${steps.length}</p>
        <div class="${animate ? "step-in" : ""}">
          <h1 class="mt-6 text-[clamp(40px,5.6vw,88px)] font-normal leading-[.98] tracking-[-0.045em] text-ink">${s.heading}</h1>
          <p class="mt-6 max-w-[460px] text-[clamp(18px,1.6vw,22px)] leading-[1.25] text-primary">${s.subtitle}</p>
        </div>
        ${renderStepper()}
      </div>

      <div class="relative overflow-hidden rounded-[24px] bg-ink p-6 text-white sm:p-10">
        ${CONTOUR}
        <div class="relative">
          <div class="${animate ? "step-in" : ""}">${renderStepContent()}</div>
          <div class="mt-10 flex items-center justify-between gap-4">
            ${state.currentStep > 0 ? `<button type="button" data-action="back" class="mono text-white/70 transition-colors hover:text-[#CEF79E]">&larr; Back</button>` : `<span></span>`}
            ${ibBtn(isLastStep ? "Finish" : "Continue", isLastStep ? "finish" : "continue", false)}
          </div>
        </div>
      </div>
    </div>
    ${state.showSuccess ? renderSuccessModal() : ""}
  `;
  bindEvents(isLastStep);
}

function renderStepper() {
  const rows = steps.map((step, i) => {
    const active = i === state.currentStep, completed = i < state.currentStep, visited = i <= state.currentStep;
    const badge = completed
      ? `<span class="grid h-8 w-11 place-items-center rounded-[11px] bg-[#CEF79E] text-ink">${icon.check}</span>`
      : active ? `<span class="grid h-8 w-11 place-items-center rounded-[11px] bg-ink text-white">${step.icon}</span>` : `<span class="h-8 w-11"></span>`;
    return `<button type="button" data-step-nav="${i}" ${visited ? "" : "disabled"} class="srow ${visited ? (active ? "text-ink" : "text-primary hover:text-ink") : "text-[#C9CBBE]"}">
      <span class="mono w-8">0${i + 1}</span><span class="flex-1 text-[24px] tracking-[-0.02em]">${step.title}</span>${badge}</button>`;
  }).join("");
  return `<nav class="mt-12 hidden max-w-[460px] border-b border-[#C9CBBE] sm:block" aria-label="Steps">${rows}</nav>`;
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
    <div class="mb-9 flex items-center gap-5">
      <div class="relative flex h-20 w-20 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#394546] text-white/60 transition-colors hover:text-[#CEF79E]">
        ${icon.camera}
        <span class="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#CEF79E] text-ink">${icon.upload}</span>
      </div>
      <div><p class="text-[17px]">Profile photo</p><p class="mono mt-1 text-white/50">PNG or JPG, at least 400&times;400px</p></div>
    </div>
    <div class="flex flex-col gap-6">
      <div><label class="lbl-f">Name</label>
        <input type="text" data-field="name" value="${escapeAttr(state.name)}" placeholder="Jane Smith" class="field" /></div>
      <div><label class="lbl-f">Description</label>
        <textarea data-field="description" rows="4" placeholder="Describe your responsibilities and the work you're known for" class="field">${escapeHtml(state.description)}</textarea></div>
    </div>`;
}

function renderStepRole() {
  const platformPills = platforms.map((p, i) => `<button type="button" data-platform="${i}" class="pill ${state.platform === i ? "on" : ""}">${p.icon}${p.label}</button>`).join("");
  const visibleRoles = state.showAllRoles ? roles : roles.slice(0, 6);
  const roleCards = visibleRoles.map((role, i) => `<button type="button" data-role="${i}" class="tile ${state.selectedRole === i ? "on" : ""}"><span>${role.icon}</span>${role.label}</button>`).join("");
  return `
    <div class="mb-9"><label class="lbl-f">Primary platform</label><div class="flex flex-wrap gap-2">${platformPills}</div></div>
    <div><label class="lbl-f">Your role</label>
      <div class="grid grid-cols-2 gap-2 sm:grid-cols-3">${roleCards}</div>
      ${roles.length > 6 ? `<button type="button" data-action="toggle-roles" class="mono mt-5 flex items-center gap-2 text-white/70 transition-colors hover:text-[#CEF79E]">
        ${state.showAllRoles ? "Show fewer roles" : "Show all roles"}<span class="transition-transform ${state.showAllRoles ? "rotate-180" : ""}">${icon.chevron}</span></button>` : ""}
    </div>`;
}

function renderStepVideos() {
  const rows = state.videoLinks.map((value, i) => `
    <div class="vrow"><span class="mono w-6 shrink-0 text-[#CEF79E]">0${i + 1}</span><span class="shrink-0 text-white/50">${icon.link}</span>
      <input type="url" data-video-link="${i}" value="${escapeAttr(value)}" placeholder="https://youtube.com/watch?v=..." /></div>`).join("");
  return `<div class="flex flex-col gap-2">${rows}</div>`;
}

function renderStepJob() {
  return `
    <div class="flex flex-col gap-6">
      <div><label class="lbl-f">Current or last role</label><input type="text" data-field="jobTitle" value="${escapeAttr(state.jobTitle)}" placeholder="e.g. YouTube Editor" class="field" /></div>
      <div><label class="lbl-f">Description</label><textarea data-field="jobDescription" rows="4" placeholder="Describe your responsibilities and important activities regarding this experience" class="field">${escapeHtml(state.jobDescription)}</textarea></div>
      <div><label class="lbl-f">Link (optional)</label><input type="url" data-field="jobLink" value="${escapeAttr(state.jobLink)}" placeholder="https://example.com" class="field" /></div>
      <div class="rounded-[14px] bg-[#2F3C3D] p-5">
        <label class="flex cursor-pointer items-center gap-3">
          <input type="checkbox" data-field="currentlyWorking" ${state.currentlyWorking ? "checked" : ""} class="sr-only" /><span class="switch"></span>
          <span class="text-[16px]">I am currently working in this role</span>
        </label>
        <div class="mt-5 grid grid-cols-1 gap-4 ${state.currentlyWorking ? "" : "sm:grid-cols-2"}">
          <div><label class="lbl-f">Start date</label><input type="date" data-field="jobStartDate" value="${escapeAttr(state.jobStartDate)}" class="field" /></div>
          ${state.currentlyWorking ? "" : `<div><label class="lbl-f">End date</label><input type="date" data-field="jobEndDate" value="${escapeAttr(state.jobEndDate)}" class="field" /></div>`}
        </div>
      </div>
    </div>`;
}

function renderStepConnect() {
  const rows = connectAccounts.map((account, i) => {
    const on = state.connected[i];
    return `<div class="acct">
      <div class="flex items-center gap-3">
        <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white" style="background-color:${account.color ?? "#222F30"};${account.color ? "" : "outline:1px solid rgba(255,255,255,.3)"}">${account.icon}</span>
        <div><p class="text-[17px]">${account.name}</p>
          ${on ? `<span class="mono mt-1 inline-flex items-center gap-1.5 text-[#CEF79E]">${icon.check} Connected</span>` : `<p class="mono mt-1 text-white/50">Not connected</p>`}</div>
      </div>
      <button type="button" data-connect="${i}" class="mini ${on ? "off" : ""}">${on ? "Disconnect" : "Connect"}</button>
    </div>`;
  }).join("");
  return `<div class="flex flex-col gap-2">${rows}</div>`;
}

function renderSuccessModal() {
  const dots = steps.map(() => `<span class="grid h-8 w-11 place-items-center rounded-[11px] bg-[#CEF79E] text-ink">${icon.check}</span>`).join("");
  return `
    <div class="fixed inset-0 z-[70] flex items-center justify-center bg-ink/70 p-4 backdrop-blur-sm">
      <div class="step-in relative w-full max-w-md overflow-hidden rounded-[24px] bg-white p-8 text-center text-ink sm:p-10">
        <h2 class="text-[clamp(34px,4vw,48px)] font-normal leading-none tracking-[-0.04em]">You're all set</h2>
        <p class="mx-auto mt-5 max-w-[340px] text-[17px] leading-snug text-primary">Your profile has been successfully set up. You're ready to explore opportunities, connect with others, and showcase your work.</p>
        <div class="mt-8 flex justify-center gap-1.5">${dots}</div>
        <div class="mt-9 flex justify-center">${ibBtn("Continue", "close-success", true)}</div>
      </div>
    </div>`;
}

function toTop() { (window.__lenis ? window.__lenis.scrollTo(0) : window.scrollTo({ top: 0, behavior: "smooth" })); }

function bindEvents(isLastStep) {
  app.querySelectorAll("[data-step-nav]").forEach((btn) => btn.addEventListener("click", () => {
    if (btn.disabled) return;
    state.currentStep = Number(btn.dataset.stepNav); render(true); toTop();
  }));
  const backBtn = app.querySelector('[data-action="back"]');
  if (backBtn) backBtn.addEventListener("click", () => { state.currentStep -= 1; render(true); toTop(); });
  const primaryBtn = app.querySelector('[data-action="continue"], [data-action="finish"]');
  if (primaryBtn) primaryBtn.addEventListener("click", () => {
    primaryBtn.disabled = true;
    setTimeout(() => {
      if (isLastStep) { state.showSuccess = true; render(false); }
      else { state.currentStep += 1; render(true); toTop(); }
    }, 150);
  });
  const closeSuccessBtn = app.querySelector('[data-action="close-success"]');
  if (closeSuccessBtn) closeSuccessBtn.addEventListener("click", () => { state.showSuccess = false; render(false); });

  app.querySelectorAll("[data-field]").forEach((el) => {
    const field = el.dataset.field;
    if (el.type === "checkbox") el.addEventListener("change", () => { state[field] = el.checked; render(false); });
    else el.addEventListener("input", () => { state[field] = el.value; });
  });
  app.querySelectorAll("[data-video-link]").forEach((el) => {
    const i = Number(el.dataset.videoLink);
    el.addEventListener("input", () => { state.videoLinks[i] = el.value; });
  });
  app.querySelectorAll("[data-platform]").forEach((btn) => btn.addEventListener("click", () => { state.platform = Number(btn.dataset.platform); render(false); }));
  app.querySelectorAll("[data-role]").forEach((btn) => btn.addEventListener("click", () => { state.selectedRole = Number(btn.dataset.role); render(false); }));
  const toggleRolesBtn = app.querySelector('[data-action="toggle-roles"]');
  if (toggleRolesBtn) toggleRolesBtn.addEventListener("click", () => { state.showAllRoles = !state.showAllRoles; render(false); });
  app.querySelectorAll("[data-connect]").forEach((btn) => btn.addEventListener("click", () => { const i = Number(btn.dataset.connect); state.connected[i] = !state.connected[i]; render(false); }));
}

document.documentElement.classList.remove("hero-pending");
render(false);
if (window.gsap && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  gsap.from(".ib-nav", { autoAlpha: 0, y: -18, duration: 0.8, ease: "expo.out" });
  gsap.from("#app > div > div", { autoAlpha: 0, y: 40, duration: 1.2, stagger: 0.12, ease: "expo.out" });
}
