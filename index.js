const fs = require('fs');
const pinataSDK = require('@pinata/sdk');
const dotenv = require('dotenv')

dotenv.config()

const readableStreamForFile = fs.createReadStream('./files/img_sword.png');
const pinata = pinataSDK(process.env.PINATA_API_KEY, process.env.PINATA_API_SECRET);

const main = () => {
    const options = {
        pinataMetadata: {
            name: 'nft_sword',
            keyvalues: {customKey: 'customValue', customKey2: 'customValue2'}
        }, pinataOptions: {cidVersion: 0}
    };
    pinata.pinFileToIPFS(readableStreamForFile, options).then((result) => {
        //handle results here
        console.log(result);
    }).catch((err) => {
        //handle error here
        console.log(err);
    });
}

main();
