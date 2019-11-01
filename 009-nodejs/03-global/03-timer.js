/*
* @Author: Chen
* @Date:   2019-10-29 19:20:12
* @Last Modified by:   Chen
* @Last Modified time: 2019-10-29 19:29:58
*/

/*
const t1 = setTimeout(()=>{
	console.log('t1...')
},100)

clearTimeout(t1)

console.log('after t1 ...')


const t2 = setInterval(()=>{
	console.log('t2...')
},200)

clearTimeout(t2)
console.log('after t2 ...')

*/

/*
const t1 = setTimeout(()=>{
	console.log('t1...')
},0)

console.log('after t1 ...')

const t2 = setInterval(()=>{
	console.log('t2...')
},200)

console.log('after t2 ...')

const t3 = setImmediate(()=>{
	console.log('t3...')
})
*/
const t1 = setTimeout(()=>{
	console.log('t1...')
},0)
process.nextTick(()=>{
	console.log('t4...')
})

console.log('after t1...')