var mysql = require('mysql');

var pool = mysql.createPool({
      host     : 'localhost',
      user     : 'root',
      password : 'hsr123456',
      database : 'todolist'
      
    });

exports.query = function(sql,data){
    pool.getConnection(function(err,connection){
        connection.query(sql,function(err,result){
              data(err,result);
              connection.release();
        });
    });
}