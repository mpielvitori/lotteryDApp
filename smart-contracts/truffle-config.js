const HDWalletProvider = require('@truffle/hdwallet-provider');
const config = require('config');

module.exports = {
  compilers: {
    solc: {
      version: '^0.8.0',
    },
  },
  networks: {
    bsc: {
      provider: () => new HDWalletProvider(
        config.networks.bsc.account.mnemonic,
        config.networks.bscTestnet.endpoint,
      ),
      network_id: config.networks.bsc.id,
      skipDryRun: config.networks.bsc.skipDryRun === 'true',
    },
    bscTestnet: {
      provider: () => new HDWalletProvider(
        config.networks.bscTestnet.account.mnemonic,
        config.networks.bscTestnet.endpoint,
      ),
      network_id: config.networks.bscTestnet.id,
      skipDryRun: config.networks.bscTestnet.skipDryRun === 'true',
    },
  },
};
