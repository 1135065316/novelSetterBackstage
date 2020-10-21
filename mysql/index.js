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

module.exports= {
	query
}