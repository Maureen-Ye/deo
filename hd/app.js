var express = require('express'); // 引入express模块
var mysql = require('mysql');
var app = express();  //创建express的实例

var connection = mysql.createConnection({      //创建mysql实例
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '',
    database: 'DATA'
});
connection.connect();
//查
    app.get('/guan_li_yuan_lie_biao', (require, response) => {
        var sql = 'SELECT * FROM adminList';
        connection.query(sql, function (err, result) {
            if (err) console.log('[SELECT ERROR]:', err.message);
            console.log(result);  //数据库查询结果返回到result中
            let str = JSON.stringify(result);
            response.setHeader("Access-Control-Allow-Origin","*")
            response.send(str);
        })
    });
//增
    app.get('/zeng_jia_lie_biao', (req, res) => {
        console.log("query", req.query)
        var name = req.query.name;
        var phone = req.query.phone;
        var user = req.query.user;
        var password = req.query.password;
        var role = req.query.role;
        var state = req.query.state;
        var sql = `insert into adminList  (\`name\`, \`phone\`, \`user\`, \`password\`, \`role\`, \`state\`)  values ('${name}','${phone}','${user}','${password}','${role}','${state}')`;
        connection.query(sql, function (err, result) {
            if (err) {
                console.log('err:', err.message)
                return res.send('添加失败，', err.message);
            }
            let str = JSON.stringify(result);
            res.status(200);
            res.setHeader("Access-Control-Allow-Origin","*")
            res.send('添加成功！');
        });
    });
//删
    app.get('/shan_chu_lie_biao/:id', (request, response) => {
        let sql = `DELETE FROM adminList WHERE id=${request.params.id}`;
        console.log(sql);
        connection.query(sql, function (err, result) {
            if (err) console.log('[SELECT ERROR]:', err.message);
            console.log(result);  //数据库查询结果返回到result中
            let str = JSON.stringify(result);
            response.setHeader("Access-Control-Allow-Origin","*")
            response.send(str);
        })
    });
//改
    app.get('/xiu_gai_lie_biao/:id', (request, response) => {
        let str = "";
        let id = request.params.id;
        var sql = `SELECT * FROM adminList WHERE id=${request.params.id}`;
        console.log(sql);
        connection.query(sql, function (err, result) {
            connection.query(sql, function (err, result) {
                if (err) console.log('[SELECT ERROR]:', err.message);
                console.log(result);  //数据库查询结果返回到result中
                let str = JSON.stringify(result);
                response.setHeader("Access-Control-Allow-Origin", "*")
                response.send(str);
            })
        })
    });
    app.get('/updateList/:id/:name/:phone/:user/:password/:role/:state', (req, res) => {
        console.log("query", req.query)
        var name = req.params.name;
        var phone = req.params.phone;
        var user = req.params.user;
        var password = req.params.password;
        var role = req.params.role;
        var state = req.params.state;
        var sql = `UPDATE adminList SET name= '${name}',phone='${phone}',user='${user}',password='${password}',role='${role}',state='${state}'WHERE id='${req.params.id}' `;
        connection.query(sql, function (err, result) {
            if (err) {
                console.log('err:', err.message)
                return res.send('修改失败，', err.message);
            }
            let str = JSON.stringify(result);
            res.status(200);
            res.setHeader("Access-Control-Allow-Origin","*")
            res.send('修改成功！');
        });
    });

app.get('/', function (req, res) {
    res.send('Hello,myServer');  //服务器响应请求
});

// connection.end();

app.listen(3000, function () {    //监听3000端口
    console.log('Server running at 3000 port');
})

