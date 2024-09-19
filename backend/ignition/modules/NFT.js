const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");



module.exports = buildModule("NFTModule", (m) => {

  const nft = m.contract("CoreNFT", ["https://github.com/alakazam985/nft-collection/tree/master/generated_metadata"]);

  return { nft };
});
