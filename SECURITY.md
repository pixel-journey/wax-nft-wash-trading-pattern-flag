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
| Volume subtraction | Different product ([volume deduplicator](https://github.com/pixel-journey/wax-wash-trading-volume-deduplicator)) |

## Attack angles

1. Freezing accounts on a single reversed pair.  
2. Calling this "the" wash detector for the whole market.  
3. Fetching market data inside `roundTrip`.  
4. Treating equal timestamps as a reverse when tests require ordered `at`.  
5. Mixing with the 3600s multi-sale deduplicator without new tests.

## Honesty limits

Soft teaching predicate. Not a legal finding.

| Sibling | Distinction |
| --- | --- |
| [wash deduplicator](https://github.com/pixel-journey/wax-wash-trading-deduplicator) | Multi-sale, **3600s** window |
| [volume deduplicator](https://github.com/pixel-journey/wax-wash-trading-volume-deduplicator) | `2 * min(forward, back)`, no clock |

[docs.wax.io](https://docs.wax.io/).
