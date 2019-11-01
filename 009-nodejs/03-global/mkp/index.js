/*
* @Author: Chen
* @Date:   2019-10-29 18:56:15
* @Last Modified by:   Chen
* @Last Modified time: 2019-10-29 19:07:11
*/
// console.log(process.argv[2])


const fs = require('fs')
//根据传入的参数信息创建前端项目目录结构
//kuazhu =>css img js index.html

//1.获取项目名称
const filename = process.argv[2]
//2.根据项目名称创建基础文件夹以及对应子文件夹和文件

fs.mkdirSync('./'+filename)
fs.mkdirSync('./'+filename+'/css')
fs.mkdirSync('./'+filename+'/js')
fs.mkdirSync('./'+filename+'/img')
