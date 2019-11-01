/*
* @Author: Chen
* @Date:   2019-10-31 18:02:29
* @Last Modified by:   Chen
* @Last Modified time: 2019-10-31 18:10:48
*/
const EventEmitter = require('events') 

class MyEmitter extends EventEmitter{

}

const emitter = new MyEmitter()

emitter.on('show',(arg1,arg2)=>{
	console.log(arg1,arg2)
})
emitter.on('show',()=>{
	console.log('do sometging ....')
})
const arr = ['11','22']
// emitter.emit('show','aa','bb')
emitter.emit('show',...arr)
