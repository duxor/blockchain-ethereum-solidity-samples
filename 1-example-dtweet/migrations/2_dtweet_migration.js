let DTweet = artifacts.require("./DTweet.sol");

module.exports = function(deployer) {
  deployer.deploy(DTweet);
};
