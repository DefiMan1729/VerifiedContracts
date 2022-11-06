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

