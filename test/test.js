const NFTMarketplaceContract = artifacts.require("NFTMarketplace");

contract("Staking of one nft", async () => {
  it("Should stake an nft", async function () {
    const NFTMPObject = await NFTMarketplaceContract.deployed();

    console.log('NFTMPObject------------>', NFTMPObject);
  });
});