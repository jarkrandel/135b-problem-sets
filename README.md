# MAT 135B Problem Sets

This repository is set up for GitHub Pages hosting of the generated PreTeXt HTML for MAT 135B.

## Layout

- `pset1/` through `pset5/` contain the problem set HTML sites
- `pset1-solutions/` through `pset5-solutions/` contain the solutions HTML sites
- `index.html` is a simple landing page for the published site
- `sync-from-local.ps1` refreshes this repo from the local PreTeXt build outputs

## Local Update Workflow

From `C:\Users\jarkr\Teaching files\135B\135b-problem-sets`:

```powershell
powershell -ExecutionPolicy Bypass -File .\sync-from-local.ps1
```

Then commit and push:

```powershell
git add .
git commit -m "Update published problem sets"
git push
```

## GitHub Pages

After pushing to GitHub:

1. Open the repository on GitHub.
2. Go to `Settings` -> `Pages`.
3. Set the source to `Deploy from a branch`.
4. Choose branch `main` and folder `/ (root)`.

Your Pages URLs will then look like:

- `https://YOUR-USERNAME.github.io/REPO-NAME/pset1/probset-1-135b.html`
- `https://YOUR-USERNAME.github.io/REPO-NAME/pset1-solutions/probset-1-solutions-135b.html`
