require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kitten fresh skull drift reward stereo coin install derive bubble gentle'; 
let testAccounts = [
"0xc98455adcef802d93b0c7aefb8bd9d69ad4bf1b7d4b49a29d86db627445f0c1c",
"0x7070388bf1d4ad5ba9ef176beb8318177b35aeaa002546ddb7779d8f1f9a4cdb",
"0x59875d590da9efcee7140a327d380e9179692779d88b2bcd206ec73bc2086225",
"0x4364a4398473d7433dbab5e3dd40c46b11ee779aa8f028354b3f69745392427c",
"0x6346097e4e3c1362200c100b571b4326f11715752ef7e095939cfa06b8e1721e",
"0x32edc5913970407e4c68e80facab965a43b4e4e07cc0daa91cb2aa3697cb062a",
"0xe4e1e9405e9e6c524f3f565aedb4059146d347a47525a8a1ce7836fbf4f6473f",
"0xea06fa46faba1e55b15b4fc5eab9ffd0ddfb4dfbf2d53e39f824bd13fa7c22d8",
"0x2b025889bc04e8560116751abb6669a6a23e7a80fae311cf360b03f0545d72c1",
"0x6d00c210eee7135a8cb157ac63b07f4f2b73f6fa39a2f1952b26d59350729cf3"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

