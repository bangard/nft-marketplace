require('@nomiclabs/hardhat-waffle')

require('@nomiclabs/hardhat-ethers');
require("@nomiclabs/hardhat-etherscan");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners()

  for (const account of accounts) {
    console.log(account.address)
  }
})
require('dotenv').config()
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
const GOERLI_PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: 'goerli',
  networks: {
    hardhat: {
      chainId: 1337,
    },
    //  unused configuration commented out for now
    //  mumbai: {
    //    url: "https://rpc-mumbai.maticvigil.com",
    //    accounts: [process.env.privateKey]
    //  }

    ropsten: {
      url: 'https://ropsten.infura.io/v3/ff7cb60064664f47b7d9e96c844990ad',
      accounts: [
        '0xdb02321886af5c723eee76c0e59f6085a61ae6ada59e3564660b8f8f274c6910',
        '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80',
      ],
    },
    rinkeby: {
      url: 'https://rinkeby.infura.io/v3/ff7cb60064664f47b7d9e96c844990ad',
      accounts: [
        '0xdb02321886af5c723eee76c0e59f6085a61ae6ada59e3564660b8f8f274c6910',
      ],
    },
    goerli: {
      // url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      url: 'https://goerli.infura.io/v3/ff7cb60064664f47b7d9e96c844990ad',
      accounts: [
        GOERLI_PRIVATE_KEY
      ],
    },
  },
  solidity: {
    version: '0.8.4',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  }
}
