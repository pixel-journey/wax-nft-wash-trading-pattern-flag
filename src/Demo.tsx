"use client";

import { roundTrip } from "./wash";

const left = { asset: "1", seller: "alice", buyer: "bob", at: 100 };
const right = { asset: "1", seller: "bob", buyer: "alice", at: 140 };

export function Demo() {
  const near = roundTrip(left, right, 60);
  const far = roundTrip(left, right, 30);
  return (
    <main className="wrap">
      <p className="kicker">Educational reference</p>
      <h1>A return trip inside a window</h1>
      <p className="lede">Same asset, parties reversed, 40 seconds apart. A 60 second window flags it. A 30 second window does not. This is not a market scan.</p>
      <p>
        60s: {near.reason}. 30s: {far.reason}.
      </p>
    </main>
  );
}
