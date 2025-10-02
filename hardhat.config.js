require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    somnia: {
      url: "https://api.infra.mainnet.somnia.network", // ✅ Çalışan RPC
      chainId: 5031, // ✅ Doğru ChainID
      accounts: [process.env.PRIVATE_KEY],
    }
  }
};
