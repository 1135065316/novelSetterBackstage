const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
	password : 'root',
	database: 'mysql'
});

connection.connect()

// 执行一条查询语句
function query(sql) {
	return new Promise((resolve, reject) => {
		connection.query(sql, (error, result, fields) => {
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