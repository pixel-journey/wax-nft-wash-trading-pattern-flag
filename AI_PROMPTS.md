# AI handoff — NFT wash trading pattern flag

## Non-negotiables

1. Exactly **two** trades; same asset; reversed parties; `|at1-at2|` within window.
2. Window `60`, gap `40` → flagged; window `30` → not.
3. Equal timestamps **never** flag.
4. No price field. No list walk. No market read.
5. **Not** evidence for a ban. Teaching heuristic only.
6. Related: volume deduplicator / wash deduplicator — different products.

## Prompt seeds

- "Two trades reverse parties gap 40 window 60 — flag?"
- "Equal timestamps — flag?"
- "Refuse treating a flag as proof for account suspension."

## Do not

- Scan a live market from this pure lab.
- Claim legal/compliance findings.
- Invent a price filter this lab does not have.
