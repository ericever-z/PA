define(function(){
	function Demo(){
		$("button.btn-primary").click(function(){
			
			showTip({
				content:"您有一条信息的消息，请注意查收。截止当前时间，您的欠费金额为100元！（默认30秒消失）"
			});
			
		});
		
		$("button.btn-warning").click(function(){
			
			showTip({
				type:"warning",
				content:"警告！您返回数据出错，请检查参数。截止当前时间，您的欠费金额为100元！",
				icon:"<i class='glyphicon glyphicon-alert'></i>",
				close:true
			});
			
		});
		
		$("button.btn-success").click(function(){
			
			showTip({
				type:"success",
				content:"成功！恒大在今天晚上的世界俱乐部大赛上成功击败巴塞罗那！<button class='btn btn-primary btn2 btn-sm'>分享</button>",
				icon:"<i class='glyphicon glyphicon-flag'></i>",
				close:true
			});
			
		});	
		
		$("button.btn-danger").click(function(){
			
			showTip({
				through:false,
				type:"danger",
				content:"注意！恒大在今天晚上的世界俱乐部大赛上成功击败巴塞罗那！",
				icon:"<i class='glyphicon glyphicon-flag'></i>",
				close:true
			});
			
		});	
		
		$("button.btn-danger-time").click(function(){
			
			showTip({
				time:null,
				through:false,
				type:"danger",
				content:"注意！恒大在今天晚上的世界俱乐部大赛上成功击败巴塞罗那！",
				icon:"<i class='glyphicon glyphicon-flag'></i>",
				close:true
			});
			
		});		
	}
	return Demo;
});