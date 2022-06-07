const express = require('express');
const http = require('http');
const formidable = require('express-formidable');
const app = express();
const path = require('path');
const server = http.createServer(app);
const axios = require('axios');
const cors = require('cors');

app.use(cors());
app.use(formidable());
app.use('/public',express.static('./public'));
app.use('/api', require('./routes/api'));
app.use('/', async function(req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

server.listen(7878);