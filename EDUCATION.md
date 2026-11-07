# Education — one reversed pair, not a market scanner

> **Rung:** `npm test`. Two trades, one function. No sale table is read.  
> **The test is the rule.**

## What you should be able to do

| Level | After this file |
| --- | --- |
| Beginner | Flag alice→bob then bob→alice on asset `1`, 40 seconds apart, inside a 60 second window |
| Intermediate | See why 30 seconds, the same direction, and the same timestamp do not flag |
| Masterclass | Say why this is not wash-trading detection |

---

## Beginner — one scene

```ts
roundTrip(
  { asset: "1", seller: "alice", buyer: "bob", at: 100 },
  { asset: "1", seller: "bob", buyer: "alice", at: 140 },
  60,
)
// { flagged: true, reason: "same asset, reversed parties, inside the window" }
```

The same pair with window `30` is `flagged: false` because `|140 - 100|` is 40. A second trade that does not swap the parties is not a reverse. Equal timestamps are refused by `left.at !== right.at`, so a window of `0` never flags.

Bad account names, non-decimal asset ids, a window above 86400, and a trade where seller equals buyer return `flagged: false` with a reason. They do not throw. A false here means "not this pattern", not "clean market".

### Predict, then run

```bash
npm test
```

---

## Intermediate — two rows are not a graph

`roundTrip` looks at exactly two caller-supplied trades. It does not:

- walk a list
- require a price
- read AtomicMarket
- notice three wallets cycling one asset
- notice the same pair an hour later

AtomicMarket v2 listings are one asset. That does not make a two-trade reverse "the" wash detector. A bundle-era sale id is irrelevant here. This function never sees a sale id.

### Attack → test

| Attack | Naive code | This lab | Test |
| --- | --- | --- | --- |
| Return just outside the window | Flag anyway | 40 s vs 30 s window is false | `flags a return inside the window only` |
| Same direction twice | Call it a wash | not reversed | same test, `{ ...a, at: 110 }` |
| Same timestamp | Zero-second wash | `at` must differ | code path `left.at !== right.at` (not a separate assert) |

---

## Masterclass — do not ban from this flag

A reversed pair can be a genuine buyback. The flag is a teaching predicate. It is not evidence for freezing an account.

If you later scan history, keep the predicate pure and pass rows in. Do not hide a fetch inside `roundTrip`.

### What this course will not teach

- A marketplace wash score
- Prices, royalties, or collection fees
- A broadcast
