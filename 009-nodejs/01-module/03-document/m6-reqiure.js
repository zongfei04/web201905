/*
* @Author: Chen
* @Date:   2019-10-28 19:07:15
* @Last Modified by:   Chen
* @Last Modified time: 2019-10-28 19:17:34
*/

//require('文件名'),
//执行对应的文件并且返回该文件对应的modeule.exports对象
/*
const req = require('./m5-exports.js')
console.log(req.str)
console.log(req.obj)
console.log(req.fn)
*/


const { str,obj,fn } = require('./m5-exports.js')
console.log(str)
console.log(obj)
console.log(fn)
fn()