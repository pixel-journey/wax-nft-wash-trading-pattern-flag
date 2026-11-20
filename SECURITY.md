# Security — two-trade reverse flag

## Closed in tests

| Issue | Behavior |
| --- | --- |
| Reverse parties, same asset, inside window | flagged |
| Outside window / same direction / equal `at` | not this pattern |
| Bad names / self-trade row | flagged false with reason (no throw) |

## Not closed (production)

| Concern | Guidance |
| --- | --- |
| Graph of many wallets | Not scanned |
| Ban from one flag | Forbidden |
| Live sales | Arguments only |

## Attack angles

1. Freezing accounts on a single reversed pair.  
2. Calling this "the" wash detector.  
3. Fetching market data inside `roundTrip`.

## Honesty limits

Soft teaching predicate. [docs.wax.io](https://docs.wax.io/) · [wash deduplicator](https://github.com/pixel-journey/wax-wash-trading-deduplicator).
