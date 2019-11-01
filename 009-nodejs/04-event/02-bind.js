/*
* @Author: Chen
* @Date:   2019-10-29 20:41:13
* @Last Modified by:   Chen
* @Last Modified time: 2019-10-29 20:51:17
*/
const EventEmitter = require('events')

class MyEmitter extends EventEmitter{}

const emitter = new MyEmitter()

/*
//1.on监听事件
emitter.on('test',()=>{
	console.log('bind test1 ...')
})
emitter.on('test',()=>{
	console.log('bind test2 ...')
})
//2.addListener监听事件
emitter.addListener('test',()=>{
	console.log('bind test3 ...')
})

emitter.emit('test')
emitter.emit('test')
emitter.emit('test')
emitter.emit('test')
console.log(emitter.addListener == emitter.on)
*/

//3.once监听事件
/*
emitter.once('test',()=>{
	console.log('bind test4 ...')
})
emitter.emit('test')
emitter.emit('test')
emitter.emit('test')
*/


//一个EventEmitter对象默认最大可以有10个监听
//可以通过emitter.setMaxListeners(n)来设置最大监听数
emitter.setMaxListeners(20)
emitter.on('test',()=>{
	console.log('bind test1 ...')
})
emitter.on('test',()=>{
	console.log('bind test2 ...')
})
emitter.on('test',()=>{
	console.log('bind test3 ...')
})
emitter.on('test',()=>{
	console.log('bind test4 ...')
})
emitter.on('test',()=>{
	console.log('bind test5 ...')
})
emitter.on('test',()=>{
	console.log('bind test6 ...')
})
emitter.on('test',()=>{
	console.log('bind test7 ...')
})
emitter.on('test',()=>{
	console.log('bind test8 ...')
})
emitter.on('test',()=>{
	console.log('bind test9 ...')
})
emitter.on('test',()=>{
	console.log('bind test10 ...')
})
emitter.on('test',()=>{
	console.log('bind test11 ...')
})

emitter.emit('test')
