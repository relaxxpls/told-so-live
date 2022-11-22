require('@nomicfoundation/hardhat-toolbox')

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	solidity: '0.8.17',

	networks: {
		mumbai: {
			chainId: 80001,
			url: 'https://matic-mumbai.chainstacklabs.com',
			accounts: [
				'c6a25afe4fcd31836ef93b226bf626a91bcb2ae549d432d4966406256914e60b',
			],
		},
	},
}
