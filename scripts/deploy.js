const { ethers } = require('hardhat')

async function main() {
	const ToldSo = await ethers.getContractFactory('ToldSo')
	const toldSo = await ToldSo.deploy()
	await toldSo.deployed()

	console.log(`ToldSo deployed to ${toldSo.address}`)
}

main().catch(error => {
	console.error(error)
	process.exitCode = 1
})
