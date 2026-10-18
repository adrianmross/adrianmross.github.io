# adrianmross.github.io

Personal portfolio for [adrianmross.github.io](https://adrianmross.github.io), rebuilt as a statically exported Next.js site based on Vercel's Portfolio Blog Starter Kit.

## Stack

- Next.js App Router with static export for GitHub Pages
- Tailwind CSS v4
- MDX posts through `next-mdx-remote`
- shadcn/ui (`components.json`; add components with `pnpm dlx shadcn@latest add <name>`)
- ESLint (`eslint-config-next`), TypeScript, devenv + direnv toolchain (Node 24, pnpm)

## Micro-Interactions

Reusable text effects live in `app/styles/micro-interactions.css` with `mi-*` class names. See
`docs/micro-interactions.md` for the local library notes and extraction path.

## Local Development

```sh
direnv allow
pnpm install
pnpm run dev
```

Without direnv, enter the same pinned toolchain manually:

```sh
devenv shell
```

Build the GitHub Pages artifact:

```sh
pnpm run build
```

The static output is written to `out/`.

The home page GitHub activity preview is fetched at build time from GitHub's GraphQL API when `GITHUB_CONTRIBUTIONS_TOKEN`, `GITHUB_TOKEN`, or `GH_TOKEN` is available. Without a token, the build falls back to a deterministic decorative pattern.

Drafts live in `content/drafts/` instead of `content/posts/` and are gitignored, so they never get committed or built into production. In `next dev`, drafts appear only on `/blog` with a muted draft marker; the home page still shows published posts only. Promote a draft by moving its `.mdx` file into `content/posts/`.

## Portless

`wt dev` (or `pnpm run dev:portless`) serves the site at `https://<worktree>.adrianmross-github-io.localhost` through [portless](https://github.com/vercel-labs/portless), so each worktree gets its own origin. The name lives in `portless.json`.
