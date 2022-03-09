async function main() {
  const HelloWorld = await ethers.getContractFactory("HelloWorld");
  const hello_world = await HelloWorld.deploy("Hello World!");
  await hello_world.deployed(5);
  //   await hello_world.wait();
  console.log("Contract deployed to address:", hello_world.address);
  await verifyContract(hello_world.address);
}

let sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function verifyContract(_address) {
  await sleep(1000 * 60);
  verify = await hre.run("verify:verify", {
    address: _address,
    constructorArguments: ["Hello World!"],
  });
  console.log(`successfuly verified`);
  return verify;
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
