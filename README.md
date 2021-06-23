# twin-leaks
A Decentralized Finance family tree and fork detector

Progress so far : 

1. Setup a NodeJS API Project. This repo is supposed to be used as the backend of twin-leaks.
2. 

June 22, 2021

Added an endpoint called compareContracts. This API endpoint takes 2 ethereum addresses, does the required validation and then returns the user an object with the bytecodes and jaro similarity between the bytecodes. Jaro similarity is a metric used to compare similarity between two strings. 

The endpoint supports POST request and the body is structured as follows. 

{
    "address1": "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
    "address2": "0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F"
} 

In the above example, address1 is the UniswapV2Router contract address and address2 is the SushisSwapV2Router Address.

3. 

June 23, 2021

Added block_utils.js, Created 2 functions which enables us to fetch :
    1. All the blocks between 2 timestamps. 
    2. All the contracts deployed between 2 timestamps. 

Only Unix timestamps to be used at this point. 


4. To run, pull the latest changes and open a terminal in the twin-leak directory. Type "nodemon index.js" to run. If you don't have nodemon installed. Please install nodemon by running "npm install nodemon". 



To do :
1. Create a mechanism to compare one protocol smart contract to all of the popular protocols' smart contract. 
2. Add support for different blockchains (BSC, etc).
3. Add more metrics to compare smart contracts. 
4. Create a UI and deploy. 
