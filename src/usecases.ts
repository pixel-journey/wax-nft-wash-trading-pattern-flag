import { ATOMIC_ORIGIN, HISTORY_ORIGIN, atomicSales, historyActions } from "./api";
import { roundTrip } from "./wash";
import type { ChainAction, HttpRequest } from "./api";

export type UseCase = {
  title: string;
  detail: string;
  request: HttpRequest;
  transaction: { note: string; actions: ChainAction[] } | null;
};

const left = { asset: "1", seller: "alice", buyer: "bob", at: 100 };
const right = { asset: "1", seller: "bob", buyer: "alice", at: 140 };
const near = roundTrip(left, right, 60);

export const USE_CASES: UseCase[] = [
  {
    title: "A sales list is not these two trades",
    detail: `${near.reason}. atomicmarket sales are not paired. The request is not sent.`,
    request: atomicSales(ATOMIC_ORIGIN, "alice"),
    transaction: null,
  },
  {
    title: "Transfer history is not a window",
    detail: "The same pair is not flagged at a 30 second window. No cancel action is built.",
    request: historyActions(HISTORY_ORIGIN, "alice", "atomicassets:transfer", 20),
    transaction: null,
  },
];

export function assertUseCases(): void {
  if (!near.flagged || roundTrip(left, right, 30).flagged) throw new Error("window");
}
