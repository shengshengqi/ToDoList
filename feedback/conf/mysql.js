var mysql = require('mysql');

var pool = mysql.createPool({
      host     : '129.204.218.96',
      user     : 'root',
      password : 'Ssq03230202',
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