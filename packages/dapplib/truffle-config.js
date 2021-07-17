require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse frown slab carpet release machine uncover gloom drip future slight'; 
let testAccounts = [
"0xa92340a8916ffbce54e1b97729f3135c05fbb2c629f98908b0cb306cc98fa039",
"0xf3f32949af5342111319a59bba739db761f962efd01d17b470c5adb883c6a392",
"0xed290f4995e26b135330f119fb983219dcdf1807cb5eb85b73e78015159749d2",
"0xc288892023f58a99d22386a30026072729cd10a1a6fd54b038acb8eab9b8e28b",
"0x6bc665c1ef98462cc80f2299a7e549ba39b5c641059a7df31454e5c357593288",
"0x6286806bdb25ef572548345d91b0739f53b599940af0186c7fd5b212b6ac932f",
"0xb62bdb703abe695cde1719cbf633e13e7ef70435a76035e4b8ed254c2e49c053",
"0xb4bf1a07ee6a632479e3c96c694633edfad80aa16c1599c1aeb84082de1fc14e",
"0x57fb022dfa5f9f9ef532fc02a2d0557bc758041686edd0d8735e7ebe116eea36",
"0xd9f8ec2490c69be43faa798c4130f4b38d4dc93b31053ac2edd0af089c9c0b2e"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

