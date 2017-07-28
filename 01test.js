var mysql = require('mysql');
var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  port: '3306',
  // database: 'nodefor6',
});
connection.connect();
var createSql = `create database test_728 charset utf8`;
connection.query(createSql, (error, results, fields) => {
  if (error) throw error;
  console.log(results);
});

// var sqlStr = `create table usertest2(
//   id int not null auto_increment primary key,
//   name varchar(50) not null,
//   age int(10) not null,gender varchar(5) not null,
//   address varchar(100),
//   isdel tinyint(1) not null default 0);`;

// connection.query(sqlStr, (error, results, fields) => {
//   if (error) throw error;
//   console.log(results);
// });