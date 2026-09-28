# arclent — Design System (the "Integrated Bio" theme)

This document describes the visual language, tokens, components and page patterns used across the arclent front-end prototype. It was built by taking the look of [integratedbio.com](https://integratedbio.com/) as the reference and applying it to every page: the public site, the talent dashboard, the creator dashboard and the company dashboard.

The prototype is static HTML + Tailwind (CDN) + a little vanilla JS, GSAP and Lenis. There is no backend. All data on the pages is sample data held in page scripts.

- Reference page for the theme: `site/landing.html`
- Everything lives in `site/`
- Page assembly notes are at the end (section 14).

---

## 1. Principles

1. **Editorial and calm.** Big quiet type, lots of bone-coloured space, one dark ink colour, and lime used sparingly as the only bright accent.
2. **Flat.** No drop shadows, no gradients on surfaces. Depth comes from colour blocks (white on bone, ink on bone) and hairlines.
3. **Two-tone titles.** Every large title is set in dark ink with its second half muted, for example `Manage jobs.` or `Welcome back, Mike.`
4. **Mono for machinery, sans for meaning.** Anything that labels, counts, filters or acts (labels, tabs, buttons, tags, timestamps) is uppercase Roboto Mono. Anything a person reads (titles, descriptions, names) is Inter Tight.
5. **Dark panels for the important interaction.** Forms, key numbers and calls to action sit in dark ink "contour" panels. Reading surfaces are white cards.
6. **Lime marks the one thing to notice.** A lime chip, the primary action on a dark panel, a selected state, a positive number. Never large lime areas except the deliberate "Portfolio strength" style cards.
7. **Motion is slow and eased.** Expo-out easing, 0.4–0.9 s transitions, staggered entrances, always disabled for reduced-motion users.

---

## 2. Colour

### 2.1 Core palette (Tailwind names in `tailwind.config`)

| Token | Hex | Tailwind | Use |
|---|---|---|---|
| Ink (Abyssal ink) | `#222F30` | `ink`, `brand` | Primary text, dark panels, primary buttons, active tabs |
| Primary (soft ink) | `#4D5757` | `primary` | Secondary text, mono labels, muted titles, pattern strokes |
| Surface (bone) | `#F7F7F5` | `surface` | Page background |
| Neutral | `#C9CBBE` | `neutral` | Chip borders, muted title colour, dashed borders |
| Accent (bioluminescent lime) | `#CEF79E` | `accent` | Highlights, primary action on dark, selected states |
| Error | `#D64545` | `error` | Destructive actions, rejected data |
| White | `#FFFFFF` | `white` | Cards on the bone background |

### 2.2 Supporting neutrals (arbitrary values used consistently)

| Hex | Use |
|---|---|
| `#F3F3F1` | Tiles, inactive segmented containers, input backgrounds on white cards |
| `#E7E8E1` | Row dividers inside white cards, table rules |
| `#DADCD0` | Section hairlines on the bone background, progress track |
| `#EEF3E6` | Selected row in lists (light lime-grey) |
| `#EAEAE6` | Hover on `#F3F3F1` chips |
| `#FBFBF9` | Hover on white rows |

### 2.3 Colours on dark panels

| Hex | Use |
|---|---|
| `#394546` | Fields, inactive chips and secondary tiles on ink |
| `#4A5859` | Hover for `#394546` |
| `#2F3C3D` | Stage/preview panels nested in ink sections |
| `#4D5757` | Contour pattern stroke (at 40% opacity) |
| `rgba(255,255,255,.15)` | Hairlines on ink (`border-white/15`) |
| `white/45`, `white/55`, `white/60`, `white/70` | Muted text steps on ink |

### 2.4 Status colours

| Meaning | Background | Text |
|---|---|---|
| Applied / live / positive | `#CEF79E` | `#222F30` |
| Under review | `#E6F4D3` (or `#EEEEEE`) | `#3C6B1E` (or ink) |
| Shortlisted | `#222F30` | `#CEF79E` |
| Rejected / expired / denied | `#F9DDDD` | `#B93A3A` |
| Pending verification | `white/90` chip with amber dot `#E0A93B` | ink |
| Unread / live dot | `#7FD34A` | |
| Error text on ink | | `#FF8A8A` |
| Destructive text on light | | `#B23B3B` |
| Redeemable (points) | `#DCF6BC` | ink |

Platform brand colours are used only for platform logo tiles: YouTube `#FF0000`, Discord `#5865F2`, Twitch `#9146FF`, Instagram gradient `#F9CE34 → #EE2A7B → #6228D7`, X `#000000`, Facebook `#1877F2`, LinkedIn `#0A66C2`.

### 2.4 Tier colours (badge system)

Bronze `#B5732E`, Silver `#5B6B76`, Gold `#C9932E`, Diamond `#2E7FB5`, Red Diamond `#C93E4E`.

### 2.5 Rules

- Page background is always `#F7F7F5`. Cards on it are white. Cards on white are `#F3F3F1`.
- Only one dark panel should dominate a viewport at a time, plus optionally one lime block.
- Text on ink is white with reduced opacity steps, never a grey hex.
- Never put lime text on white. Lime is a fill on light backgrounds and a text/fill colour on ink.

---

## 3. Typography

### 3.1 Families

- **Inter Tight** (`font-sans`, and `font-serif` is mapped to it too, so there is no serif anywhere). Weight 400 only. Headings are not bolded; hierarchy comes from size and tracking.
- **Roboto Mono** (`.mono`, `font-mono`). Weight 400, uppercase, `letter-spacing: -0.02em`.

Both are loaded from Google Fonts (`family=Inter+Tight:wght@400&family=Roboto+Mono:wght@400`).

### 3.2 Scale

| Role | Size | Leading | Tracking | Example class |
|---|---|---|---|---|
| Hero / page title | `clamp(52px, 8vw, 128px)` | `.92` | `-0.055em` | `text-[clamp(52px,8vw,128px)] leading-[.92] tracking-[-0.055em]` |
| Large title (dashboards, sections) | `clamp(44px, 7.4vw, 120px)` | `.92–.96` | `-0.055em` | |
| Section title | `clamp(28px, 3vw, 44px)` | `1` | `-0.035em`–`-0.04em` | |
| Card title | `clamp(22px, 2.2vw, 30px)` | `1.1` | `-0.02em` | |
| Row title | `17–20px` | `tight` | `-0.01em` | |
| Body large | `18px` | `snug (1.375)` | normal | intro paragraphs |
| Body | `16–17px` | `snug` | normal | |
| Mono label | `11–13px` | `1.3` | `-0.02em` | `.mono` |
| Big numbers | `clamp(44px, 6vw, 96px)` | `1` | `-0.055em` | KPI values |
| Oversized number | `clamp(84px, 11vw, 168px)` | `.85` | `-0.07em` | "1.00", "96" |

### 3.3 Two-tone headings

The second half of a heading is muted:

- On light: `<span class="text-primary/45">…</span>`
- On dark: `<span class="text-white/45">…</span>`

Titles usually end with a full stop (`Settings.`, `History.`) when they are single words.

### 3.4 Copy voice

- Short, plain, confident sentences. No exclamation marks except the welcome emoji on legacy pages.
- Buttons and labels are verbs or short nouns: `Create job`, `Review`, `Save changes`, `Mark all as read`.
- Empty states say what will appear: "No applicants yet. Candidates who apply will show up here."
- Confirmations are toast messages: "Settings saved", "Link copied", "Request sent".

---

## 4. Shape, borders and surfaces

| Element | Radius |
|---|---|
| Page-level hero panel | `28px` (opens to `20px` in the landing hero) |
| Dark panels, large cards, modals | `24px` |
| Cards, rows | `20px` |
| Inner tiles, list rows | `16–18px` |
| Fields, buttons, segmented tabs | `12px` |
| Small buttons, icon tiles | `10px` |
| Tags / chips (tag style) | `999px` |
| Status pills | `8px` |
| Avatars | `999px` |

- **Borders:** 1px hairlines only. `border-[#E7E8E1]` inside white cards, `border-[#DADCD0]` on the bone page, `border-white/15` on ink, `border-[#C9CBBE]` for outlined chips.
- **Outlines for secondary buttons:** `outline outline-1 -outline-offset-1 outline-ink/30` (light) or `outline-white/30` (dark). Hover fills or recolours.
- **Shadows:** none. The single exception is the floating help menu tiles (`0 8px 24px rgba(34,47,48,.12)`).
- **Backdrop blur:** used on the sticky top bar and modal scrims only.

### 4.1 The contour pattern

A signature texture on every dark panel: a rotated field of large rounded rectangles.

```html
<svg class="pointer-events-none absolute inset-0 h-full w-full opacity-40" aria-hidden="true">
  <defs>
    <pattern id="p1" width="260" height="180" patternUnits="userSpaceOnUse" patternTransform="rotate(-28)">
      <rect x="8" y="8" width="240" height="160" rx="60" fill="none" stroke="#4D5757" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#p1)"/>
</svg>
```

The panel needs `relative overflow-hidden`, and its content sits in a `relative` wrapper above the pattern. Each page uses a unique pattern `id`.

### 4.2 Notch tab

Cards on the public jobs and talents pages have a cut-out corner ("notch") in the bottom right holding an arrow tab. It is built with `.notch` (bone background, 22px inverted radii via radial gradients) and an arrow `<i>` that rounds out on hover.

---

## 5. Spacing and layout

### 5.1 Base

Tailwind's 4px scale. Common gaps: `gap-2` (8px) between chips, `gap-3` (12px) inside cards, `gap-4` (16px) between cards, `gap-6/8` for major groups.

### 5.2 Page shells

**Public pages** (`landing`, `find-jobs`, `talents`, `job-details`, etc.)
- `max-w-[1200px]` or `[1400px]` centred, `px-4 lg:px-8`, floating frosted nav bar, footer with giant wordmark.

**Dashboard pages** (talent, creator, company)
- Fixed sidebar `260px` wide, collapsible to `72px`; content offset with `margin-left` (0 on mobile).
- Sticky top bar (`bg-surface/90 backdrop-blur-md`, `border-b border-[#DADCD0]`).
- Content: `px-4 lg:px-8 pt-8 pb-28`. The bottom padding leaves room for the floating help button.
- Cards separated by `gap-4`. Two-column splits are `lg:grid-cols-[1.4fr_1fr]`, `[1.6fr_1fr]`, `[340px_1fr]` or `[360px_1fr]`.

### 5.3 Responsive behaviour

- Breakpoints follow Tailwind: `sm 640`, `md 768`, `lg 1024`, `xl 1280`.
- Below `lg` the sidebar becomes an off-canvas drawer opened by the top-bar menu button.
- Two-panel layouts (messages, applicants, notifications) stack; the messages list and chat swap with a back button.
- Big titles scale with `clamp()`; tables become stacked rows.
- Long content in modals scrolls inside the overlay.

---

## 6. Motion

### 6.1 Easing and timing

| Token | Value | Use |
|---|---|---|
| Expo out | `cubic-bezier(0.16, 1, 0.3, 1)` | Entrances, reveals, drawers |
| Soft out | `cubic-bezier(0.22, 1, 0.36, 1)` | Button interlocks, toggles, hover morphs |
| Expo in-out | `expo.inOut` (GSAP) | Landing hero panel opening |
| Hover colour | `0.4–0.75s` | Buttons, chips, rows |
| Entrance | `0.5–0.9s` | Cards, rows, modals |

### 6.2 Patterns

- **Hero opening (landing):** a blank bone page, then a point at the centre of the hero grows into the rounded panel (`clip-path: inset(50% round 200px)` to `inset(0 round 20px)`, 2s, 0.3s delay). At 1.6s copy lines rise out of masks (`y:110 → 0`, 0.8s, stagger 0.05), then the buttons pop in with `back.out(1.7)`.
- **Scroll reveal:** `[data-reveal]` and `[data-reveal-group]` fade and rise 14–28px when they enter view.
- **List entrances:** `row-in` / `fadein` keyframe (`opacity 0, translateY(12–16px)`, 0.5–0.6s) with per-row delays of 40–70ms.
- **Modals:** `step-in` (fade + 16px rise + slight scale).
- **Hover on rows/cards:** background flips to ink with lime accents, or the notch/arrow tab rounds out.
- **Toasts:** appear bottom-right for about 2.2s.
- **Smooth scroll:** Lenis on public pages, native scroll in dashboards.
- **Reduced motion:** every animation checks `prefers-reduced-motion` and is skipped or disabled.

---

## 7. Components

### 7.1 Buttons

| Type | Look | Use |
|---|---|---|
| **Primary (dark)** | `h-12 rounded-[12px] bg-ink px-5 text-white mono`, hover `bg-[#CEF79E] text-ink` | Main actions on light backgrounds |
| **Primary (lime)** | `bg-[#CEF79E] text-ink`, hover `bg-white` | Main actions on dark panels |
| **Secondary (outline)** | transparent, `outline-ink/30` (light) or `outline-white/30` (dark); hover fills or turns lime | Cancel, back, secondary |
| **Danger** | text `#B23B3B` (light) or `#FF8A8A` (dark) with a 40–50% outline; hover fills solid | Delete, deny, disconnect |
| **Icon tile** | `h-10 w-10 rounded-[10px] bg-[#F3F3F1]`, hover lime | Close, remove, message |
| **Two-part `.ib-btn`** | A label block plus an interlocking arrow tab that swap fills on hover | Hero and section CTAs on public pages |
| **Text link** | `.tl` (1px underline that thickens on hover) | "View all", "Read more" |

Rules: labels are `mono` uppercase; height `48px` (`h-12`) for standard, `56px` (`h-14`) for full-width form submits, `44px` for compact.

### 7.2 Tags, chips and pills

- **Tag (`.tag`)**: outlined, `border #C9CBBE`, `10px` mono, full radius. Skills and keywords.
- **Status pill**: `mono rounded-[8px] px-3 py-1.5` with the status colours in 2.4.
- **Lime chip**: `mono rounded-full bg-[#CEF79E] px-3 py-1.5 text-ink`. "Recommended", "Creator", "Days left".
- **Choice chip** (selectable): `mono rounded-full px-4 py-3`, inactive `bg-[#394546] text-white/85` on dark or `bg-[#F3F3F1]` on light, active `bg-[#CEF79E] text-ink` (dark panel) or `bg-ink text-[#CEF79E]` (light).

### 7.3 Segmented tabs

A rounded container (`rounded-[12px] bg-white` or `bg-[#F3F3F1]`, `overflow-hidden`) holding mono buttons. Active tab is `bg-ink text-white`. A lime count badge (`rounded-full bg-[#CEF79E] px-2 py-0.5`) may follow the label. Used for All / Unread, filters, and settings sections.

### 7.4 Form fields

- **Dark field (`.field`)**: `min-height 54px`, `bg #394546`, `rounded-12`, white text, 1px transparent outline that becomes lime on focus. Textareas use `padding 16px 18px`. Selects use a white chevron.
- **Label (`.lbl-f`)**: 11px mono, uppercase, white, `10px` below.
- **Light field (`.field-l`)**: white background, 1px `#E7E8E1` outline, ink text, ink outline on focus.
- **Inline editable text (`.dl-in`, `.tile-in`)**: borderless text that gains an underline and a `#F7F7F5` background in edit mode. Used on profile pages.
- **Search bar**: a white `rounded-[14px] p-1.5` container with a mono uppercase input, a search icon, and optional filter and submit buttons.
- Validation: errors are mono text in `#FF8A8A` (dark) or `#B23B3B` (light) directly below the field; success is `✓ Looks valid` in lime.

### 7.5 Switches

`.switch` (dark panels): 46×26 track `#4D5757`, white knob; on = lime track with ink knob.
`.sw` (light cards): 50×28 track `#C9CBBE`; on = ink track with lime knob. Both use a visually hidden checkbox and a focus ring.

### 7.6 Cards and panels

| Card | Look |
|---|---|
| **White card** | `rounded-[20–24px] bg-white p-6 sm:p-8` |
| **Dark contour panel** | `rounded-[24px] bg-ink text-white p-6 sm:p-10` with the contour pattern |
| **Lime block** | `rounded-[24px] bg-[#CEF79E] text-ink` for a single highlight (profile strength) |
| **KPI band** | One dark panel split into 3–4 cells with `border-white/15` dividers; label (mono), huge number, small mono delta |
| **List row** | White `rounded-[20px]` row with avatar, title, mono meta, status pill and an arrow tab; on hover flips to ink |
| **Selectable list item** | Full-width button; selected state `bg-ink text-white` (job list) or `bg-[#EEF3E6]` (message list) |
| **Definition list** | Mono label left, large value right, hairline between rows (profile) |
| **Stat tile** | Mono label, large number, thin progress bar |

### 7.7 Avatars

- Photo avatars: `rounded-full bg-cover`, sizes 36–56px; stacked with `-space-x-2` and a `ring-2 ring-ink` on dark.
- Initial avatars: ink circle with a lime mono initial (`bg-ink text-[#CEF79E]`) or a lime circle with an ink initial on dark.
- Platform logos: coloured rounded tile (`rounded-[7–16px]`) with a white glyph.

### 7.6 Tables and lists

Tables are used sparingly. Prefer stacked rows (`grid` with column templates on `lg`, labelled fields on small screens). Header row is mono, `text-primary`. Rows are separated by hairlines or sit as separate rounded rows.

### 7.7 Modals

- Overlay: `fixed inset-0 bg-ink/70 backdrop-blur-sm`, padding `12–24px`, scrolls when content is tall.
- Card: `rounded-[24px] bg-ink` (forms, verification) or `bg-white` (reading), max width 520–1100px, `step-in` entrance.
- Close: top-right icon tile (`h-10 w-10 rounded-[10px] bg-[#394546]`, hover lime). Escape and scrim click also close.
- Header pattern: mono lime label, then a large title with a muted second half.
- Multi-step modals swap content inside one card, with a "Back" control and a stepper of numbered mono tabs when useful.

### 7.8 Toasts

`mono fixed bottom-24 right-6 rounded-[10px] bg-ink px-4 py-3 text-[#CEF79E]`, auto-removed after about 2.2s. The floating help button sits at bottom-right, so toasts sit above it.

### 7.9 Floating help button

Injected on every dashboard page by `assets/help-fab.js`. A `56px` ink circle with a lime hand icon at `24px` from the bottom-right corner. On click it turns into a red rounded "Close" tile and reveals two labelled tiles above it: **Feedback** (pencil) and **Talk with founder** (calendar). Each opens a dark modal (feedback form with type chips, or a call-booking form with slots).

### 7.10 Empty and loading states

- Empty: a centred mono line in `text-primary` inside a white rounded block, optionally with a small ink circle icon.
- Loading/searching: a lime-topped spinning ring, a mono lime label, and a large reassuring line.
- Progress: 6px rounded bars (`bg-[#E7E8E1]` track, ink fill) or stepped bars.

---

## 8. Navigation

### 8.1 Public nav

Floating frosted bar (`.ib-nav`) at the top: logo chip, mono links, and a dark "Get started" button. Transparent over the hero, gains its background after scrolling. On small screens a two-line hamburger opens a full-screen ink overlay with large staggered links.

### 8.2 Dashboard sidebar

- `260px` wide, `bg-surface`, right hairline, mono uppercase items at `12px`.
- Item: icon (18px stroke 2) + label; active item is `bg-ink text-white rounded-[10px]`; inactive is `text-primary` with a white hover.
- Header row: logo on the left, **panel-toggle button on the right** (an outlined rounded square with a vertical divider icon). Collapsed (`72px`): the logo shrinks to its mark and the toggle stacks beneath it, labels hide, footer links hide.
- Footer: Logout (ink button, red on hover) and small mono links (About, Privacy policy, Terms of service, Contact).
- Sidebars are **separate per role**. Talent, creator and company sidebars never link into each other's pages.

| Role | Sidebar items |
|---|---|
| Talent | Dashboard, Profile, Notifications, Messages, Talents, Settings, Connected account — My Portfolio, History, Find Jobs, My Applications |
| Creator | Dashboard, Profile, Notifications, Messages, Post a Job, Applicants, Settings, Connected account — Manage Jobs, My Points, Verification Center |
| Company | Dashboard, Profile, Notifications, Messages, Post a Job, Applicants, Settings, Connected account — Manage Jobs, Reset Password, Manage Company |

### 8.3 Top bar (dashboards)

Sticky, frosted. Left: menu button (small screens only) and logo (small screens). Centre: three mono shortcuts with icons. Right: notifications, messages and a round profile photo.

---

## 9. Page patterns

Every dashboard page starts the same way:

1. Mono eyebrow label (`Inbox`, `Account`, `Your jobs`…)
2. Huge two-tone title
3. One or two lines of intro copy in `text-primary`
4. Content composed from the layouts below

### 9.1 Layouts

| Pattern | Structure | Used by |
|---|---|---|
| **KPI band + bento** | Dark KPI band, then white cards with charts and lists | Creator dashboard |
| **Rail + analytics** | Sticky dark rail with the headline number, analytics column | Company dashboard |
| **Pipeline** | Dark band with four numbered stages and progress bars, cards below | Talent dashboard |
| **Split with sticky column** | Left dark or image card stays in view, right column scrolls | Profile, settings, For Talent / Recruiters |
| **Master–detail** | Selectable list left, detail panel right | Applicants, notifications, messages |
| **Tabbed single panel** | Segmented tabs switching one white or ink section | Settings (creator, company), verification |
| **Row list** | Full-width rows under column headings; hover flips to ink | Manage jobs, history, applications |
| **Card grid** | 1–3 column grid of large cards | Connected accounts, portfolio, pending verification |
| **Choice cards** | Two large cards to pick a path | Post a job entry, verification method, waitlist role |
| **Wizard** | Numbered steps with a dark form panel | Create job (4 steps), onboarding |
| **Definition list** | Mono label + large value rows | Profile |

### 9.2 Charts (Chart.js)

- Line: 2px ink line, lime fill at ~55% opacity, ink dots, mono 11px ticks in `#4D5757`, gridlines `rgba(34,47,48,.08)`, no legend.
- Bar: ink bars, `borderRadius: 8`, thin max thickness.
- Doughnut: `cutout ~66–68%`, white 3px borders, colours lime / `#D64545` / ink, with the total centred in HTML.

---

## 10. Page inventory

### Public
`landing.html` (hero, process, tiers, talent, recruiters, demos, footer), `find-jobs.html`, `job-details.html`, `talents.html`, `talent-details.html`, `login.html`, `choose-role.html`, `talent-onboarding.html` (+ `script.js`), `recruiter.html`, `company-onboarding.html`, `company-profile.html`, `company-hiring.html`, `company-jobprefs.html`, `company-connect.html`, `waitlist.html`.

### Talent dashboard
`talent-dashboard.html`, `profile.html`, `notifications.html`, `messages.html`, `settings.html`, `connected-account.html`, `my-portfolio.html` (add work, verify, import, share), `history.html`, `my-applications.html`.

### Creator dashboard
`creator-dashboard.html`, `creator-profile.html`, `creator-notifications.html`, `creator-messages.html`, `creator-settings.html`, `creator-connected-account.html`, `post-job.html`, `applicants.html`, `manage-jobs.html`, `manage-job.html`, `job-applicants.html`, `job-settings.html`, `review-applicant.html`, `my-points.html`, `verification-center.html`, `verify-request.html`.

### Company dashboard (`co-*` prefix)
`company-dashboard.html`, `co-profile.html`, `co-notifications.html`, `co-messages.html`, `co-settings.html`, `co-connected-account.html`, `co-post-job.html`, `co-applicants.html`, `co-manage-jobs.html`, `co-manage-job.html`, `co-job-applicants.html`, `co-job-settings.html`, `co-review-applicant.html`, `co-reset-password.html`, `co-manage-company.html`.

### Shared assets
`assets/logo.png`, `assets/silk-bg.js` (WebGL silk shader), `assets/help-fab.js` (floating help), `assets/vendor/` (GSAP, ScrollTrigger), badge images, favicons.

---

## 11. Signature moments

- **Silk shader hero** (`silk-bg.js`): a WebGL1 silk pattern in deep greens → bone; palette array `[0.03,0.12,0.06, 0.25,0.41,0.30, 0.48,0.58,0.46, 0.87,0.87,0.76]`. Also used in the "what we do" scroller.
- **Hero opening:** centre-out clip-path reveal, then masked line rises (see 6.2).
- **Scroll-driven hero exit:** copy dims and blurs line by line while the panel settles back.
- **Giant footer wordmark:** letters spring up out of a mask and ripple toward the cursor.
- **Badge tiers:** five cards rising in height (staircase) from Bronze to Red Diamond.
- **Auto-playing demos:** three dark panels with a numbered stepper and a looping mock flow (verification, AI job posting, outreach).
- **Featured carousel** on jobs and talents: auto-rotating with a segmented progress bar. It does not pause on hover.

---

## 12. Accessibility

- All interactive icons have `aria-label`s; modals have `role="dialog" aria-modal="true"` and an `aria-labelledby` title.
- Focus rings: ink outlines on light, lime on dark (`:focus-visible`), including switches.
- Colour is never the only signal: statuses carry text, and unread items carry a dot plus a label.
- Text contrast: ink on bone/white is above AA; muted mono on white uses `#4D5757`. Avoid `text-primary/45` for anything except decorative second-half titles.
- Motion respects `prefers-reduced-motion`.
- The `[hidden]` attribute is force-hidden (`display: none !important`) on pages that combine it with `flex` classes.

---

## 13. Do and don't

**Do**
- Keep one dark panel per screen and one lime highlight per section.
- Use two-tone titles, mono labels and hairlines.
- Reuse the standard radii (12 / 20 / 24).
- Keep role dashboards separate: talent, creator and company must never link to each other's pages.
- Provide an empty state and a toast for every action.

**Don't**
- Add shadows, gradients on surfaces, or bold weights.
- Use serif fonts, pure black, or new accent colours.
- Put lime text on a white background.
- Introduce icon fonts; all icons are inline stroke SVGs (24px viewBox, stroke `1.75–2`, round caps and joins).
- Create separate styles per page when a token above exists.

---

## 14. Implementation notes

- **Styling:** Tailwind Play CDN with an inline `tailwind.config` (colours and font families from section 2/3). Custom CSS for the components that Tailwind can't express (`.ib-btn`, `.notch`, `.field`, `.switch`, contour patterns) lives in each page's `<style>`.
- **Page assembly:** dashboard pages share one shell (sidebar, top bar, content wrapper). New pages are built by copying a neighbour and replacing the content block between `<!-- CONTENT -->` and the closing wrapper divs.
- **Scripts:** each page has its own inline script for its data and behaviour (sample data is defined in the page). Shared scripts: the sidebar toggle (inline in each page), `assets/help-fab.js`, `motion.js`, GSAP, Lenis (public pages), Chart.js (dashboards with charts).
- **Query parameters:** the dev server drops `?id=` when a link ends in `.html`. Use extensionless links for pages that read a query (`manage-job?id=…`, `job-details?id=…`).
- **State:** in-page JS only. A few flows use `sessionStorage` (`ja:*` applicant status, `vc-result` verification result) and the waitlist uses `localStorage`.
- **Prototype limits:** no backend. Data, AI responses, emails and verification are simulated; every simulated flow is a front-end illustration of the intended experience.
- **Adding a new dashboard page:** pick the closest pattern in section 9.1, keep the eyebrow + two-tone title + intro header, use white cards on bone with `gap-4`, place the key interaction in a dark contour panel, add a toast for each action, and link it from the correct role's sidebar only.
