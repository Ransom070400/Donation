async function main() {
  const EmergencyDonation = await ethers.getContractFactory("EmergencyDonation");
  const emergencyDonation = await EmergencyDonation.deploy();
  await emergencyDonation.deployed();
  console.log("EmergencyDonation deployed to:", emergencyDonation.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });