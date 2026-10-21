# JavaScript and markup: what is where

Rule followed in this prototype: **markup lives in the HTML; JavaScript only reads state, toggles `hidden` / classes / `data-*`, fills text, filters and replays animations.** Nothing about the look or the motion changed when pages were converted.

## How converted pages work
- Every possible card, row, panel and popup is written in the page. Filters, tabs, paging and status changes show or hide them.
- State that must be shown in several places (invitation answers, verified recruiter flag, notification "seen") is kept in `localStorage` by the small scripts in `assets/`.
- Row / card entrance animations are re-played by restarting the CSS animation on the rows that are shown (`animation-delay` per row), so lists still fade in the way they did.
- Shared pieces are static too: help button + feedback + founder popups (`assets/help-fab.css/js`), promo banner (`assets/promo-banner.css`), badge tooltip box (`#tt-global`, `assets/badges.css`), toasts (`#toast`).

## Pages still using JavaScript-created elements (on purpose)
These build content from what the user does or from per-record data, so they cannot be written out without changing behaviour or bloating the pages:

| Page(s) | What JavaScript still creates | Why it stays |
|---|---|---|
| `landing.html` | the hero headline/paragraph line masks | the line breaks depend on the screen width; the reveal is line by line |
| `messages`, `creator-messages`, `co-messages` | message bubbles, thread list | every sent message is new content |
| `post-job`, `co-post-job` | wizard steps, screening-question list, Copilot chat bubbles | steps and questions are added by the user |
| `my-portfolio` | import / verify popups, portfolio cards, client + review panels | built from portfolio data and user actions |
| `manage-job`, `co-manage-job` | the page body from a job record, edit form, screening list | built from a job record; list is user-added |
| `review-applicant`, `co-review-applicant` | the whole review page for one applicant | generated per applicant (57 variants) |

If a real backend is added later, these are the pages that should render on the server.

## Prototype state keys (localStorage)
`arclent_session`, `arclent_verified_creator|company`, `arclent_sent_invites`, `arclent_invites`, `arclent_withdrawn`, `arclent_notif_seen`.
