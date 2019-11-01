/*
* @Author: Chen
* @Date:   2019-11-01 19:08:25
* @Last Modified by:   Chen
* @Last Modified time: 2019-11-01 19:19:06
*/
const fs = require('fs')

//1.打开可读流=>2.读取流=>3.结束读取=>4.关闭可读流

const rs = fs.createReadStream('./a.mp4')
const ws = fs.createWriteStream('./b.mp4')
rs.pipe(ws)


/*
rs.on('end',()=>{
	console.log('read stream done')
})
rs.on('close',()=>{
	console.log('close read stream')
})

rs.on('data',(chunk)=>{
	console.log(chunk)
})
*/
