/* ==========================================================================
   PEAK BODY PERFORMANCE — main.js
   ========================================================================== */

/* --------------------------------------------------------------------------
   SITE CONFIG — the one-line changes.
   We currently have three practitioners, each on their own booking platform
   (no centralized booking yet). Generic "Book Now" links (no specific
   practitioner in context) send people to the Our Team page so they can pick
   a practitioner and use that person's booking link. Any link tagged with
   data-book-url="..." goes straight to that practitioner's own booking page.
   When the clinic centralizes booking onto one platform, replace this whole
   block with a single bookingUrl and drop the per-practitioner overrides.
   -------------------------------------------------------------------------- */
const SITE_CONFIG = {
  practitioners: {
    bram: "https://bramvanbommelrmt.clinicsense.com/book/",
    janelle: "https://lotusmassagewellness.janeapp.com/",
    rhiannon: "https://burkittnaturopathic.janeapp.com/#/staff_member/1",
  },
  defaultBookingUrl: "team.html#our-team",
};

document.addEventListener("DOMContentLoaded", () => {
  /* Booking links */
  const bookLinks = document.querySelectorAll("[data-book]");
  bookLinks.forEach((a) => {
    const overrideUrl = a.getAttribute("data-book-url");
    if (overrideUrl) {
      a.href = overrideUrl;
      a.target = "_blank";
      a.rel = "noopener";
      if (!a.getAttribute("aria-label")) {
        a.setAttribute(
          "aria-label",
          a.textContent.trim() + " (opens external booking site)",
        );
      }
    } else {
      a.href = SITE_CONFIG.defaultBookingUrl;
      if (!a.getAttribute("aria-label")) {
        a.setAttribute(
          "aria-label",
          a.textContent.trim() + " (choose a practitioner to book)",
        );
      }
    }
  });

  /* Mobile nav toggle */
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  if (toggle && nav) {
    const closeNav = () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    };
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.addEventListener("click", (e) => {
      if (e.target.closest("a")) closeNav();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeNav();
    });
  }

  /* Footer year */
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
});
