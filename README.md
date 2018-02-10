# Blockchain Ethereum Solidity Samples

## Truffle

` npm install -g truffle `

## Ganache

Download, install and run - [link](http://truffleframework.com/ganache/)

## Clone the project

` git clone https://github.com/duxor/blockchain-ethereum-solidity-samples.git `

## Install dependency

` npm install `

## Run migration

` cd 1-example-dtweet `

` truffle migrate `

Add your contract address to ` ./1-example-dtweet/web/js/contract.config.js `

# Run and enjoy!
` ./node_modules/.bin/http-server ./ -p 8001 -c-1 & ./node_modules/.bin/http-server ./1-example-dtweet/web -p 8000 -c-1 -P http://127.0.0.1:8001 -o `

Yes, your browser must have metamask extension!
