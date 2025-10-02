const { expect } = require("chai");

describe("TemporalDAO", function () {
  let TemporalDAO, temporalDAO, owner;

  beforeEach(async function () {
    TemporalDAO = await ethers.getContractFactory("TemporalDAO");
    [owner] = await ethers.getSigners();
    temporalDAO = await TemporalDAO.deploy();
    await temporalDAO.waitForDeployment();
  });

  it("Should create a DAO with 1-hour duration", async function () {
    const oneHour = 3600;
    await temporalDAO.createDAO(oneHour);
    const dao = await temporalDAO.daos(0);
    expect(dao.duration).to.equal(oneHour);
    expect(dao.startTime).to.be.gt(0);
    expect(await temporalDAO.isActive(0)).to.be.true;
  });

  it("Should not allow finalizing before duration ends", async function () {
    const shortDuration = 10;
    await temporalDAO.createDAO(shortDuration);
    
    await expect(temporalDAO.finalizeDAO(0))
      .to.be.revertedWith("DAO still active");
  });
});