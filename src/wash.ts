/**
 * Two trades of one asset that swap the parties inside a window.
 * This is not a wash-trading detector for a market.
 */

const NAME = /^(?!.*\.\.)(?!\.)(?!.*\.$)[a-z1-5.]{1,12}$/;

export type Trade = { asset: string; seller: string; buyer: string; at: number };

export function roundTrip(left: Trade, right: Trade, windowSec: number): { flagged: boolean; reason: string } {
  if (!/^[0-9]{1,20}$/.test(left.asset) || left.asset !== right.asset) return { flagged: false, reason: "the asset ids differ or are not decimal" };
  for (const name of [left.seller, left.buyer, right.seller, right.buyer]) {
    if (!NAME.test(name)) return { flagged: false, reason: `${name} is not an account` };
  }
  if (!Number.isInteger(windowSec) || windowSec < 0 || windowSec > 86_400) return { flagged: false, reason: "windowSec must be an integer from 0 to 86400" };
  if (!Number.isInteger(left.at) || !Number.isInteger(right.at) || left.at < 0 || right.at < 0) return { flagged: false, reason: "times must be non-negative integers" };
  if (left.seller === left.buyer) return { flagged: false, reason: "seller and buyer are the same" };
  const reversed = left.seller === right.buyer && left.buyer === right.seller;
  const close = Math.abs(left.at - right.at) <= windowSec && left.at !== right.at;
  if (reversed && close) return { flagged: true, reason: "same asset, reversed parties, inside the window" };
  return { flagged: false, reason: "not a reversed pair inside the window" };
}
