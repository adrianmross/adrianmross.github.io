# Micro-Interactions

The site keeps text micro-interactions in `app/styles/micro-interactions.css` instead of `app/global.css`.
The current convention is a small CSS-first API with `mi-*` classes that can be applied to regular text,
links, or structured spans.

Keep effects:

- text-local and reusable
- theme-aware for light and dark mode
- respectful of `prefers-reduced-motion`
- readable without hover or JavaScript

Most effects should stay CSS-only. Use a small component only when the interaction needs runtime state,
such as draggable scattered text.

If this grows beyond a handful of site-specific effects, extract it as a separate CSS package first:

```ts
import '@adrianmross/micro-interactions/styles.css'
```

React helpers can follow later for effects that need structured markup.
