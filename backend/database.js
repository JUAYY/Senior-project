// import _ from 'lodash';

// import mysql from "mysql3"; 

const mysql = require("mysql3");

const dbConnection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "ingenuity"
});

console.log("Connectttttttttted !");

module.exports = dbConnection;


//install library