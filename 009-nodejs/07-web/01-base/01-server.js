/*
* @Author: Chen
* @Date:   2019-11-01 19:34:23
* @Last Modified by:   Chen
* @Last Modified time: 2019-11-01 20:02:32
*/
const http = require('http')

const server = http.createServer((req,res)=>{
	//req  request =>可读流
	//res  response => 可写流
	console.log(req.url)
	console.log(req.method)
	res.write('hello nodejs')
	res.end('everyone')
})

/*
server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running in http://127.0.0.1:3000')
})
*/
server.listen(3000,'10.196.12.235',()=>{
	console.log('server is running in http://10.196.12.235:3000')
})
