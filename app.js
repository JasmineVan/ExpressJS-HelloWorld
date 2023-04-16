const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.end("Response from Express")
});

app.listen(3000)