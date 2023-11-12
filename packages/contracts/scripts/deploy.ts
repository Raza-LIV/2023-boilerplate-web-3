import { ethers, network } from 'hardhat'

async function main() {
  const net = network.name

  console.log(`Deploying Test [${net}]...`)
  const Test = await ethers.getContractFactory('Test')
  const test = await Test.deploy()
  await test.waitForDeployment()
  console.log('Test deployed to:', test.target)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})