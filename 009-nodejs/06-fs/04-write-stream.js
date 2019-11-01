/*
* @Author: Chen
* @Date:   2019-11-01 19:00:52
* @Last Modified by:   Chen
* @Last Modified time: 2019-11-01 19:07:02
*/
const fs = require('fs')

//1.打开可写流=>2.写入流=>3.结束写入=>4.关闭可写流
const ws = fs.createWriteStream('./04-ws.txt')

ws.on('finish',()=>{
	console.log('write stream done...')
})

ws.on('close',()=>{
	console.log('close write stream')
})

ws.write('hello')
ws.end('ok')