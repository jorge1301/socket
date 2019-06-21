require('dotenv').config();
const express = require('express');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');
let app = express();
let server = http.createServer(app);

const publicPath = path.resolve(__dirname,'../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//IO = Esta es la comunicación del backend
module.exports.io = socketIO(server);
require('./sockets/socket');

server.listen(port, () => {
    console.log('App listening on port 3000!');
});