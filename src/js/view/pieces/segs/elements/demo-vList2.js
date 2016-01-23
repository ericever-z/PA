define(function(){
	function Demo(){
		var me = $(".ndp-vList2-wrapper[name=plain]").vList2({
			data:[{label:"广告投放",
				   icon:"<i class='glyphicon glyphicon-home'></i>",
				   sub:[
					{label:"河北"},
					{label:"河南"},
					{label:"陕西"}
				 ]},
				 {label:"资源监控",icon:"<i class='glyphicon glyphicon-book'></i>",
				  sub:[
						{label:"法国"},
						{label:"意大利"},
						{label:"德国"}
				 ]},
				 {label:"美洲每周",icon:"<i class='glyphicon glyphicon-knight'></i>",
				  sub:[
						{label:"美国"},
						{label:"加拿大"}
				 ]}					  
				]
			}).on("shrink_complete",function(){
				console.log("收缩完成");
			}).on("expand_complete",function(){
				console.log("展开完成");
			}).on("item_click",function(e,data){
				console.log(data);
			});
			
			$("button#ok").click(function(){
				me.fold();
			});

		
	};
	return Demo;
});