# Amar Balance Sheet

A personal balance sheet, rebuilt as an installable phone app — the same
structure as the original spreadsheet: **Credit**, **Debit**, the
**Justified / Unjustified** split, **category & group analysis**, the
**nutrition breakdown**, and the **Loans / Savings / Investment / Collectable**
panels.

It is a single self-contained web app. No account, no server, no internet
needed to use it — your data is saved **on your own device only**.

---

## Use it / install it

1. Open the GitHub Pages URL of this repo in **Chrome on your phone**
   (`https://YOUR-USERNAME.github.io/balance-sheet/`).
2. Tap the **⋮ menu → Add to Home screen → Install**.
3. The icon appears on your home screen. It opens full-screen like a normal
   app and works with no internet connection.

---

## Files in this repo

| File            | What it does                                              |
|-----------------|-----------------------------------------------------------|
| `index.html`    | The entire app — interface, logic, and fonts, all in one. |
| `manifest.json` | Tells the phone the app's name, icon, and colors.         |
| `sw.js`         | Service worker — lets the app open offline.               |
| `icon.svg`      | The home-screen icon.                                     |

All four must sit at the **root** of the repo (not inside a folder) for
GitHub Pages to serve the app correctly.

---

## Turning on GitHub Pages

Repo **Settings → Pages → Branch: `main` → Folder: `/ (root)` → Save**.
After a minute or two it shows *"Your site is live at …"*.

---

## Updating the app

Edit `index.html` directly on GitHub (open the file → pencil icon → paste the
new version → **Commit changes**), or re-upload via **Add file → Upload files**.
The live site refreshes within a minute; the installed app picks up the change
next time it's opened.

---

## Your data — important

- Everything you enter is stored in the browser on your device. It is **not**
  in this repo and **not** on GitHub.
- Clearing Chrome's site data would erase it.
- Use **Settings → Export Backup** inside the app now and then, and keep that
  file somewhere safe (e.g. email it to yourself). **Import Backup** restores
  it anytime.

---

## Each new month

In the app, tap the month name at the top → **New Month**. It copies your
category structure forward, so you only start logging — you never rebuild the
structure.
