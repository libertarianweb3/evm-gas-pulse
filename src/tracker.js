/**
 * Format hex wei string to Gwei decimal string.
 * @param {string} hexWei
 * @returns {number}
 */
export function hexWeiToGwei(hexWei) {
  if (!hexWei || hexWei === "0x") return 0;
  const weiBig = BigInt(hexWei);
  // 1 Gwei = 10^9 Wei = 1,000,000,000 Wei
  const gweiX1000 = (weiBig * 1000n) / 1000000000n;
  return Number(gweiX1000) / 1000;
}

/**
 * Fetch Gas & BaseFee from standard JSON-RPC.
 * @param {string} rpcUrl
 * @returns {Promise<{ gasPriceGwei: number, baseFeeGwei: number, blockNumber: number }>}
 */
export async function fetchChainGas(rpcUrl) {
  const payload = [
    { jsonrpc: "2.0", id: 1, method: "eth_gasPrice", params: [] },
    { jsonrpc: "2.0", id: 2, method: "eth_getBlockByNumber", params: ["latest", false] },
  ];

  const response = await fetch(rpcUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`RPC request failed: ${response.status} ${response.statusText}`);
  }

  const results = await response.json();
  const gasPriceHex = results.find((r) => r.id === 1)?.result || "0x0";
  const block = results.find((r) => r.id === 2)?.result;

  const baseFeeHex = block?.baseFeePerGas || "0x0";
  const blockNumber = block?.number ? parseInt(block.number, 16) : 0;

  return {
    gasPriceGwei: hexWeiToGwei(gasPriceHex),
    baseFeeGwei: hexWeiToGwei(baseFeeHex),
    blockNumber,
  };
}
