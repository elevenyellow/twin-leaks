# twin-leaks
A Decentralized Finance family tree and fork detector

Progress so far : 

1. Setup a NodeJS API Project. This repo is supposed to be used as the backend of twin-leaks.
2. Added an endpoint called compareContracts. This API endpoint takes 2 ethereum addresses, does the required validation and then returns the user an object with the bytecodes and jaro similarity between the bytecodes. Jaro similarity is a metric used to compare similarity between two strings. 
3. To run, pull the latest changes and open a terminal in the twin-leak directory. Type "nodemon index.js" to run. If you don't have nodemon installed. Please install nodemon by running "npm install nodemon". 



To do :
1. Create a mechanism to compare one protocol smart contract to all of the popular protocols' smart contract. 
2. Add support for different blockchains (BSC, etc).
3. Add more metrics to compare smart contracts. 
4. Create a UI and deploy. 
