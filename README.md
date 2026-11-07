# A reversed pair inside a window

**Trust label:** `educational-reference`  
**Catalog:** [wax-ecosystem-blueprint-catalog](https://github.com/pixel-journey/wax-ecosystem-blueprint-catalog)

Same asset, parties swapped, 40 seconds apart. Flagged at 60 seconds, not at 30. Not a market scan.

The course is [EDUCATION.md](EDUCATION.md).

## What is true (executed)

| Rule | Result |
| --- | --- |
| alice→bob at 100, bob→alice at 140, window 60 | flagged |
| same pair, window 30 | not flagged (`|Δt|` is 40) |
| same direction | not flagged |
| seller equals buyer, bad names, non-decimal asset, window above 86400 | `flagged: false` with a reason, no throw |

Equal timestamps never flag (`left.at !== right.at`). A false flag means "not this pattern", not "the market is clean".

## What is actually in the repo

| Piece | Role |
| --- | --- |
| `src/wash.ts` | `roundTrip` on exactly two trades |
| `src/wash.test.ts` | the window and the same-direction case |
| `src/usecases.ts` | HTTP requests, built and not sent |
| `src/Demo.tsx` | Offline page |

```bash
npm test
npm run dev
```

**Do not** ban an account from this predicate. **Do not** describe it as an AtomicMarket scan.

MIT — Pixel Journey
