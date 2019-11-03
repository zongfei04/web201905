/*
* @Author: Chen
* @Date:   2019-11-01 20:30:52
* @Last Modified by:   Chen
* @Last Modified time: 2019-11-03 10:33:21
*/
;(function($){
	var $input = $('.todo-input')
	$input.on('keydown',function(ev){
		// console.log(ev.keyCode)
		if(ev.keyCode == 13){
			//发送ajax请求,添加数据
			$.ajax({
				url:'/add',
				type:"post",
				dataType:'json',
				success:function(data){
					console.log(data)
				},
				error:function(err){
					console.log(err)
				}
			})
		}
	})
})(jQuery)