const express = require('express');
const server = express();
require('dotenv').config();

server.get('/', (req, res) => {
    res.send('Hello Abolfazl');
});

server.get('/about', (req, res) => {
    res.send('Wellcome to About Page');
})

server.get('/contact', (req, res) => {
    res.send('Wellcome to Contacts Page');
})

const port = process.env.PORT || 4000;
server.listen(port, () => {
    console.log(`Server is running on ${port}`);
})