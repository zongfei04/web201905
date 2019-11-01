/*
* @Author: Chen
* @Date:   2019-10-31 19:37:58
* @Last Modified by:   Chen
* @Last Modified time: 2019-10-31 19:52:16
*/
const { Readable  } = require('stream')

/*
const reader = new Readable()
reader.on('data',(chunk)=>{
	console.log(chunk)// The _read() method is not implemented
})
*/

class CustomReadable extends Readable{
	constructor(){
		super()
		this.index = 0
	}
	_read(){
		this.index ++ 
		if(this.index < 5){
			this.push(this.index+'')
		}else{
			this.push(null)
		}
	}
}
const reader = new CustomReadable()

/*
//获取数据流程
	//1.定义一个变量存数据
	let body = ''
	//2.监听data事件获取数据
	reader.on('data',(chunk)=>{
		console.log(chunk)
		body += chunk
	})
	//3.获取数据完毕监听end事件
	reader.on('end',()=>{
		console.log(body)
	})
*/

reader.pipe(process.stdout)