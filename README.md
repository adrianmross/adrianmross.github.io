# adrianmross.github.io

Personal portfolio for [adrianmross.github.io](https://adrianmross.github.io), rebuilt as a statically exported Next.js site based on Vercel's Portfolio Blog Starter Kit.

## Stack

- Next.js App Router with static export for GitHub Pages
- Tailwind CSS v4
- MDX posts through `next-mdx-remote`
- Shadcn-style local UI components
- Vercel Analytics and Speed Insights clients

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

Post drafts can be hidden from production by adding `draft: true` to an MDX file's frontmatter. In `next dev`, drafts appear only on `/blog` with a muted draft marker; the home page still shows published posts only.

## Remote Dev

This repo includes WorkTrunk and Portless hooks for `vmordws02`:

```sh
devenv shell
portless-worktree-dev start
portless-worktree-dev url
```
