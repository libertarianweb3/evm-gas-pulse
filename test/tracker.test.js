import { describe, it } from "node:test";
import assert from "node:assert";
import { hexWeiToGwei } from "../src/tracker.js";

describe("Gas Price Converter", () => {
  it("converts 1 Gwei in hex wei to decimal gwei", () => {
    assert.strictEqual(hexWeiToGwei("0x3b9aca00"), 1); // 10^9 = 0x3b9aca00
  });

  it("handles 0x0 properly", () => {
    assert.strictEqual(hexWeiToGwei("0x0"), 0);
  });

  it("converts 25.5 Gwei accurately", () => {
    const wei = (BigInt(255) * 1000000000n) / 10n;
    assert.strictEqual(hexWeiToGwei("0x" + wei.toString(16)), 25.5);
  });
});
