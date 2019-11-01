/*
* @Author: Chen
* @Date:   2019-10-31 20:39:57
* @Last Modified by:   Chen
* @Last Modified time: 2019-10-31 20:52:35
*/
const fs = require('fs')
const util = require('util')

//逐步操作
	/*
	//1.打开文件
	fs.open('./01-aa.txt','w',(err,fd)=>{
		if(err){
			console.log('open file err')
		}else{
			//2.写入内容
			fs.write(fd,'NodeJS',(err)=>{
				if(err){
					console.log(err)
					console.log('write file err')
				}else{
					//3.保存并退出
					fs.close(fd,(err)=>{
						if(err){
							console.log('close file err')
						}
					})
				}
			})
		}
	})
	*/
	
	
//合并操作
/*
	fs.writeFile('./01-aa.txt','HTML',{flag:'a'},(err)=>{
		if(err){
			console.log(err)
		}
	})
*/
//promise操作异步写文件
const writefile = util.promisify(fs.writeFile)
writefile('./01-aa.txt','CSS',{flag:'a'})
.then(()=>{
	console.log('write file success')
})
.catch(err=>{
	console.log('write file err')
})