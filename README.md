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
└── images/
    ├── PeakBody.png              Full lockup + tagline (large/standalone placements)
    └── PeakBody-no-tagline.png   Mark + wordmark, no tagline (site header)
```

Both PeakBody PNGs are exported straight from the designer's master file (transparent,
1800px wide — plenty of headroom for retina/@3x screens). An earlier pass tried
recreating them as "recolorable SVGs" (a raster image piped through an SVG
`<mask>`/`feColorMatrix` filter to fake vector scaling), but iOS Safari rasterizes
SVG masks/filters at a fixed low resolution regardless of device pixel ratio — it
looked fine on desktop but blurred badly on iPhone. Stick with flat PNGs for this
logo unless a true path-based vector (from the designer's source file, e.g. AI/EPS/Figma)
becomes available.

## Booking links (three practitioners, three platforms — for now)

Every booking button/link carries `data-book`. `js/main.js` handles two cases:

- Generic buttons (nav "Book Now", footer "Book online", homepage CTAs) have no
  practitioner in context, so they route to `team.html#our-team` where the
  visitor picks a practitioner and clicks that person's own booking link.
- Practitioner-specific buttons (team.html cards, services.html "Book with
  Dr. Burkitt") add `data-book-url="…"` pointing straight at that
  practitioner's booking platform (ClinicSense for Bram, Jane App for Janelle
  and Dr. Burkitt).

`SITE_CONFIG.practitioners` in `js/main.js` is a reference list of the three
current URLs. When the clinic centralizes booking onto one platform, replace
this whole scheme with a single `SITE_CONFIG.bookingUrl` and drop the
`data-book-url` overrides.

## Placeholder system

Anything wrapped in `<span class="todo">…</span>` is pending real information and
renders with a gold dashed underline so nothing ships by accident. Find them all with
a project-wide search for `class="todo"`. Remaining TODOs (address, phone, hours,
rates, careers email, and the Maps embed are done):

- [ ] Headshots for Bram, Janelle, and Dr. Burkitt (team.html — placeholder boxes are
      commented out until real photos arrive; search `HEADSHOT PENDING`)
- [ ] Contact form endpoint (contact.html — wire to Formspree/Netlify Forms/backend,
      or hide the form; right now submitting does nothing)
- [ ] Founder photo slot on about.html (still shows a grey `.img-placeholder` box)
- [ ] Weekend hours ("Coming soon" in footer/contact once confirmed)

## Temporarily hidden before launch

- **Registered Psychotherapy** — commented out on index.html (services card) and
  services.html (full section); it's listed under "Coming Soon" / "Growing with
  you" instead. Search `TEMPORARILY HIDDEN` for restore instructions. Note the
  section backgrounds on services.html were re-alternated (naturopathic → bone,
  Growing with you → white); flip them back when psychotherapy returns.
- **Team headshot placeholders** — the grey avatar boxes on team.html are
  commented out (search `HEADSHOT PENDING`) so cards ship text-only until real
  photos arrive.

## Image slots

Two Pexels photos (free commercial license, no attribution) are hotlinked as
placeholders — download and self-host before launch:

- Hero background: Pexels photo 841131 (athlete/barbell)
- Approach section: Pexels photo 4506109 (practitioner assessment)

All other slots are styled `.img-placeholder` blocks labeled with the intended
subject and the matching Pexels search from proposal §5. Drop in an `<img class="photo">`
to replace any of them.

## Launch-day switches

1. Booking URLs for all three practitioners are already live in `js/main.js` and
   `team.html`. Add a fourth practitioner? Give their button `data-book-url="…"`
   and add them to `SITE_CONFIG.practitioners` for reference.
2. Change the ribbon text (all pages) from "Opening August 2026…" to whatever suits
   opening week — or delete the `<div class="ribbon">` entirely.
3. Home hero: change the eyebrow from "Opening August 2026 in Oshawa" to
   "Now welcoming new patients" and update the subhead's "opening … this August" phrasing.
4. Fill JSON-LD TODOs in `index.html` (helps Google Business / local SEO).
5. If booking isn't live before opening, a commented-out email-capture form sits in
   the home hero ready to swap in.

## Design tokens

All colors/fonts/spacing live as CSS custom properties at the top of `css/styles.css`.
The palette was re-tuned in July 2026 to match the updated logo (icon blue `#386FCB`,
wordmark near-navy `#06091A`): Peak Blue `#386FCB`, Peak Blue Dark `#2A55A3`,
Summit Navy `#152A52`, Navy Deep `#0B1734`, Bone `#F5F2EB`, Charcoal `#2A2C2E`,
Glacier `#E4EAF8`, Ridge Gold `#C9A253` (legacy accent — the new logo has no gold;
kept as the warm secondary for the ribbon, focus rings, and nav underline).
Archivo Expanded display / Source Sans 3 body.
