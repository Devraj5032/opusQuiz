const mysql = require('mysql')

const conn = mysql.createConnection({
    host:'localhost' ,
    user: 'root' ,
    password: '' ,
    port: 3306 ,
    database: 'opusquiz'
})

conn.connect(
    function(error) {
        if (error) console.log(error);
        console.log('db connected');
    }
)

module.exports = conn