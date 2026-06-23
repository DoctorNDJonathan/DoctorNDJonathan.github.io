/* =====================================================================
   data.js  ·  YOUR CONTENT LISTS
   ---------------------------------------------------------------------
   Every list on the site is an array of objects below. To ADD an item,
   copy one { ... } block, paste it, and change the text. To REMOVE one,
   delete its block. Keep the commas between blocks.

   Items marked  // EXAMPLE — replace  are placeholders for you to fill.
   ===================================================================== */

window.SITE_DATA = {

  /* ===== RESEARCH PAGE ============================================== */

  /* Selected publications. Fill these from your Google Scholar profile. */
  publications: [
    {
      year:  "2024",                                   // EXAMPLE — replace
      title: "Title of your published paper goes here", // EXAMPLE — replace
      venue: "Journal / Conference name",               // EXAMPLE — replace
      link:  ""   // optional URL (DOI or PDF). Leave "" to hide the link.
    },
    {
      year:  "2023",                                   // EXAMPLE — replace
      title: "Another publication title",               // EXAMPLE — replace
      venue: "Journal / Conference name",               // EXAMPLE — replace
      link:  ""
    }
  ],

  /* Working papers / research in progress (from your stated pipeline). */
  workingPapers: [
    { title: "Pricing in climate risks",            note: "Working paper" },
    { title: "Green cosmetics and their adoption",  note: "Working paper" },
    { title: "Setting up dark stores",              note: "Working paper" },
    { title: "Cloud data centre optimisation",      note: "Working paper" },
    { title: "Renewable energy analytics",          note: "Working paper" }
  ],

  /* ===== TEACHING / TRAINING PAGE ================================== */

  /* Courses you teach / coordinate. */
  courses: [
    { title: "Artificial Intelligence",   meta: "XIME Bangalore",  note: "Course coordinator" },
    { title: "Data Mining",               meta: "XIME Bangalore",  note: "Course coordinator" },
    { title: "IT Project Management",     meta: "XIME Bangalore",  note: "Course coordinator" },
    { title: "Decision Models",           meta: "Prior teaching",  note: "LP, queueing, game theory, simulation" },
    { title: "Business Law",              meta: "Prior teaching",  note: "" }
  ],

  /* Management Development Programmes & corporate training you deliver. */
  training: [
    { title: "Data Visualization (MDP)",   meta: "Delivered for ACMA",  note: "" },
    { title: "AI-Powered Marketing",       meta: "Management Dev. Prog.", note: "" },
    { title: "Case-Writing Workshop",      meta: "Management Dev. Prog.", note: "" },
    { title: "Lean Six Sigma (Green Belt)",meta: "with KPMG India",      note: "Training for MBA students" }
  ],

  /* Short testimonials. Replace with real quotes when you collect them. */
  testimonials: [
    {
      quote: "Add a short quote from a participant, student, or client here.", // EXAMPLE — replace
      author: "Name, Role / Organisation"                                       // EXAMPLE — replace
    }
  ],

  /* ===== PRODUCTS PAGE ============================================= */

  /* Things people can use, download, or buy. The first item is shown as
     a featured card (set "feature": true on any one item you want).    */
  products: [
    {
      feature: true,
      meta:  "Open-access · ISBN 978-93-5782-012-7",
      title: "Compendium of Analytics Practical Projects 2026",
      desc:  "Eight student research articles spanning credit risk, healthcare " +
             "logistics, IPO prediction, cloud optimisation, FMCG forecasting, " +
             "and ESG finance — edited and produced for XIME Bangalore, Batch 04.",
      linkLabel: "Read / download",
      link: "assets/docs/compendium.pdf"   // put the PDF in assets/docs/ with this name
    },
    {
      meta:  "Tool / dataset",                          // EXAMPLE — replace
      title: "Name of a tool, model, or dataset",        // EXAMPLE — replace
      desc:  "One or two lines describing what it does and who it is for.", // EXAMPLE
      linkLabel: "View on GitHub",
      link: ""                                           // e.g. a GitHub repo URL
    },
    {
      meta:  "Consulting / training",
      title: "Work with me",
      desc:  "Custom analytics, climate-risk, and AI training for teams and " +
             "institutions — workshops, MDPs, and applied consulting engagements.",
      linkLabel: "Enquire by email",
      link: "mailto:doctornikhildjonathan@gmail.com"     // matches your email above
    }
  ]
};
