# Sources

| Source | Use |
| --- | --- |
| [docs.wax.io](https://docs.wax.io/) | Marketplace context |
| [wash deduplicator](https://github.com/pixel-journey/wax-wash-trading-deduplicator) | Clock + kinds + JS prices |
| [volume deduplicator](https://github.com/pixel-journey/wax-wash-trading-volume-deduplicator) | Amount wash without clock |

## Product facts locked by tests

- Exactly **two** trades; same asset; reversed parties; `|at1-at2|` within window.
- Window `60`, gap `40` → flagged; window `30` → not.
- Equal timestamps never flag.
- No price field. No list walk. No market read.
- **Not** evidence for a ban.
