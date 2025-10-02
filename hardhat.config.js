require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    somnia: {
      url: "https://rpc.somnia.network",
      accounts: [process.env.PRIVATE_KEY],
    },
    somniaTestnet: {
      url: "https://rpc.testnet.somnia.network",
      accounts: [process.env.PRIVATE_KEY],
    }
  }
};