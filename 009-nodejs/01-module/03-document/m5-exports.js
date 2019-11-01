/*
* @Author: Chen
* @Date:   2019-10-28 19:03:35
* @Last Modified by:   Chen
* @Last Modified time: 2019-10-28 19:13:16
*/
// console.log(exports)
// console.log(module.exports)
// console.log(exports == module.exports)

const str = 'hello'
const obj = {
	name:'tom'
}
const fn = function (){
	console.log('fn...')
}

console.log('require m5')


/*
exports.str = str 
exports.obj = obj
exports.fn = fn



module.exports.str = str 
module.exports.obj = obj
module.exports.fn = fn
*/

/*
exports = {
	str,
	obj,
	fn
}
*/

module.exports = {
	str,
	obj,
	fn
}