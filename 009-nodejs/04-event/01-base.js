/*
* @Author: Chen
* @Date:   2019-10-29 20:21:13
* @Last Modified by:   Chen
* @Last Modified time: 2019-10-29 20:26:51
*/
const EventEmitter = require('events')
// console.log(EventEmitter)

/*
//1.生成事件触发器实例
const emitter = new EventEmitter()
//2.监听事件
emitter.on('test',()=>{
	console.log('bind test ....')
})
//3.触发事件
emitter.emit('test')
*/


class MyEmitter extends EventEmitter{

}
//1.生成事件触发器实例
const emitter = new MyEmitter()
//2.监听事件
emitter.on('test',()=>{
	console.log('bind test ....')
})
//3.触发事件
emitter.emit('test')
