# Rocket Damage Web

Public SvelteKit site for Clash Royale rocket mirror damage.

The site reads `src/lib/data/rocket-damage.json`. A GitHub Actions workflow clones the private data repository, regenerates that JSON, and commits it back when the data changes.

## Required GitHub secret

Add this secret to the public repository:

- `DATA_REPO_SSH_KEY`: private key for a read-only deploy key registered on `clagon/fetch-cr-data`.

The workflow uses the repository `GITHUB_TOKEN` to push JSON changes back to this public repository.

## Cloudflare Workers

```bash
npm ci
npm run build
npx wrangler deploy
```
