const { expect } = require("chai");

describe("Token contract", function () {
  it("Deployment should return default values", async function () {
    const [owner] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("VerifiedNFT");

    const hardhatToken = await Token.deploy();

    const symbol = await hardhatToken.symbol();
    expect(symbol).to.equal("VTK");

  });
});

describe("token uri", function (){
  it("uri value", async function (){

    const Token = await ethers.getContractFactory("VerifiedNFT");

    const hardhatToken = await Token.deploy();

    const _tokenname= await hardhatToken.name();
    expect(_tokenname).to.equal("VerifiedToken");


  })
})