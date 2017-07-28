// 入口文件

// 引入express模块
var express = require('express');
// 创建web服务
var app = express();
// 引入fs模块
var fs = require('fs');
var path = require('path');

// 配置默认模板
app.set('view engine', 'ejs');
// 设置模板默认路径
app.set('views', './views');

// 托管静态资源
app.use('/node_modules', express.static('node_modules'));

// 注册路由
fs.readdir(path.join(__dirname, './router'), (err, filenames) => {
  if (err) throw err;
  filenames.forEach(filename => {
    // 通过path.join方法拼接每一个路由模块的绝对路径
    var filePath = path.join(__dirname, './router', filename);
    //注册每一个路由
    app.use(require(filePath));
  });
});

// app.get('/', (req, res) => {
//   res.writeHead(200, {
//     'Content-type': 'text/html;charset=utf-8'
//   });
//   res.end('首页');
// });

// 监听端口
app.listen(3008, function() {
  console.log('http://127.0.0.1:3008');
});