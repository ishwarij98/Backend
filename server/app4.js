import dotenv from "dotenv";
dotenv.config(); //Start the process to get details from .env

let userName = process.env.USERNAME;
let password = process.env.PASSWORD;
console.log(userName,password);