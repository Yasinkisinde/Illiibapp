// index.js
const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        res.send(data);
    } catch (error) {
        res.status(500).send('Error fetching data');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});