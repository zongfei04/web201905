/*
* @Author: Chen
* @Date:   2019-11-01 18:06:03
* @Last Modified by:   Chen
* @Last Modified time: 2019-11-01 18:41:15
*/
const fs = require('fs')
const util = require('util')

//同步读文件
	//逐步对文件
		/*
		//1.打开文件
		const fd = fs.openSync('./03.txt','r')
		//2.读取文件内容
		let buf = Buffer.alloc(100)
		fs.readSync(fd,buf,0,50,0)
		console.log(buf)
		//3.关闭文件
		fs.closeSync(fd)
		*/
	//合并操作
	/*	
		const buf = fs.readFileSync('./03.txt',{flag:'r',encoding:'utf-8'})
		console.log(buf)
	*/

//异步读文件
	//1.打开文件 
	/*
	fs.open('./03.txt','r',(err,fd)=>{
		if(err){
			console.log('open file err',err)
		}else{
			//2.读取文件内容
			let buf = Buffer.alloc(100)
			fs.read(fd,buf,0,50,0,(err)=>{
				if(err){
					console.log('read file err',err)
				}else{
					console.log(buf)
				}

				//3.关闭文件
				fs.close(fd,(err)=>{
					if(err){
						console.log('close file err',err)
					}
				})
			})
		}
	})
	*/
//合并操作
/*
	fs.readFile('./03.txt',{flag:'r',encoding:'utf-8'},(err,data)=>{
		if(err){
			console.log('read file err',err)
		}else{
			console.log(data)
		}
	})
*/


//异步读取文件
const rs = util.promisify(fs.readFile)
rs('./03.txt',{flag:'r',encoding:'utf-8'})
.then(data=>{
	console.log(data)
})
.catch(err=>{
	console.log(err)
})
