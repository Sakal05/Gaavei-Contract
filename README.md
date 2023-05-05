# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
```
### Steps
Using Yarn Berry:
```
yarn init -2
    ...
yarn config set nodeLinker node-modules
yarn add hardhat --dev
yarn hardhat init
    "Create a TypeScript project"
    ...
    .gitignore? Y
yarn add --dev [list of suggested dev dependencies above]
yarn add mocha --dev
code .
```
### Recommended extensions
[Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph)

[Mocha Test Explorer](https://marketplace.visualstudio.com/items?itemName=hbenl.vscode-mocha-test-adapter)

[Solidity](https://marketplace.visualstudio.com/items?itemName=JuanBlanco.solidity)

### Environment setup
_.mocharc.json_ file:
<pre><code>{
  "require": "hardhat/register",
  "timeout": 40000,
  "_": ["tests/**/*.ts"]
}
</code></pre>
<pre><code>Suggested renaming:
// Renaming "test" folder
mv test tests
</code></pre>
<pre><code>If using Yarn Berry with PnP:
// Setting up yarn sdk for vscode
yarn dlx @yarnpkg/sdks vscode
// Press ctrl+shift+p in a TypeScript file
// Choose "Select TypeScript Version"
// Pick "Use Workspace Version"
</code></pre>
_hardhat.config.ts_ file:
<pre><code>{
const config: HardhatUserConfig = {
...
  paths: { tests: "tests" },
...
  }
}
</code></pre>
_tsconfig.json_ file:
<pre><code>
...
  "include": ["./scripts", "./tests", "./typechain"],
  "files": ["./hardhat.config.ts"],
...
</code></pre>
Create env file in root project folder

_.env_ file:

```
MNEMONIC="here is where your twelve words mnemonic should be put my friend"
PRIVATE_KEY="<your private key here if you don't have a mnemonic seed>"
INFURA_API_KEY="********************************"
INFURA_API_SECRET="********************************"
ALCHEMY_API_KEY="********************************"
ETHERSCAN_API_KEY="********************************"
```

Edit the environment with your keys:

```
code .env
```

Test it out:
```
 yarn hardhat compile 
 yarn hardhat test 
```

Accounts task:
```
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts) {
    console.log(account.address);
  }
});
```

Test it out:
```
 yarn hardhat accounts 
```