const axios = require('axios');
const dotenv = require('dotenv')

dotenv.config()

const testAuthentication = () => {
    const url = `https://api.pinata.cloud/data/testAuthentication`;
    return axios.get(url, {
        headers: {
            pinata_api_key: process.env.PINATA_API_KEY,
            pinata_secret_api_key: process.env.PINATA_API_SECRET,
        }
    }).then(function (response) {
        //handle your response here
        console.log('response:', response);
    }).catch(function (error) {
        //handle error here
        console.log('error:', error);
    });
};

testAuthentication();
