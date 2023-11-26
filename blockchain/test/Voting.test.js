const { expect } = require("chai");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");

describe("Voting Contract", () => {
  async function deployContract() {
    const [owner, C1, C2, C3, V1, V2, V3, V4] = await ethers.getSigners();
    const Voting = await ethers.getContractFactory("Voting");
    const votingContract = await Voting.deploy();

    return { owner, votingContract, C1, C2, C3, V1, V2, V3, V4 };
  }
});
