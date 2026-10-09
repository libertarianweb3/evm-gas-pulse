# ⚡ evm-gas-pulse

> Ultra-lightweight, zero-dependency multi-chain EVM Gas & BaseFee tracker CLI.

Real-time gas monitoring across Ethereum L1 and leading Layer 2s (Base, Arbitrum, Optimism, Polygon) to optimize transaction timing and minimize protocol execution fees.

---

## 🚀 Quick Start

Run directly without installation via `npx`:

```bash
npx evm-gas-pulse
```

Or install globally:

```bash
npm install -g evm-gas-pulse
evm-gas-pulse
```

### Output Example

```text
⚡ EVM Gas Pulse — Multi-Chain Gas & Fee Tracker (@libertarianweb3)

┌─────────┬────────────────────┬──────────┬──────────────────┬──────────────┬──────────────┐
│ (index) │ Chain              │ Chain ID │ Gas Price (Gwei) │ Base Fee     │ Block        │
├─────────┼────────────────────┼──────────┼──────────────────┼──────────────┼──────────────┤
│ 0       │ 'Ethereum Mainnet' │ 1        │ '8.450 Gwei'     │ '8.120 Gwei' │ '#21124501'  │
│ 1       │ 'Base'             │ 8453     │ '0.006 Gwei'     │ '0.005 Gwei' │ '#52362046'  │
│ 2       │ 'Arbitrum One'     │ 42161    │ '0.020 Gwei'     │ '0.020 Gwei' │ '#513068484' │
│ 3       │ 'Optimism Mainnet' │ 10       │ '0.001 Gwei'     │ '0.000 Gwei' │ '#157957331' │
└─────────┴────────────────────┴──────────┴──────────────────┴──────────────┴──────────────┘
💡 Tip: Base & Arbitrum offer near-zero L2 Gas fees for high-frequency transfers.
```

---

## 🛠️ Features

- **Zero External Dependencies**: Pure Node.js built with native `fetch` and standard JSON-RPC.
- **L1 & L2 Native**: Compares base fee and priority fee across major rollups.
- **CI/CD Ready**: Easy to pipe into automated arbitrage scripts and threshold bots.

---

## 🤝 Sponsorship & Sovereign Support

If this tool saved you gas fees, consider supporting independent open-source development:

- 🌐 **Sovereign Payment Portal**: [https://psyverse.fun/payment](https://psyverse.fun/payment)
- ⚡ **EVM Multi-Chain (USDT / USDC / ETH)**: `0x240C74A953Fc04Fe8cD713c68b53e94d9b449F8C`
- 🏷️ **ENS Identity**: `gewenbo.eth`

---

## 📜 License

MIT © [libertarianweb3](https://github.com/libertarianweb3)
