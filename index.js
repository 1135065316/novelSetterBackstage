// 简单实例
const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
	console.log(req)
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
	res.setHeader('Access-Control-Allow-Origin', '*')
	let data = {
		name: 'zs',
		age: 13
	}
  res.end(JSON.stringify(data))
})

server.listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}/`)
})