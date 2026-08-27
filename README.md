# &go&co website

Built with [Eleventy](https://www.11ty.dev/) (a static site generator) and
[Decap CMS](https://decapcms.org/) (a free, git-based editor for the Journal).
The homepage, Approach, and Contact pages are edited in code; Journal entries
are edited by the founders through a simple web editor at `/admin/` once this
is live — no code required for that part.

## What's in here

```
src/
  index.njk           Homepage
  approach.njk        Approach page
  contact.njk         Contact page
  journal.njk         Journal index (lists all posts automatically)
  journal-posts/       Each Journal entry as a markdown file
  admin/              Decap CMS admin panel (the founders' Journal editor)
  _includes/          Shared layout (nav/footer) + the Journal post template
  assets/             CSS, logo, team photos
.eleventy.js          Build configuration
netlify.toml          Tells Netlify how to build and deploy this
```

The first real Journal entry — "Be YOU (why we started &go&co)," by Tom — is
already in `src/journal-posts/`. The two placeholder sample posts from the
earlier scaffold have been removed.

## Local preview

```
npm install
npm run dev
```

Opens a local preview at `http://localhost:8080` that rebuilds as you edit.
`npm run build` produces the final site in `_site/`.

## Go-live checklist

1. **Push this folder to a new GitHub repository.** (Create an empty repo on
   GitHub, then `git init`, `git add .`, `git commit`, and push this folder
   to it.) Decap CMS and Netlify both read from and write to this repo.

2. **Create a Netlify account and "Add a new site" from that GitHub repo.**
   Netlify will detect `netlify.toml` automatically — build command and
   output folder are already set, so you can accept the defaults.

3. **Turn on Netlify Identity and Git Gateway** (Site settings → Identity →
   Enable Identity, then Services → Git Gateway → Enable). This is what lets
   the founders log into `/admin/` without you managing separate passwords or
   API keys.

4. **Invite Tom, Dan, and Jordan as Identity users** (Site settings →
   Identity → Invite users). Each gets an email invite; once accepted, they
   can go to `yoursite.netlify.app/admin/`, log in, and publish Journal
   entries directly.

5. **Point your existing Google Workspace domain at Netlify.** The domain
   itself doesn't move — in Netlify, go to Domain settings → Add a custom
   domain, then update your domain's DNS records (Netlify will show you
   exactly which ones to add) wherever your domain's DNS is currently
   managed. Netlify issues a free SSL certificate automatically once the DNS
   change propagates.

6. **Double-check `src/sitemap.njk`** — it currently assumes the domain is
   `andgoandco.com`. Update the URL if the real domain is different.

That's the whole path from this folder to a live site with working founder
publishing, and the first Journal post already in place — no other services
or paid tools required.

## Notes on the first post

"Be YOU (why we started &go&co)" is credited to Tom Waller and dated the day
it was handed over (2026-08-26) — change either in `/admin/` or by editing
`src/journal-posts/be-you-why-we-started-goco.md` directly if that's not
right. A handful of obvious typos in the original text (duplicated words, a
couple of misused homophones) were corrected; everything else is verbatim.
One sentence — "No doubt there are many great products and experiences out
there where this sensorial recognition is true" — reads a little tangled in
the original and was left as-is rather than guessed at; worth a read-through
before publishing.
