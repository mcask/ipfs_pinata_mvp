const pinataSDK = require('@pinata/sdk');
const dotenv = require('dotenv')

dotenv.config()

const pinata = pinataSDK(process.env.PINATA_API_KEY, process.env.PINATA_API_SECRET);

const testAuthentication = () => {
    pinata.testAuthentication().then((result) => {
        //handle successful authentication here
        console.log(result);
    }).catch((err) => {
        //handle error here
        console.log(err);
    });
};

testAuthentication();
