# A & V

A single page that counts the time since our wedding and since each of our children was born.

Built with Next.js (App Router), React 19 and plain CSS modules. No runtime dependencies beyond React and Next.

## Scripts

```sh
pnpm install
pnpm dev        # http://localhost:3000
pnpm build
pnpm start
pnpm lint
pnpm typecheck
```

## Dates

All dates live in `lib/milestones.ts` as local wall-clock times (no timezone offset), so the counters read the same in the viewer's own timezone.
