import { Keyring } from '@polkadot/keyring';
import { cryptoWaitReady, mnemonicGenerate } from '@polkadot/util-crypto';
import fs from 'fs';
await cryptoWaitReady();

function getdot(mnemonic){
    try{
    const keyring = new Keyring({ type: 'sr25519' });
    const pair = keyring.addFromUri(mnemonic);
    const ss58Address = pair.address;
    keyring.setSS58Format(0);
    const dotAddress = pair.address
    console.log(dotAddress)
    }catch(error){
    }
}

const content = fs.readFileSync("adminyn.txt", "utf-8");
const parts = content.split("\n");
for (let i = 0; i < parts.length; i++) {
    getdot(parts[i].trim());
}