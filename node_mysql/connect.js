const mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cbt'
});

connection.connect((err) => {
    if(err){
        console.log(err);
    }else{
        console.log("Connected Successfully");
    }
});
