define(function(){
	function Demo(){
			var the = $(".ndp-timerange-wrapper").timerange({
				lan:"en"// 中英文 "en", "cn"
			});	
		$("#data").click(function(){
			console.log(the.getVal());
		});
			
	}
	return Demo;
});