let Blockchain = {
    abi: [
        {
            "inputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "text",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "name": "creator",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "likes",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "TweetAdded",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "text",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "name": "creator",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "timestamp",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "likes",
                    "type": "uint256"
                }
            ],
            "name": "TweetLiked",
            "type": "event"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "text",
                    "type": "string"
                }
            ],
            "name": "addTweet",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_text",
                    "type": "string"
                },
                {
                    "name": "_timestamp",
                    "type": "uint256"
                }
            ],
            "name": "likeTweet",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_text",
                    "type": "string"
                },
                {
                    "name": "_timestamp",
                    "type": "uint256"
                }
            ],
            "name": "getTweet",
            "outputs": [
                {
                    "name": "text",
                    "type": "string"
                },
                {
                    "name": "creator",
                    "type": "address"
                },
                {
                    "name": "likes",
                    "type": "uint256"
                },
                {
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ],
    address: '0x345ca3e014aaf5dca488057592ee47305d9b3e10'
};
Blockchain.contract = web3.eth.contract(Blockchain.abi).at(Blockchain.address);