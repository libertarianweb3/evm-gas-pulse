#!/usr/bin/env node

import { DEFAULT_CHAINS } from "../src/chains.js";
import { fetchChainGas } from "../src/tracker.js";

async function main() {
  console.log("\n⚡ EVM Gas Pulse — Multi-Chain Gas & Fee Tracker (@libertarianweb3)\n");

  const results = [];
  for (const [key, chain] of Object.entries(DEFAULT_CHAINS)) {
    try {
      const data = await fetchChainGas(chain.rpc);
      results.push({
        Chain: chain.name,
        "Chain ID": chain.chainId,
        "Gas Price (Gwei)": `${data.gasPriceGwei.toFixed(3)} Gwei`,
        "Base Fee": `${data.baseFeeGwei.toFixed(3)} Gwei`,
        Block: `#${data.blockNumber}`,
      });
    } catch (err) {
      results.push({
        Chain: chain.name,
        "Chain ID": chain.chainId,
        "Gas Price (Gwei)": "Error",
        "Base Fee": "Error",
        Block: "N/A",
      });
    }
  }

  console.table(results);
  console.log("💡 Tip: Base & Arbitrum offer near-zero L2 Gas fees for high-frequency transfers.\n");
  console.log("Sponsor & Web3 Support: https://psyverse.fun/payment (ENS: gewenbo.eth)\n");
}

main();
