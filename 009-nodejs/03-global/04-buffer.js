/*
* @Author: Chen
* @Date:   2019-10-29 19:45:32
* @Last Modified by:   Chen
* @Last Modified time: 2019-10-29 20:04:28
*/
//Buffer是用来存放二进制数据的容器
//会将数据已十六进制数据存储
//一个二进制的0 或者 1 代表了 1bit(位)
//8bit(位) = 1B(字节) = 2个十六进制数
const buf1 = Buffer.from('z')
console.log(buf1)//<Buffer 7a> 10100101

/*
1024B = 1K
1024K = 1M
1024M = 1G
1024G = 1T

*/
//一个汉字 = 3个字节
const buf2 = Buffer.from('好')
console.log(buf2)//<Buffer e5 a5 bd>


const buf3 = Buffer.alloc(10)
console.log(buf3)

buf3[0] = 0xfa
buf3[1] = 99
buf3[9] = 0x0f
buf3[10] = 0xaa
console.log(buf3)

//e5 a5 bd
const buf4 = Buffer.alloc(3)
buf4[0] = 0xe5
buf4[1] = 0xa5
buf4[2] = 0xbd
console.log(buf4.toString())