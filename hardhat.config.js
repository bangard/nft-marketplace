require('@nomiclabs/hardhat-waffle')

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners()

  for (const account of accounts) {
    console.log(account.address)
  }
})

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: 'ropsten',
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
}
