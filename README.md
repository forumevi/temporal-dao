# Temporal DAO

Self-destructing, time-bound DAOs on **Somnia**.  
Each DAO lives for a fixed duration (e.g., 24 hours), then automatically finalizes — no bureaucracy, no decay, just pure creative bursts.

> “Not all ideas deserve to live forever. Some are meant to burn bright and vanish.”

## 🌐 Deployed on Somnia Mainnet
`[Contract address will be added after deployment]`

You can verify activity via [Somnia Explorer](https://explorer.somnia.network).

## 🧠 Core Concept
- Anyone can create a DAO with a custom lifetime (in seconds).
- While active, participants can (in future versions) propose, vote, build.
- Once time expires, **anyone** can finalize the DAO — making it immutable.
- Finalized DAOs become historical artifacts: no further changes allowed.

This is **v1**: pure on-chain time logic. No frontend, no off-chain dependencies.

## 📦 Contract Details
- Solidity: `^0.8.20`
- License: MIT
- Entry point: `contracts/TemporalDAO.sol`
- Functions:
  - `createDAO(uint256 duration)`
  - `isActive(uint256 daoId) → bool`
  - `finalizeDAO(uint256 daoId)`

## 🤝 How to Contribute
1. Fork this repo
2. Open an issue or PR
3. Propose extensions: treasury, proposals, output archiving, etc.

## 🚀 Why Somnia?
- High throughput & low fees → ideal for frequent, lightweight DAO interactions.
- EVM-compatible → easy to deploy and integrate.

---

Built for builders who believe **time is the ultimate curator**.