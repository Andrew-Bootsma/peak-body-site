/* ==========================================================================
   PEAK BODY PERFORMANCE — main.js
   ========================================================================== */

/* --------------------------------------------------------------------------
   SITE CONFIG — the one-line changes.
   Every "Book Now" button / booking link on the site carries data-book and
   is pointed at bookingUrl below. When the clinic migrates from ClinicSense
   to Jane, update this single line and the whole site follows.
   -------------------------------------------------------------------------- */
const SITE_CONFIG = {
  bookingUrl: "#TODO-REPLACE-WITH-CLINICSENSE-BOOKING-URL",
};

document.addEventListener("DOMContentLoaded", () => {
  /* Booking links */
  const bookLinks = document.querySelectorAll("[data-book]");
  bookLinks.forEach((a) => {
    a.href = SITE_CONFIG.bookingUrl;
    a.target = "_blank";
    a.rel = "noopener";
    if (!a.getAttribute("aria-label")) {
      a.setAttribute("aria-label", a.textContent.trim() + " (opens external booking site)");
    }
  });
  if (SITE_CONFIG.bookingUrl.startsWith("#TODO")) {
    console.warn(
      "[Peak Body] Booking URL not set yet — update SITE_CONFIG.bookingUrl in js/main.js"
    );
  }

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
