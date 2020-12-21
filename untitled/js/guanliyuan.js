function query_s() {
    var uid=document.getElementById('sellname').valueOf().value;
    {
        var mysql  = require('mysql');
        //
        var connection = mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : '',
            port: '3306',
            database: 'test'
        });

        connection.connect();

        var  sql = 'SELECT * FROM record';//sql语句
        connection.query(sql,function (err, result) {
            if(err){
                console.log('[SELECT ERROR] - ',err.message);
                return;
            }

            console.log('--------------------------SELECT----------------------------');
            console.log(result);
            console.log('------------------------------------------------------------\n\n');
        });

        connection.end();
    }
}
function query_b() {
    var uid=document.getElementById('buyname').valueOf().value;
    {
        //查询买家信息
    }
}
function delete_a() {

    {
        //删除交易记录
    }
}