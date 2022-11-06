require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");


module.exports = {
  solidity: "0.8.9",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_URL,
      accounts: [process.env.SEPOLIA_KEY]
    },
    goerli: {
      url: process.env.ALCHEMY_GOERLI_URL,
      accounts: [process.env.GOERLI_PRIVATE_KEY]
    },
    localGanache: {
      url: process.env.GANACHE_URL,
      accounts: [process.env.GANACHE_KEY]
    }   
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_KEY
  }
};