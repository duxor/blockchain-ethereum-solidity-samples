window.addEventListener('load', function () {
    if (typeof web3 !== 'undefined') {
        web3js = new Web3(web3.currentProvider);
    } else {
        console.log('No web3? You should consider trying MetaMask!')
        web3js = new Web3(new Web3.providers.HttpProvider("http://localhost:9545"));
    }
    startApp();
});

const startApp = () => {
    web3.version.getNetwork((err, netId) => {
        switch (netId) {
            case "1":
                console.log('This is mainnet');
                break;
            case "2":
                console.log('This is the deprecated Morden test network.');
                break;
            case "3":
                console.log('This is the ropsten test network.');
                break;
            case "4":
                console.log('This is the Rinkeby test network.');
                break;
            case "42":
                console.log('This is the Kovan test network.');
                break;
            default:
                console.log('This is an unknown network.');
        }
    });
};
