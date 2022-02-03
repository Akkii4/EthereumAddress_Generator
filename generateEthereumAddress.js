const crypto = require('crypto');
const keccak256 = require('keccak256');
const { publicKeyCreate } = require('secp256k1');

const privateKey = crypto.randomBytes(32).toString('hex');

const privateKeyBuffer = Buffer.from(privateKey, 'hex');

const publicKey = Buffer.from(publicKeyCreate(privateKeyBuffer, false)).toString('hex');

const publicKeyBuffer = Buffer.from(publicKey, 'hex');
const ethereumAddress = keccak256(publicKeyBuffer).toString('hex').slice(64 - 40);

console.log('Private Key:', privateKey);
console.log('Public Key:', publicKey);
console.log('Ethereum Address: ', '0x' + ethereumAddress);