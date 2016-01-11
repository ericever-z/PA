define(function(){
	function Demo(){
				$("button.btn-primary").click(function(){
					$("#confirm-holder").confirm({
						content:"你的报告已经准备完毕，提交之后无法修改，你确定提交？"
					});
				});	
			
				$("button.btn-warning").click(function(){
					$("#confirm-holder").confirm({
						icon:"<i class='glyphicon glyphicon-globe'></i>",
						content:"这里显示的是一个地球，用来测试图片在?",
						btnOK:"确定",
						btnCANCEL:"CANCEL"
					});
				});			
	};
	
	return Demo;
});