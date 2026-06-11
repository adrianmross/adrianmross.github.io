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
pnpm install
pnpm run dev
```

Build the GitHub Pages artifact:

```sh
pnpm run build
```

The static output is written to `out/`.

## Remote Dev

This repo includes WorkTrunk and Portless hooks for `vmordws02`:

```sh
devenv shell
portless-worktree-dev start
portless-worktree-dev url
```
