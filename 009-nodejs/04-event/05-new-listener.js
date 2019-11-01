/*
* @Author: Chen
* @Date:   2019-10-31 18:42:24
* @Last Modified by:   Chen
* @Last Modified time: 2019-10-31 18:46:54
*/
const EventEmitter = require('events') 

class MyEmitter extends EventEmitter{

}

const emitter = new MyEmitter()


emitter.on('newListener',(eventName,callback)=>{
	console.log('execute newListener begin ...')
	console.log('eventName:::',eventName)
	callback && callback()
})

// emitter.emit('newListener')
emitter.on('show',()=>{
	console.log('show 1 ...')
})
emitter.on('test',()=>{
	console.log('test 1 ...')
})