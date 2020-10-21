const cardPool = require('./cardPool/index.js')
// 简单实例
const http = require('http')
// mysql
const mysql = require('./mysql/index')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
	// console.log(req)
	res.statusCode = 200
  res.setHeader('Content-Type', 'application/json;charset=utf-8')
	res.setHeader('Access-Control-Allow-Origin', '*')
	// 请求的数据
	let reqData = ''
	// 响应的数据
	let data = null
	if(req.method == 'POST') {
		req.on('data', function (chunk) {
			// chunk 默认是一个二进制数据，和 data 拼接会自动 toString
			reqData += chunk;
		});
		req.on('end', function () {
			let dataObject = JSON.parse(reqData);
			// 处理请求
			if(req.url.search('card_pool')!=-1){
				data = cardPool.matchUrl(req,dataObject,mysql)
			}
  		res.end(JSON.stringify(data))
		});
	}
	// else {
	// 	console.log(2)
	// 	res.end(1)
	// }
	
})

server.listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}/`)
})