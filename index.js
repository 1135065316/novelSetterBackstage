const cardPool = require('./cardPool/index.js')
// 简单实例
const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
	// console.log(req.url,req.url === '/',req.method,req.method==='GET')
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
	res.setHeader('Access-Control-Allow-Origin', '*')
	// 响应的数据
	let data = null
	// 处理请求
	if(req.url.search('card_pool')!=-1){
		data = cardPool.matchUrl(req.url)
	}
  res.end(JSON.stringify(data))
})

server.listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}/`)
})