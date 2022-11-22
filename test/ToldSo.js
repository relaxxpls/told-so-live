const {
	time,
	loadFixture,
} = require('@nomicfoundation/hardhat-network-helpers')
const { anyValue } = require('@nomicfoundation/hardhat-chai-matchers/withArgs')
const { expect } = require('chai')

describe('ToldSo', function () {
	// ? We define a fixture to reuse the same setup in every test.
	// ? We use loadFixture to run this setup once, snapshot that state,
	// ? and reset Hardhat Network to that snapshot in every test.

	async function deployFixture() {
		const [owner] = await ethers.getSigners()
		const ToldSo = await ethers.getContractFactory('ToldSo')
		const toldSo = await ToldSo.deploy()
		await toldSo.deployed()
		return { owner, toldSo }
	}

	describe('Create and read posts', function () {
		it('Should allow Alice to create a post', async function () {
			const { toldSo } = await loadFixture(deployFixture)
			const title = 'Hello World'
			const body = 'This is my first post'
			const [owner, alice, bob] = await ethers.getSigners()

			await toldSo.connect(alice).createPost(title, body)
			const posts = await toldSo.getPostsByAuthor(alice.address)

			expect(posts[0].body).to.equal(body)
			expect(posts[0].title).to.equal(title)
		})
	})
})
