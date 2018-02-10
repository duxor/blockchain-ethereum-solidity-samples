UI.address.innerHTML = Blockchain.address;
web3.eth.getBlockNumber((error, latestBlock) => {
    UI.currentBlock.innerHTML = latestBlock || 0;
});