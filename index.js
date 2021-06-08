'use strict'

const fs = require('fs');
const path = require('path');
const axios = require('axios');

async function downloadImage(){
    const url = 'https://www.pngfind.com/mpng/ihhxmR_club-penguin-flower-thepix-clip-art-clip-art/';

    const imagePath = path.resolve(__dirname, 'images', 'flower.png');

    const writer =  fs.createWriteStream(imagePath);

    let response = await axios({
        url : url,
        method: 'GET',
        responseType: 'stream'
    })

    response.data.pipe(writer);

    return new Promise(( resolve, rejectes) => {
        writer.on('finish', resolve);
        writer.on('error', rejectes);
    })
}

downloadImage()