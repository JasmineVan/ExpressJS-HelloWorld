// const express = require('express')

// const app = express()

// app.get('/', (req, res) => {
//     res.end("Response from Express")
// });

// app.listen(3000)

const fs = require("fs");
const fileName = "target.txt";

const data = fs.readFileSync(fileName);
console.log("SYNCHRONOUS", data.toString());

// fs.watch(fileName, () => console.log(`File changed`));

fs.readFile(fileName, (err, data) =>{
    if (err){
        console.log(err);
    }
    console.log("ASYNCHRONOUS", data.toString());
});

console.log("NORMAL TEXT");