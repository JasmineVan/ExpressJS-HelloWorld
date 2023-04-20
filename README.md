# My first project with Express JS
## Author: Thuong Trinh Van
## Date: 16 April 2023

-----
# Installation
[npm](https://www.npmjs.com/)
1. `npm install`
2. `npm init` 
3. `npm i nodemon` 
Nodemon is a tool that helps develop Node. js based applications by automatically restarting the node application when file changes in the directory are detected. nodemon does not require any additional changes to your code or method of development. nodemon is a replacement wrapper for node
4. `npm i express` 
Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
5. `npm i morgan` 
Morgan is a Node. js and Express middleware to log HTTP requests and errors, and simplifies the process. In Node. js and Express, middleware is a function that has access to the request and response lifecycle methods, and the next() method to continue logic in your Express server
6. `npm i dotenv` 
Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.
7. `npm i mongoose` 
Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports Node.js and Deno (alpha).
8. `npm i body-parse` 
Parse incoming request bodies in a middleware before your handlers, available under the req.body property.

-----
# Command
- npm run dev

-----
# Errors Catching
1. querySrv ENOTFOUND _mongodb._tcp.cluster0.aea6vvb.mongodb.net
[Solved](https://stackoverflow.com/questions/55499175/how-to-fix-error-querysrv-erefused-when-connecting-to-mongodb-atlas)

2. MongooseError: Model.prototype.save() no longer accepts a callback
[Solved](https://stackoverflow.com/questions/75586474/mongoose-stopped-accepting-callbacks-for-some-of-its-functions)

-----
# Warning Notice
Use `node --trace-warning` to trace basck error

1. Depression Warning
2. Accessing non-existent property
