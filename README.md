# Peak Body Performance — Website

Static site, no build step, no dependencies. Open `index.html` in a browser to preview
(fonts and the two Pexels photos load from CDNs, so you'll want an internet connection).

## Structure

```
peak-body-site/
├── index.html          Home
├── services.html       Services (massage #massage, naturopathic #naturopathic)
├── team.html           Our Team
├── first-visit.html    Your First Visit (new patients + FAQ)
├── about.html          About
├── contact.html        Contact (form + map placeholder)
├── css/styles.css      Full design system + all components
├── js/main.js          Booking-URL config, mobile nav, footer year
└── images/logo.png     Client logo (transparent background)
```

## The one-line booking switch

Every booking button/link carries `data-book`. `js/main.js` points them all at
`SITE_CONFIG.bookingUrl`. Set it once for ClinicSense now; change that same line
when the clinic migrates to Jane.

## Placeholder system

Anything wrapped in `<span class="todo">…</span>` is pending real information and
renders with a gold dashed underline so nothing ships by accident. Find them all with
a project-wide search for `class="todo"`. Current TODOs:

- [ ] `SITE_CONFIG.bookingUrl` in `js/main.js` (ClinicSense URL)
- [ ] Street address + postal code (footer on all pages, contact.html, JSON-LD in index.html)
- [ ] Phone + email (footer on all pages, contact.html, first-visit.html FAQ, JSON-LD)
- [ ] Hours (footer on all pages, contact.html)
- [ ] RMT + ND rates (services.html)
- [ ] Direct-billing wording (services.html, first-visit.html)
- [ ] Real practitioner names/bios/headshots (team.html — two dummy cards are clearly marked)
- [ ] Careers email (team.html hiring panel)
- [ ] Parking + accessibility details (contact.html)
- [ ] Contact form endpoint (contact.html — wire to Formspree/Netlify Forms/backend)
- [ ] Google Maps embed (contact.html — instructions in comment)

## Image slots

Two Pexels photos (free commercial license, no attribution) are hotlinked as
placeholders — download and self-host before launch:

- Hero background: Pexels photo 841131 (athlete/barbell)
- Approach section: Pexels photo 4506109 (practitioner assessment)

All other slots are styled `.img-placeholder` blocks labeled with the intended
subject and the matching Pexels search from proposal §5. Drop in an `<img class="photo">`
to replace any of them.

## Launch-day switches

1. Set the real booking URL in `js/main.js`.
2. Change the ribbon text (all pages) from "Opening August 2026…" to whatever suits
   opening week — or delete the `<div class="ribbon">` entirely.
3. Home hero: change the eyebrow from "Opening August 2026 in Oshawa" to
   "Now welcoming new patients" and update the subhead's "opening … this August" phrasing.
4. Fill JSON-LD TODOs in `index.html` (helps Google Business / local SEO).
5. If booking isn't live before opening, a commented-out email-capture form sits in
   the home hero ready to swap in.

## Design tokens

All colors/fonts/spacing live as CSS custom properties at the top of `css/styles.css`
(Peak Blue `#1E7FE0`, Summit Navy `#12314F`, Bone `#F5F2EB`, Charcoal `#2A2C2E`,
Glacier `#E3EDF7`, Ridge Gold `#C9A253`; Archivo Expanded display / Source Sans 3 body).
