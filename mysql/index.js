const mysql      = require('mysql');
const config = {
	host     : '127.0.0.1',
  user     : 'root',
	password : 'root',
	database: 'mysql'
}
let db = null

function handleError (err) {
  if (err) {
    // 如果是连接断开，自动重新连接
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
			console.log('执行mysql断线重连...')
      connect();
    } else {
      console.error(err.stack || err);
    }
  }
}

// 连接数据库
function connect () {
  db = mysql.createConnection(config);
  db.connect(handleError);
  db.on('error', handleError);
}
connect()

// 执行一条查询语句
function query(sql) {
	return new Promise((resolve, reject) => {
		db.query(sql, (error, result, fields) => {
				if (error) {
						console.log(error.message);
						reject(error.message);
				} else {
						resolve(result);
				}
		});
	})
}

// 插入数据
function insert(info,table) {
	let sql = "INSERT INTO " + table + "(";
	let keyArray = [];
	let valueArray = [];
	Object.keys(info).forEach((key) => {
			keyArray.push(key);
			valueArray.push("'" + info[key] + "'");
	});
	let keyStr = keyArray.join(',');
	let valueStr = valueArray.join(',');
	sql += keyStr + ') ';
	sql += 'VALUES(' + valueStr + ')';
	return query(sql);
}

module.exports= {
	query,
	insert
}