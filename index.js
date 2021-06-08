'use strict'

const fs = require('fs')
const path = require('path')
const axios = require('axios')

async function downloadImage(){
    const url = 'https://unsplash.com/photos/UThz2YH-6gc';

    const imagePath = path.resolve(__dirname, 'images', 'leadyimg.png');

    let response = await axios({
        method: 'GET',
        url : url,
        responseType: 'stream'
    })

    response.data.pipe(fs.createWriteStream(imagePath));

    return new Promise(( resolve, rejectes) => {
        response.data.on('finish', resolve);
        response.data.on('error', rejectes);
    })
}

downloadImage()