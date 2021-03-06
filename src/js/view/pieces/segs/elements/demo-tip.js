define(function(){
	function Demo(){
		$("button.btn-primary").click(function(){
			
			showTip({
				content:"您有一条信息的消息，请注意查收。截止当前时间，您的欠费金额为100元！（默认30秒消失）",
				closeCallback:function(){//回调，用户关闭tip或者时间到期
					console.log("关闭 primary");
				}
			});
			
		});
		
		$("button.btn-warning").click(function(){
			
			showTip({
				type:"warning",
				content:"警告！您返回数据出错，请检查参数。截止当前时间，您的欠费金额为100元！",
				icon:"<i class='glyphicon glyphicon-alert'></i>",
				close:true,
				closeCallback:function(){//回调，用户关闭tip或者时间到期
					console.log("关闭 waning");
				}				
			});
			
		});
		
		$("button.btn-success").click(function(){
			
			showTip({
				type:"success",
				content:"成功！恒大在今天晚上的世界俱乐部大赛上成功击败巴塞罗那！<button class='btn btn-success btn2 btn-sm'>分享</button>",
				icon:"<i class='glyphicon glyphicon-flag'></i>",
				close:true,
				closeCallback:function(){//回调，用户关闭tip或者时间到期
					console.log("关闭 success");
				},
				clickCallback:function(ta,tip){//回调，用户点击了除x 关闭按钮之外的tip区域
					if(ta.tagName=="BUTTON" && $(ta).hasClass("btn2")){
						console.log("用户点击了，tip上面的按钮");
					}
				}
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
		
		$("button.btn-success2").click(function(){
			
			showTip({
				time:null,
				through:false,
				type:"danger",
				content:"wait！恒大在今天晚上的世界俱乐部大赛上成功击败巴塞罗那！",
				icon:"<i class='glyphicon glyphicon-home'></i>",
				close:true
			});
			
		});	
		
		
		$("button#temp-btn").click(function(){
			
			showTip({
				time:null,// 永不消失， 如果需要定时消失，这里写数字，30 （表示30s后自动消失）
				type:"danger",
				bind:$(".temp-window"),//显示在哪里，DOM jquery对象
				content:"注意！恒大在今天晚上的世界俱乐部大赛上成功击败巴塞罗那！",
				icon:"<i class='glyphicon glyphicon-flag'></i>",
				close:true
			});
			
		});		
		
	}
	return Demo;
});