const util = require('util');
const mysql = require('mysql2');
const connect = mysql.createConnection({
    host: 'localhost', user: 'root', database: 'employee', password: 'Password1234'
},
console.log(`connected ddde`));

connect.connect();

connect.query = util.promisify(connect.query);

module.exports = connect;