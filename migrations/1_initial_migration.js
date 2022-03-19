const NFTMarketPlace = artifacts.require("NFTMarketPlace");

module.exports = async function (deployer) {

  console.log("================> Deploying smart contracts started");
  await deployer.deploy(NFTMarketPlace);
  const nftMarketPlace = await NFTMarketPlace.deployed();
  
  console.log("Deployed NFT MarketPlace addresss:", nftMarketPlace.address);
  console.log("================> Deploying smart contracts is finished");
};
