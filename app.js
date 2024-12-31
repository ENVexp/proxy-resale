const express = require('express');
const axios = require('axios');

const app = express();

app.get('/teste', async (req, res)=>{
    try {
        const response = await axios.get(
            "http://tdck.cloud:443/series/Ronnyy/root@2424/679332.mp4",
            {
            responseType: 'stream'
        });

        res.setHeader('Content-Type', response.headers['content-type'] || 'application/octet-stream');
        res.setHeader('Content-Length', response.headers['content-length'] || undefined);

        response.data.pipe(res);
    } catch (error) {
        res.status(500).json({ error: 'Erro', details: error.message });
    }
})

module.exports = app;