// const express = require('express')

// const app = express()

// app.get('/', (req, res) => {
//     res.end("Response from Express")
// });

// app.listen(3000)

const fs = require("fs");
const fileName = "target.txt";

const errHandler = err => console.log(err);
const dataHandler = data => console.log(data.toString());

// fs.watch(fileName, () => console.log(`File changed`));

fs.readFile(fileName, (err, data) =>{
    if (err){
        errHandler(err);
    }
    dataHandler(data);
});

console.log("NORMAL TEXT");