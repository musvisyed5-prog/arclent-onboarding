# Arclent — Email Design System

Feed this file to Claude with: *"Using design.md, create an HTML email template for <email name>."*
Output must be a single, self-contained, email-client-safe HTML file.

## 1. Brand

**Arclent** is a hiring platform connecting video-editing talent with creators and companies.
Tone: calm, editorial, precise. Premium, never loud. Short sentences. No emojis, no exclamation marks, no slang.
Voice: "You" to the reader, plain verbs ("Review applicant", "View portfolio", "Confirm"). Sentence case for body, UPPERCASE mono for eyebrows/labels.

## 2. Color tokens

| Token | Hex | Use |
|---|---|---|
| ink | `#222F30` | Headings, primary text, dark panels, primary button text on lime |
| bone | `#F7F7F5` | Email body/page background |
| white | `#FFFFFF` | Content card background |
| lime (accent) | `#CEF79E` | Primary CTA fill, highlights, status chips on dark |
| slate (primary) | `#4D5757` | Secondary/body text, captions |
| neutral | `#C9CBBE` | Hairlines, dividers, borders |
| error | `#D64545` | Only for genuine error/rejected states, never for CTAs |

Rules: never use red, blue, or gradients as brand colors. Verified/recruiter badge is green (use the image asset, not a blue tick). Max one lime element per screen area.

## 3. Typography

- Headings/body: **Inter Tight**, fallback `Arial, Helvetica, sans-serif`.
- Labels/eyebrows/meta: **Roboto Mono**, fallback `'Courier New', monospace`.
- Load via `<link>` to Google Fonts in `<head>` (clients that strip it fall back gracefully; always specify the fallback stack inline).

| Role | Size / line | Weight | Notes |
|---|---|---|---|
| H1 | 28px / 34px | 500 | letter-spacing -0.5px, color ink |
| H2 | 20px / 26px | 500 | ink |
| Body | 15px / 24px | 400 | slate `#4D5757` |
| Small | 13px / 20px | 400 | slate |
| Eyebrow / label | 11px / 16px | 400 | Roboto Mono, UPPERCASE, letter-spacing 1.2px, slate |

## 4. Layout

- Table-based layout only. Outer 100% table with bone background; inner container `width="600"` and `max-width:600px`. Mobile: fluid at 100%, 16px side gutters.
- Structure top to bottom: **preheader (hidden) → header (logo wordmark) → hero card → content card(s) → CTA → secondary info → footer**.
- Content card: white, `1px solid #C9CBBE` hairline, `border-radius:12px`, padding 32px (24px mobile).
- Dark panel (use for the hero or key highlight only): background `#222F30`, text white, eyebrow in lime, 12px radius, padding 32px.
- Spacing scale: 4 / 8 / 12 / 16 / 24 / 32 / 48px. Use `padding` on `<td>`, never margins.
- Dividers: `1px solid #C9CBBE`, no thick rules.

## 5. Components

**Header**: lowercase wordmark "arclent" in Inter Tight 500, 22px, ink, left-aligned, 24px bottom padding. Optional mono eyebrow on the right (e.g. `HIRING UPDATE`).

**Primary button** (one per email): background `#CEF79E`, text `#222F30`, Inter Tight 500 15px, padding 14px 28px, `border-radius:999px`, no border. Build as a bulletproof `<a>` inside a `<td bgcolor>` (add VML fallback for Outlook).

**Secondary button**: transparent, `1px solid #222F30`, text ink, same size/radius.

**Status chip**: Roboto Mono 11px UPPERCASE, padding 4px 10px, radius 999px. Shortlisted = lime bg + ink text; Under review = bone bg + slate text + hairline; Rejected = white bg + `#D64545` text + hairline.

**Key-value rows** (job, rate, deadline): two columns, label in mono eyebrow style (left), value in ink 15px (right), hairline between rows.

**Person row** (applicant/creator): 44px circular avatar, name 15px ink 500, subtitle 13px slate. Recruiter name may be followed by the 18px `recruiter-verified.png` badge (creators/companies only, never talent).

**Tier badge** (talent): 20px image from `assets/badge-{bronze|silver|gold|diamond|reddiamond}.png` next to the name, with alt text like "Arclent Verified Gold".

**Footer**: bone background, 12px slate. Contains: "Sent by Arclent", links (Privacy, Terms, Contact), unsubscribe/preferences link, and a mono line with © year. Centered.

## 6. Email-client safety checklist

- Inline all critical CSS; keep a small `<style>` block for media queries and dark-mode only.
- Use `role="presentation"` on layout tables, `cellpadding="0" cellspacing="0" border="0"`.
- Images: absolute `https://` URLs, explicit `width`/`height`, `alt` on every image, `display:block`. Logo and badges must read fine with images blocked.
- Include a hidden preheader (`display:none;max-height:0;overflow:hidden;`) of 40–90 chars.
- Add `<meta name="color-scheme" content="light">`; no dark-mode inversion of lime button.
- Mobile breakpoint at 600px: stack columns, buttons full width, H1 24px.
- No JavaScript, no forms, no web-font dependence, no background images for essential content.
- Total width ≤ 600px, file size < 100KB, plain-text-friendly copy.

## 7. Template catalog (what to generate)

Shared: welcome, email verification, password reset, new sign-in alert.
**Talent**: application received, application shortlisted, application rejected (kind, short), new message from recruiter, portfolio import complete (YTJobs), "Arclent Verified" request sent, verified confirmation, tier badge earned.
**Creator / Company**: new applicant, applicant shortlisted confirmation, job posted, recruiter verification (platform connected), talent verification request (CTA: review & confirm, includes review prompt), weekly applicants digest.
**Founder/ops**: call booked confirmation with date/time, key-value rows and "Add to calendar" secondary button.

## 8. Prompt template

> Using design.md, create an HTML email for **[template name]**.
> Audience: **[talent | creator | company]**. Primary CTA: **[label → URL placeholder]**.
> Dynamic fields as `{{double_braces}}`: **[list]**.
> Output one self-contained HTML file with preheader, table layout, bulletproof button, footer, and mobile styles. Follow every token and rule in design.md exactly; do not introduce new colors.
