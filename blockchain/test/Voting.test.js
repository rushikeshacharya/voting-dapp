const { expect } = require("chai");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");

describe("Voting Contract", () => {
  async function deployContract() {
    const [owner, C1, C2, C3, V1, V2, V3, V4] = await ethers.getSigners();
    const Voting = await ethers.getContractFactory("Voting");
    const votingContract = await Voting.deploy();

    return { owner, votingContract, C1, C2, C3, V1, V2, V3, V4 };
  }
  async function createElection(votingContract) {
    let tx = await votingContract.initiatedNewVoting(1, "Test voting 1");
    let election = await tx.wait();
    let votingId = await election.events[0].args.votingId.toNumber();
    return votingId;
  }

  async function addCandidatesAndVoters(
    votingContract,
    C1,
    C2,
    C3,
    V1,
    V2,
    V3
  ) {
    let votingId = await createElection(votingContract);

    await votingContract.enableVoting(votingId);

    await votingContract.registerCandidate(
      "C1",
      "c1@gmail.com",
      C1.address,
      votingId
    );
    await votingContract.registerCandidate(
      "C2",
      "c2@gmail.com",
      C2.address,
      votingId
    );
    await votingContract.registerCandidate(
      "C3",
      "c3@gmail.com",
      C3.address,
      votingId
    );

    await votingContract.requestVotingToken(
      "c1@gmail.com",
      C1.address,
      votingId
    );
    await votingContract.requestVotingToken(
      "c2@gmail.com",
      C2.address,
      votingId
    );
    await votingContract.requestVotingToken(
      "c3@gmail.com",
      C3.address,
      votingId
    );
    await votingContract.requestVotingToken(
      "v1@gmail.com",
      V1.address,
      votingId
    );
    await votingContract.requestVotingToken(
      "v2@gmail.com",
      V2.address,
      votingId
    );
    await votingContract.requestVotingToken(
      "v3@gmail.com",
      V3.address,
      votingId
    );
    return votingId;
  }
  it('should create new voting ', async () => {
    const {owner, votingContract} = await loadFixture(deployContract);
    let votingId = createElection(votingContract);
    expect(
        await votingContract.initiatedNewVoting(votingId,'Test voting 1')
    ).to.emit(votingContract, "NewElectionCreate");
});

it('should should throw error on candidate register',async () => {
    const {owner, votingContract, C1} = await loadFixture(deployContract);
    let votingId = createElection(votingContract);
    await expect(
        votingContract.registerCandidate('C1', 'c1@gmail.com',ethers.constants.AddressZero, votingId)
    ).to.revertedWith('address zero is not allowed');
    expect(
        await votingContract.registerCandidate('C1', 'c1@gmail.com',C1.address, votingId)
    ).to.emit(votingContract, "NewCandidateRegistered");
});

it('should activate the voting',async () => {
    const { owner, votingContract } = await loadFixture(deployContract);
    let votingId = createElection(votingContract);
    expect(await votingContract.enableVoting(votingId)).to.emit(votingContract,"VotingEnabled");
});

it('should disable the voting',async () => {
    const { owner, votingContract } = await loadFixture(deployContract);
    let votingId = createElection(votingContract);
    expect(await votingContract.disableVoting(votingId)).to.emit(votingContract,"VotingDisabled");
});
});
