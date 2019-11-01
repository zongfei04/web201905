/*
* @Author: Chen
* @Date:   2019-10-31 20:13:26
* @Last Modified by:   Chen
* @Last Modified time: 2019-10-31 20:25:50
*/
const fs = require('fs')

//逐步操作
/*
	//1.打开文件
	const fd = fs.openSync('./01-aa.txt','a')
	//2.写入内容
	fs.writeSync(fd,'hello')
	//3.保存并退出
	fs.closeSync(fd)
*/
//合并操作
	fs.writeFileSync('./01-aa.txt','world',{flag:'a'})

