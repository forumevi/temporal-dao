async function main() {
  const TemporalDAO = await ethers.getContractFactory("TemporalDAO");
  const temporalDAO = await TemporalDAO.deploy();
  await temporalDAO.waitForDeployment();
  console.log("TemporalDAO deployed to:", await temporalDAO.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});