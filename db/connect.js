const util = require('util');
const sql = require('mysql');
const connect = sql.createConnection({
    host: 'localhost', user: 'root', database: 'employee' //if needed password: 'pasword'
});

connect.connect();

connect.query = util.promisify(connect.query);

module.exports = connect;