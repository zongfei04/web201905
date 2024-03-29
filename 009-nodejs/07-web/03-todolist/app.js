/*
* @Author: Chen
* @Date:   2019-11-01 20:14:04
* @Last Modified by:   Chen
* @Last Modified time: 2019-11-03 15:28:07
*/
const http = require('http')
const path = require('path')
const fs = require('fs')
const url = require('url')

const swig = require('swig')


const mime = require('./mime.json')
const { get } = require('./model/item.js')

const server = http.createServer((req,res)=>{
	
	// console.log(req.url)
	//处理静态资源
	const parse = url.parse(req.url,true)
	const filePath =req.url
	
	const pathname = parse.pathname

	//路由:根据不同的请求地址处理不同的逻辑
	//1.请求首页处理
	if(pathname == '/' || pathname == '/index.html'){
		//获取首页数据
		get()
		.then(data=>{
			// console.log(result)
			//引入模板处理数据
			const filename = path.normalize(__dirname+'/static/index.html')
			var template = swig.compileFile(filename)
			const html = template({
				data:data
			})
			res.setHeader('Content-type','text/html;charset="utf-8"')
			res.end(html)
		})	
		.catch(err=>{
			res.setHeader('Content-type','text/html;charset="utf-8"')
			res.statusCode = 404
			res.end('<h1>你请求的地址出错啦</h1>')
		})
	}
	else if(pathname == '/add'){//处理添加数据请求
		console.log('add ...')
		res.end('ok')
	}
	else if(pathname == '/delete'){//处理删除数据请求

	}else{//处理静态资源
		const filename = path.normalize(__dirname+'/static/'+filePath)
		fs.readFile(filename,{encoding:'utf-8'},(err,data)=>{
			if(err){
				res.setHeader('Content-type','text/html;charset="utf-8"')
				res.statusCode = 404
				res.end('<h1>你请求的地址出错啦</h1>')
			}else{
				//根据请求的文件决定不同的文档类型
				//根据文档的后缀名决定文档类型
				const extname = path.extname(req.url)
				const mimeType = mime[extname]
				// console.log(mimeType)
				res.setHeader('Content-type',mimeType+';charset="utf-8"')
				res.end(data)
			}
		})
	}











	
})

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running in http://127.0.0.1:3000')
})
