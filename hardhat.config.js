require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url: `${process.env.eth-mainnet.g.alchemy.com/v2/W_pZCFfTneAG18IssK-bIU1cTru5_kVt}`,
      accounts: [`0x${process.env.ae42765295b45c3185f8cf98919c2a4f9544c4e029db97f84ddeb6475c751fdd}`],
    }
  }
};