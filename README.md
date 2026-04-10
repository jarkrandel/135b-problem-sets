# MAT 135B Problem Sets

This repository is set up for GitHub Pages hosting of the generated PreTeXt HTML for MAT 135B.

## Layout

- `psetX` folders contain the problem set HTML sites
- `psetX-solutions` folders contain the solutions HTML sites
- `index.html` is a simple landing page for the published site
- `sync-from-local.ps1` refreshes this repo from the local PreTeXt build outputs
- `release-from-staging.ps1` promotes one set from `135b-problem-sets-staging` into this live repo

## Releasing From Staging

To publish a problem set from staging into this repo:

```powershell
powershell -ExecutionPolicy Bypass -File .\release-from-staging.ps1 -SetNumber 2
```

To publish solutions from staging:

```powershell
powershell -ExecutionPolicy Bypass -File .\release-from-staging.ps1 -SetNumber 2 -Solutions
```

To publish and commit in one step:

```powershell
powershell -ExecutionPolicy Bypass -File .\release-from-staging.ps1 -SetNumber 2 -Commit
powershell -ExecutionPolicy Bypass -File .\release-from-staging.ps1 -SetNumber 2 -Solutions -Commit
```

This script only copies and optionally commits. You still push when you are ready:

```powershell
git push
```
