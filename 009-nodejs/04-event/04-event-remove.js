/*
* @Author: Chen
* @Date:   2019-10-31 18:22:27
* @Last Modified by:   Chen
* @Last Modified time: 2019-10-31 18:29:40
*/
const EventEmitter = require('events') 

class MyEmitter extends EventEmitter{

}

const emitter = new MyEmitter()

const listener1 = ()=>{
	console.log('bind show1 event...')
}
const listener2 = ()=>{
	console.log('bind show2 event...')
}

emitter.on('show',listener1)
emitter.on('show',listener2)

// emitter.off('show',listener)
emitter.removeListener('show',listener2)

console.log(emitter.off == emitter.removeListener)


emitter.emit('show')