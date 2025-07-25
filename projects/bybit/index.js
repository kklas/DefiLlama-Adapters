const { cexExports } = require("../helper/cex");
const bitcoinAddressBook = require("../helper/bitcoin-book/index.js");

const config = {
  ethereum: {
    owners: [
      "0x1Db92e2EeBC8E0c075a02BeA49a2935BcD2dFCF4",
      "0xA7A93fd0a276fc1C0197a5B5623eD117786eeD06",
      "0xe1ab8c08294F8ee707D4eFa458eaB8BbEeB09215",
      "0xee5B5B923fFcE93A870B3104b7CA09c3db80047A",
      "0xf89d7b9c864f589bbF53a82105107622B35EaA40", // multiple chains
      "0x88a1493366d48225fc3cefbdae9ebb23e323ade3",
      "0x6Bd869be16359f9E26f0608A50497f6Ef122eE3E",
      "0x922fa922da1b0b28d0af5aa274d7326eaa108c3d",
      "0xbaed383ede0e5d9d72430661f3285daa77e9439f",
      "0x412dd3f282b1fa20d3232d86ae060dec644249f6",
      "0x77ec2176824df1145425eb51b3c88b9551847667",
      "0xf475388222e37ed28578fb43c02520bccb5443b6",
      "0xb627cb720a34b7bb7ded80263571b26f3acaf16b",
      "0x04fcd675f63b1ac987c650567977523e85a78135",
      "0xf579d6086cd6e557fb18c440582b2ed56a1c48e1",
      "0x6F4565c9D673DBDD379ABa0b13f8088d1AF3Bb0C",
      "0x72187DB55473B693Ded367983212FE2db3768829",
      "0xb829e684df8e31b402a4d4aedf3bbc18a52e7589",
      "0xc22166664e820cda6bf4cedbdbb4fa1e6a84c440", // added on 19/03/2025
      "0xdae4fdcb7fc93738ec6d5b1ea92b7c7f75e4f2f6", // added on 19/03/2025
      "0x6B9B774502E6aFAAfCac84f840AC8A0844A1aBe3", // added on 19/03/2025
      "0x80a9B4aAb0AD3c73cCE1C9223236b722DB5d6628", // added on 19/03/2025
      "0x63beE4A7e4aa5d76Dc6AB9b9d1852AABB9a40936", // added on 19/03/2025
      "0x33ae83071432116ae892693b45466949a38ac74c", // added on 19/03/2025
      "0x801bfD99636EC8961F7E2d2dD0a296d726f5F1Ae", // added on 19/03/2025
      "0x371c31f9221459e10565CFe78937CBdA5Db1791c", // added on 19/03/2025
      "0x3a4C84Ab5030E0371f8C2bD51E7Fb5Ec10149D0f", // added on 19/03/2025
      "0x48Bb9B14483E43c7726dF702b271D410e7460656", // added on 19/03/2025
      "0xCab3F132A11E5b723Fc20dDAB8bb1B858d00a8E8", // added on 19/03/2025
      "0x25c7d768a7D53E6EBE5590c621437126c766E1EA", // added on 19/03/2025
      "0x79Ae8c1b31B1E61C4B9d1040217a051F954d4433", // added on 19/03/2025
      "0xc273A2e3FC4c8f8610eBe51123dC32d233913da7", // added on 19/03/2025
      "0xa9cf4Aa55c675bADb68519e3CFa8F4Be942e6D11", // added on 19/03/2025
      "0x6206AE3781f9F1b6FBcf44C7240b1bE14f3169eF", // added on 19/03/2025
      "0x869bCEE3a0baD2211A65c63eC47DBD3D85A84D68", // added on 19/03/2025
      "0x30Ba21597F22aAfa4B0E86C250c8a6EEbAf0da54",
      "0x61B2Aa17C1c1114E7583bB31F777FF4bDc7AB717",
      "0x3Bd0e57e2917d3d9a93F479b3a23B28C3f31a789",
      "0xb24692D17baBEFd97eA2B4ca604A481a7cc2c8EA",
      "0xc93e48d89F2d6DBc1672908aA68Ce7c24d0413B4",
      "0xEe6281d94Fed46A90379F2033B6BbdcDa4EF462E",
      "0xEC949f12A3acaB835F3eED8b54B7361a8fbb3ee0",
      "0x7e8c73462aaa9d61c801bd9f5682db014387621a",
      "0xE5791f93b997c7Fc90753A1f2711E479773a2A87",
      "0xa2E5e8A607562B7BdA05d5820e569C290b43be6D",
      "0x2ebF891f4718EB8367013d8D975a1E5Afcae277F",
      "0x5a076b2D0941F2BC9b49d05D3a1FF9C7aCDc5e78",
      "0x4be65e82a07b05686b092aa7d4426ce8ecd70ddc",
      "0xeca33dc9e896072d4edc4a02183910376d4b5e76",
      "0x4Ce053dFe58541E08F149C1050EB3dF09d7A40bc",
      "0xcacc7e55d0a4b10daaed40b3db7bfe11d23b6f94",
      "0xab97925eb84fe0260779f58b7cb08d77dcb1ee2b",
      "0xb5873e333161e5b45adac57379ec2b15d861178d",
      "0x9814ba501c7ad64bed5ac731d0a4f9a506e18f8a",
      "0xcf4b3a3be828b111eee75a0534a988c8d9284aae",
      "0x1c3944173abee256456b1498299fc501ad5bbd6f",
      "0x41be1bae9815d86820bcfd94a5161000fab448a6",
      "0x3cEf1f90BE0F15f1573Bda7A3E045CCA9CfF1D15",
      "0x429B41e5Eb73E2266AFFBc2D7a41553BD8f1EDe1",
      "0xd7C4D4B3F076BF9fE391190c42676B4dC269EE02",
      "0x4E5e17e8eF17c9a7ef9798ddf78f3a2c38367d16",
      "0x495eB9345788ee6Be50c9c36Ed67Ffa2bEb3699f",
      "0x3Db4cB6d753D9e0BA7cC84e576D17dcD01B6B67D",
      "0x4e19698c366f7DCD1cfAd4D7f621B4D275Bb1a6C",
      "0x7C41C7d883DbbE1eDfcefca9D7a7592DD30C8B51",
      "0x01E2Fb8F565D5e3cB9e0E8F0b607A96169B94393",
      "0x8a2458f32E5Ec9935F20E7C2e06e8D4820F726e5",
      "0xd860962a96Cd471BbE60A83c33e65011D40eB65f",
      "0x933646D78ede6F1EF5CF4a0a03e3a819c8057922",
      "0x9db812a1b55ac6fdbd1d52e628324e2fd2dbb560",
      "0xbdbcb0789b4d1143d391e27a0fbeb90ad205d232",
      "0x863b9fe43ea1490a9084ef0cdf436dbe4c34370f",
      "0x86dbaa55f0e65857b58109c3cb725deff4da3851",
      "0x35696b0847ed8428a098cba726b6514582aa5fc7",
      "0x8d6d3479c94bb95e737b72186192ff5e7fedf3a2",
      "0xf2f40c3bb444288f6f64d8336dcc14dbd929fd94",
      "0xbce9aecd3985d4cbb9d273453159a26301fa02ef",
      "0x70f58622158d7e609ae5839c4ad0d477f468863f",
      "0x18e296053cbdf986196903e889b7dca7a73882f6",
      "0x260b364fe0d3d37e6fd3cda0fa50926a06c54cea",
      "0xa1abfa21f80ecf401bd41365adbb6fef6fefdf09",
      "0x70167b76543c4a12b49b2f2b70cbf04d99345786",
      "0x4865d4bcf4ab92e1c9ba5011560e7d4c36f54106",
      "0xc6c6a48ee8e9f593724161c72414d76e94cda93f",
      "0xefef30bd1cca520619306c95091ab18473febc5c",
      "0x180a1b935d28494f9ff4233985562b18b3dcfa74",
      "0xad85405cbb1476825b78a021fa9e543bf7937549",
      "0x8fa129f87b8a11ee1ca35abd46674f8b66984d4a",
      "0x651641299c7ec0aa44ad7ed9b7e12702fed2022f",
      "0x187c9fbf5bd0f266883c03f320260c407c7b4100",
      "0xa4b9569bf942c3aad23c0c2d322fe4aff8e1bf30",
      "0x6522b7f9d481eceb96557f44753a4b893f837e90",
      "0xa31231e727ca53ff95f0d00a06c645110c4ab647",
      "0xf42aac93ab142090db9fdc0bc86aab73cb36f173",
      "0x9cdb59516b37f5c1bd166bc41c5b9f68a57225bd",
      "0x0ac92eb5716516a08e7760d314d42e1d5d3c03ae",
      "0x7a84c1f1aa344d466b0f161f57b0321b98faf6ee",
      "0xc63fe58d36bef77a9a98df32a547537f45aac71d",
      "0xf8f061cfc030928a4acb8c4980911b4f5afc4002",
    ],
  },
  bitcoin: {
    owners: bitcoinAddressBook.bybit,
  },
  bsc: {
    owners: [
      "0xee5B5B923fFcE93A870B3104b7CA09c3db80047A",
      "0xf89d7b9c864f589bbf53a82105107622b35eaa40",
      "0x88a1493366d48225fc3cefbdae9ebb23e323ade3",
      "0x388E52979AC487c6BdaFCC84B251976Cd162790b",
      "0xc19bb2709321bd6ad6d8396a885b7c151b8d48c5",
      "0xc3121c4ca7402922e025e62e9bb4d5b244303878",
      "0xef3aeff9a5f61c6dda33069c58c1434006e13b20",
      "0x318d2aae4c99c2e74f7b5949fa1c34df837789b8",
      "0xc851a293ed8b8888a2e4140744973dd23bbcbaf2",
    ],
  },
  tron: {
    owners: [
      "TB1WQmj63bHV9Qmuhp39WABzutphMAetSc",
      "TBpr1tQ5kvoKMv85XsCESVavYo4oZZdWpY",
      "TKFvdC4UC1vtCoHZgn8eviK34kormXaqJ7",
      "TQVxjVy2sYt4at45ezD7VG4H6nQZtsua5C",
      "TS9PDCB6vzLYDCPr5Nas2yzekdr7ot6dxn",
      "TU4vEruvZwLLkSfV9bNw12EJTPvNr7Pvaa",
      "TXRRpT4BZ3dB5ShUQew2HXv1iK3Gg4MM9j",
      "TYgFxMvvu2VHFJnxQf8fh1qVAeMfXZJZ3K",
      "TB1cPNTPE2yKRbyd5C3hd9KMXgb8HqW1CM",
      "TTH75Z9rfRgzCLNDDYBaR2WjUvuSDRtSMg",
      "TFbrM6tiw4A3AhFQAyY7u6jYs7m2HFKavU",
      "TUCS5ToZvL23Q6kKtWUhAGgMfJBwPUZgfu",
      "TF1yVgYNJYx8AEtKLhjd2YbLJ33uyWu9Eo",
      "THRKrcUPirR6GU6qvsKAv2M6PUBcwe6ruD",
      "TMB53f4eYhEhTqkuzKRNDoDNu5Ma5DtMSc",
      "TTT5cF5aPZjF6FkPJqV4MmnuykMACjDvmb",
      "TVYkGPtjVK7hvVcfsuZ8QXRsAdR2axpSP5",
      "TJ6Ajasg7SQMYJuFxVAwwcsCSDSdNVPjDE",
      "TFAxireFhrca32XpKaTwABbrNyxSrM6twe",
      "TG9n9mHxbYfwVjizac1WaEoQ8ELfExPBCp",
      "TPk6eu8rKWmdd1qAhyYFsmkUpbZjJbiNMW",
      "TSTDgxSnutWG9NHjGa4H9v7sMkNdtKacPJ",
      "TAv8HvZLAyPC2PyLY61i1nvPKpJ2bDURxo",
      "TSLXGsU6kgByy3oCdhMqpWHXq3FFFHUVAn",
      "TG8eS14GvQJ1Qi4iWoePavD8oBiSNVNqzi",
      "TLXtfWVafCLPSUUfk2UHJWVs2SZtuxBS4F",
      "TT82s2U3xERKsmvgftM1ekzRqVP6NPo13y",
      "TP39VvzdkdkxvGhmEMtot4hN5R7czR6GVV",
      "TMFuCWAvcEDwtW3evtXFAg8eQzoCWtzwnQ",
      "TZBxnLfD3TRr9tHJNN2geTYwC4CYzfvkS9",
    ],
  },
  polygon: {
    owners: [
      "0xf89d7b9c864f589bbf53a82105107622b35eaa40",
      "0xee5B5B923fFcE93A870B3104b7CA09c3db80047A",
      "0x7e8c73462aaa9d61c801bd9f5682db014387621a",
      "0xa85c29b94f8a22a7268facee89ef4eca051be2ce",
      "0x1347378b1d0eb69d3462e09b3dfa2fe28ebe74ec",
    ],
  },
  arbitrum: {
    owners: [
      "0xf89d7b9c864f589bbF53a82105107622B35EaA40",
      "0xee5B5B923fFcE93A870B3104b7CA09c3db80047A",
      "0x88a1493366d48225fc3cefbdae9ebb23e323ade3",
      "0x7e8c73462aaa9d61c801bd9f5682db014387621a",
      "0xa0acdf9fa38b293f0bbdd01ca6bf3e7ed8291dd4",
      "0x7da0b9211020d3775b18116fe751c555b9a7058c",
      "0x9d271a4e9523d74572b618ec10419a0a330e1bf0",
    ],
  },
  avax: {
    owners: [
      "0xf89d7b9c864f589bbF53a82105107622B35EaA40",
      "0xee5B5B923fFcE93A870B3104b7CA09c3db80047A",
      "0x88a1493366d48225fc3cefbdae9ebb23e323ade3",
      "0x0a7e3e04fb45af4233a27bcf23f2c94f5babcf39",
      "0x3062e4ed0282f86d1b8481d06c30d7f2382776a7",
    ],
  },
  ripple: {
    owners: [
      "rMvCasZ9cohYrSZRNYPTZfoaaSUQMfgQ8G",
      "rwBHqnCgNRnk3Kyoc6zon6Wt4Wujj3HNGe",
      "raQxZLtqurEXvH5sgijrif7yXMNwvFRkJN",
      "raBWjPDjohBGc9dR6ti3DsP9Sn47jirTi3",
      "rfKSkASYSGwrTvk9FeH65QC5CWiiEjYFpp",
      "rpwsiBrcXeVTyNPG445TzPbXSBdL9xHB83",
      "rBdPX224aE6Rsa2cw8uGvaw73fzcpEo5Ue",
      "rKwtFTDNTTeLVcj7ahz9PXBEx2V9bPCg44",
    ],
  },
  optimism: {
    owners: [
      "0xf89d7b9c864f589bbF53a82105107622B35EaA40",
      "0x1Db92e2EeBC8E0c075a02BeA49a2935BcD2dFCF4",
      "0xee5B5B923fFcE93A870B3104b7CA09c3db80047A",
      "0x88a1493366d48225fc3cefbdae9ebb23e323ade3",
      "0x75df67943d35129dd22da5d14fda4983571f553a",
      "0xc0e17ad342afabd36b3971f8305ff147006962ae",
      "0x6d37817d118f72f362cf01e64d9454bdd8e8e92f",
    ],
  },
  era: {
    owners: [
      "0xf89d7b9c864f589bbF53a82105107622B35EaA40",
      "0x1Db92e2EeBC8E0c075a02BeA49a2935BcD2dFCF4",
      "0xee5B5B923fFcE93A870B3104b7CA09c3db80047A",
      "0xacf9a5610cb9e6ec9c84ca7429815e95b6607e9f"
    ],
  },
  solana: {
    owners: [
      "AC5RDfQFmDS1deWZos921JfqscXdByf8BKHs5ACWjtW2",
      "42brAgAVNzMBP7aaktPvAmBSPEkehnFQejiZc53EpJFd",
      "Hvkm4H2Ta3L3ssWbB5jeC4kpEJDuZnZqapAXp1V7UHEw",
      "CqQ6AX1fiFfHKKY3saGzT5pgbkLwfLVrrAKpFhUG38oe",
      "FeNayVKekV9FJzhD7ycTd6sbKEyzt9CRCiqxw5nr41yR",
      "CqQ6AX1fiFfHKKY3saGzT5pgbkLwfLVrrAKpFhUG38oe",
      "32cT9eAwkEvAk631rUcUAbXVFPg21DaAXzGiz9AqHTVE",
      "9Z7S8vCj6nDbK9t4m4AU3vZpKm4UufHAwpmRYyKgZf7r",
      "BunaYnktTigcU1ovzVt9dG7NMv2gW5VX7MBfSS8J38s2",
      "AaFm2LPX8NUKXe64JaxcRNUc8QPGYCxrPG1HjHcTTGAK",
      "i9XvhQqBCTQapqaFKPDuCbtPYMCwELmX8VTCsDhRG7d",
      "7ReR6syi6gr7qUrKCL1FB9VFzGhVgHwLJ8wtfNtH9Mv4",
      "iGdFcQoyR2MwbXMHQskhmNsqddZ6rinsipHc4TNSdwu",
      "9ZifroknFoYu4r6DUk6nYoJiUQnEyyoUyeAwjXbPoL2x",
      "2qo8jvuc49pFmTjmUHLiARSV6ppPTaE7gw27ZJ6DnNZy",
      "CK8i4zFXkDE2KWfyg7g9S748r6mwxajbcKcyGhQMR3qQ",
      "Gem2VAypSg7Ai7vjDKPTtqFahpoQWkfgVkyzx3rPoTka",
      "5LZkATrLwHYCQj2YuVbjjgsDZzBk6YfL4pFQRJmtboT2",
      "7cAui6ADtxLnpRr2wYvwJWTkzwgmVF2LYKnjKTLx4xR8",
    ],
  },
  cardano: {
    owners: ["addr1v8mn6dmk7tf9u26kr09a05lmvc9j4k9d940a88ta3hdczqgyt7whl"],
  },
  aptos: {
    owners: [
      "0x84b1675891d370d5de8f169031f9c3116d7add256ecf50a4bc71e3135ddba6e0",
    ],
  },
  taiko: {
    owners: ["0xf89d7b9c864f589bbF53a82105107622B35EaA40"],
  },
  celo: {
    owners: ["0xf89d7b9c864f589bbF53a82105107622B35EaA40", "0x5768d8a89da933e15c5cb2f1a8f3e0627aa2c92a"],
  },
  base: {
    owners: [
      "0x1Db92e2EeBC8E0c075a02BeA49a2935BcD2dFCF4",
      "0xbaed383ede0e5d9d72430661f3285daa77e9439f",
      "0xee5B5B923fFcE93A870B3104b7CA09c3db80047A",
      "0x88a1493366d48225fc3cefbdae9ebb23e323ade3",
      "0x7e8c73462aaa9d61c801bd9f5682db014387621a",
    ],
  },
  fantom: {
    owners: ["0xf89d7b9c864f589bbF53a82105107622B35EaA40"],
  },
  kava: {
    owners: ["0xf89d7b9c864f589bbF53a82105107622B35EaA40"],
  },
  linea: {
    owners: ["0xf89d7b9c864f589bbF53a82105107622B35EaA40", "0x46958006fc6c826ea5318b42ffdd99ae3f8deaf4"],
  },
  litecoin: {
    owners: [
      "LKxNtynH2GxLc2oLxUGL6ryckK8JMdP5BR",
      "ltc1qp7cnlxmz8wgc93g0m020ckru2s55t25y3wunf6",
      "LfajbWicGAVvhEMZtCm3a1aMqynpSPHhS6",
    ],
  },
  manta: {
    owners: [
      "0xf89d7b9c864f589bbF53a82105107622B35EaA40",
      "0xa6a9f45518881a788e29f82a032f9d400177d2b6",
      "0xf89d7b9c864f589bbF53a82105107622B35EaA40",
      "0x588846213a30fd36244e0ae0ebb2374516da836c",
    ],
  },
  scroll: {
    owners: ["0xf89d7b9c864f589bbF53a82105107622B35EaA40"],
  },
  polkadot: {
    owners: [
      "11yLs2qzU15AhxnH1d7Koqcf83AwutKkDaGbqsJJ6yDWQjc",
      "12nr7GiDrYHzAYT9L8HdeXnMfWcBuYfAXpgfzf3upujeCciz",
    ],
  },
  eos: {
    owners: ["coldcrazycat", "eosdididada3", "kcwo3rimcnqf"],
  },
  starknet: {
    owners: [
      "0x076601136372fcdbbd914eea797082f7504f828e122288ad45748b0c8b0c9696",
    ],
  },
  arbitrum_nova: { owners: ["0xf89d7b9c864f589bbF53a82105107622B35EaA40"] },
  mantle: {
    owners: [
      "0x588846213a30fd36244e0ae0ebb2374516da836c",
      "0xEe6281d94Fed46A90379F2033B6BbdcDa4EF462E",
      "0xe080636a701adb421e077e98f160fddf7710826b",
      "0x59800fc68c7039566ed7a04b0f735255093cac1d",
      "0x036c43bebe5fa5dff3c299584b4a6c1923c7d932",
      "0xcbf446565eddf074b2c99e8f1c15582a0bfe6eba",
      "0xbce9aecd3985d4cbb9d273453159a26301fa02ef",
      "0x70f58622158d7e609ae5839c4ad0d477f468863f",
      "0x4a67e97e770de93952b8596f04c13ada0ab9a69c",
      "0xc868d0ea71243f1580f934cdc59620603bf9f1f1",
      "0xd8169f099ce16c87a99d2a8494023574b5eea9c5",
      "0x0d4dc3b8becc98782309e443a6da4b9455b5ca48",
    ],
  },
  cosmos: {
    owners: [
      "cosmos17kvae2jckzpkct78yealre3ms2gu28cdmtwsv7",
      "cosmos1pyarvcy2ehrw86rcvfun34gyu2dlunnthvkc83",
    ],
  },
  doge: {
    owners: [
      "D94tDRhr4X9Tjgr8MG1Nrd5ARpesPAM7ZB",
      "DDz1H7AcqPgmKzFEP3pBHW5b1GWuWEoAAP",
      "DSivtWEKhTuhcJ1xd1iJSH63wLVxqh7Zo2",
      "DJXufZcZJ2b3iPa7s2T7PFSP42H4gVsjuy",
      "DHLHMUa3X7eQNRmgXsyTxGs689CDwTqeV2",
    ],
  },
  ton: {
    owners: [
      "EQB9Ez1OQlyOAN4BVROkTmbm0WOyHnFyCux1eZZeXeKMVV6_",
      "EQBKHCC8mm-SlPdfHIen84OotzpIOi5tyzYw3b54s8ytANhS",
    ],
  },
  dydx: { owners: ["dydx10sdnqxvrwe3mhducn6plyewul84edgd47rfnfe"] },
  sonic: {
    owners: [
      "0x86dbaa55f0e65857b58109c3cb725deff4da3851",
      "0x63783f206f22a3eec1e4d0081a49ae419d02ebe4",
      "0x678cbca3a5cc152ae00f77b85b14151d761b44be",
    ],
  },
  klaytn: {
    owners: ["0x0051ef9259c7ec0644a80e866ab748a2f30841b3"],
  },
};

module.exports = cexExports(config);
