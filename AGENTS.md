# AGENTS.md

Instructions for coding agents working in this repository.

## Git branches

Name working branches `work/<topic>`.

Do not use `claude/*`. When a harness or remote session assigns a `claude/*`
branch, rename it before the first push and push the renamed branch instead:

```bash
git branch -m claude/<assigned> work/<topic>
git push -u origin work/<topic>
```

## Commits

Author commits as `Adrian Ross <github.hwqfj@passfwd.com>` — the identity linked
to this repository's GitHub account.

## Dependencies

This project uses pnpm (see `packageManager` in `package.json`). CI installs
with `--frozen-lockfile`, so commit `pnpm-lock.yaml` alongside any dependency
change.
