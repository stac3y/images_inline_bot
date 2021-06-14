const axios = require('axios');
const BASE_URL = 'https://pixabay.com/api/';

module.exports = async q =>{
    try {
        return axios.get(BASE_URL,
            {
                params: {
                    key: process.env.PIXABAY_TOKEN,
                    q,
                }
            })
    }

    catch (err){
        console.log(err)
    }
}
