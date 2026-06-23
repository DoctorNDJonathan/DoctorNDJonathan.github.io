# Nikhil D Jonathan — Personal Brand Site

A fast, free, no-build static website. No frameworks, no install step —
just HTML, CSS, and a little JavaScript. It runs anywhere, including free
hosting on **GitHub Pages**.

---

## 1. What's in the box

```
nikhil-site/
├── index.html       ← Home / landing page
├── research.html    ← Research subpage
├── teaching.html    ← Teaching & Training subpage
├── products.html    ← Products subpage
├── config.js        ← ★ EDIT ME: your name, bio, photo, and all links
├── data.js          ← ★ EDIT ME: your publications, courses, products, etc.
├── site.js          ← engine (builds nav/footer, renders lists) — rarely touched
├── styles.css       ← design system (colours/fonts at the very top)
└── assets/
    ├── img/         ← your profile photo goes here
    └── docs/        ← downloadable files (e.g. the compendium PDF)
```

**The golden rule:** 90% of edits happen in just two files — `config.js`
and `data.js`. You change text between quote marks; the pages update
themselves.

---

## 2. How to edit (no coding needed)

- **Change your name, bio, tagline, or links** → open `config.js`,
  edit the text in quotes. Replace every `<<< REPLACE >>>` (your YouTube
  and GitHub URLs).
- **Add your photo** → drop a square image into `assets/img/` (e.g.
  `profile.jpg`), then set `photo: "assets/img/profile.jpg"` in `config.js`.
- **Add a publication / course / product** → open `data.js`, copy one
  `{ ... }` block in the right list, paste it, and edit the text. Delete a
  block to remove an item. Keep the commas between blocks.
- **Change colours or fonts** → open `styles.css`; everything is in the
  `THEME TOKENS` block at the very top.
- **Edit page wording** (intros, the "Work with me" box) → open the
  relevant `.html` file and look for comments marked `EDIT`.

**Preview locally:** double-click `index.html` to open it in your browser.
(Embeds and Google Fonts need an internet connection to display.)

---

## 3. Publish for free on GitHub Pages

1. Create a free account at https://github.com (you may already have one).
2. Create a new repository named exactly:  `YOUR_USERNAME.github.io`
   (use your real GitHub username). Keep it **Public**.
3. Upload all the files in this folder:
   - On the new repo page, click **"uploading an existing file"**, then
     drag in everything inside `nikhil-site/` (the files, not the folder
     itself, so `index.html` sits at the top level). Commit.
4. Go to **Settings → Pages**. Under "Build and deployment", set
   **Source = Deploy from a branch**, **Branch = main**, **Folder = /(root)**.
   Save.
5. Wait ~1 minute. Your site is live at:
   `https://YOUR_USERNAME.github.io`

To update later: edit a file on GitHub (pencil icon) or re-upload it, then
commit. The site rebuilds automatically.

---

## 4. Optional: a custom domain (low cost)

1. Buy a domain (~₹800–1,200 / US$10–15 a year) from any registrar.
2. In your repo: **Settings → Pages → Custom domain**, enter the domain, save.
3. At your registrar, add the DNS records GitHub shows you.
4. Tick **"Enforce HTTPS"** once it appears. GitHub issues the certificate free.

---

## 5. Good to know

- **Reliability:** GitHub Pages serves over a global CDN with free HTTPS.
- **Keep videos on YouTube**, embedded — don't upload large video files to
  the repo (GitHub Pages has a soft ~1 GB repo / ~100 GB-per-month limit).
- **Load order in the HTML matters:** `config.js` and `data.js` load before
  `site.js`. If you rename files, keep that order.
