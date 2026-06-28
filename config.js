/* =====================================================================
   config.js  ·  YOUR SINGLE SOURCE OF TRUTH
   ---------------------------------------------------------------------
   Edit the values below and every page updates automatically.
   This is the file you'll touch most often. Nothing here is code you
   need to understand — just change the text between the quote marks.

   ⚠️  Replace anything marked  <<< REPLACE >>>  with your real value.
   ===================================================================== */

window.SITE_CONFIG = {

  /* --- Who you are (shown in the hero on the home page) ------------- */
  name:    "Nikhil D Jonathan",
  role:    "Educator & Researcher · XIME Bangalore",
  tagline: "Exploring the frontiers of AI, Analytics & Climate Risk.",
  bio:     "Impact Research Working at the intersection of climate risk, " +
           "artificial intelligence, and finance — turning analytics into pragmatic " +
           "decisions for business.",

  /* --- Profile photo ------------------------------------------------
     Drop your photo into  assets/img/  and put its filename here.
     A placeholder is provided until you do.                            */
  photo: "profile.jpeg"   // e.g. "assets/img/profile.jpg"

  /* --- All your links live here -------------------------------------
     Used by the nav, footer, hero buttons, and Research page.
     Leave a value as "" (empty) to hide that link automatically.       */
  links: {
    scholar:  "https://scholar.google.com/citations?user=9s0PzFMAAAAJ&hl=en", // verify this is the right profile
    youtube:  "https://www.youtube.com/@DoctorNikhilDJonathan",   // <<< REPLACE with your channel URL
    github:   "https://github.com/DoctorNDJonathan",        // <<< REPLACE with your GitHub URL
    linkedin: "https://www.linkedin.com/in/nikhil-d-jonathan/",
    email:    "doctornikhildjonathan@gmail.com",
    /* Compendium DOI from Zenodo (once you publish it there). Leave ""  */
    doi:      ""                                          // e.g. "https://doi.org/10.5281/zenodo.XXXXXXX"
  },

  /* --- The three call-to-action buttons in the hero -----------------
     "key" points at one of the links above. Reorder or relabel freely. */
  ctas: [
    { label: "Cite my research",     key: "scholar", style: "primary" },
    { label: "Subscribe on YouTube", key: "youtube", style: "ghost"   },
    { label: "Follow on GitHub",     key: "github",  style: "ghost"   }
  ],

  /* --- Focus areas shown as pills on the home page ------------------ */
  focusAreas: [
    "Climate-risk pricing",
    "ESG & sustainability finance",
    "Credit-risk analytics",
    "Energy & data-centre analytics"
  ]
};
