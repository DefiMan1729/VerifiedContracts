# Sample Hardhat Project: Verified Smart Contract (NFT/ERC721)

This project demonstrates the simple process of verifying a Smart Contract on Etherscan

Step 1:
Deploy the smart contract 
```shell
npx hardhat run scripts/deploy.js --network <network name>
```

Step2:
verify the smart contract on Etherscan
```shell
npx hardhat verify -- network <network name> <contract address>
```

Note:
*You need to fill the correct API keys from your Node RPC (Infura/Alchemy) provider in the dotenv file to deploy the contracts. The contract can also be deployed on Ganache.
You would also need the Etherscan API key to verify the contract. 
Check the hardhat.config.js file*
