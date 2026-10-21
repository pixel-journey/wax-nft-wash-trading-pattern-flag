import { describe, expect, it } from "vitest";
import { roundTrip } from "./wash";

const a = { asset: "1", seller: "alice", buyer: "bob", at: 100 };
const back = { asset: "1", seller: "bob", buyer: "alice", at: 140 };

describe("reversed pair", () => {
  it("flags a return inside the window only", () => {
    expect(roundTrip(a, back, 60).flagged).toBe(true);
    expect(roundTrip(a, back, 30).flagged).toBe(false);
    expect(roundTrip(a, { ...a, at: 110 }, 60).flagged).toBe(false);
  });
});
