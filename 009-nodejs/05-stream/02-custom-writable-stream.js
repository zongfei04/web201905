/*
* @Author: Chen
* @Date:   2019-10-31 19:08:47
* @Last Modified by:   Chen
* @Last Modified time: 2019-10-31 19:36:31
*/
const { Writable  } = require('stream')
// console.log(Writable)

/*
const write = new Writable()
write.write('hello') //The _write() method is not implemented
*/

class CustomStream extends Writable{
	_write(chunk, encoding, callback){
		console.log("chunk::",chunk)
		console.log("encoding::",encoding)
		// console.log("callback::",callback)
		callback()
	}
}

const write = new CustomStream()

write.on('finish',()=>{
	console.log('write done ....')
})
write.write('hello',()=>{
	console.log('write hello done')
})

write.write('good')
write.end('abcd')

