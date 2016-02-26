define(function(){
	function Demo(){
			$(".ndp-search-wrapper[name=plain]").search({
				placeholder:"请输入字符"
			});
			
			$(".ndp-search-wrapper[name=disable]").search({
				placeholder:"请输入字符",
				disabled:true
			});
			
			
			$(".ndp-search-wrapper[name=mix]").search({
				type:2,
				dropList:[{text:"中国"},{text:"美国"},{text:"德国"}]
			}).on("search_input_change",function(e){
				
			});	
		
			$(".ndp-search-wrapper[name=plain2]").search({
				type:3,
				dropList:[{text:"china"},{text:"USA"},{text:"德国"}],
			}).on("input_change",function(e){
				console.log(e.originalEvent.data);
			}).on("do_search",function(e){
				//用户输入内容，回车 或者点击搜索(放大镜) 触发这个事件
				console.log(e.originalEvent.data);//数据
			});
			
			$(".ndp-search-wrapper[name=mixall]").search({
				type:4,
				dropList:["china","usa","world"],
				dropList:[{text:"china"},{text:"USA"},{text:"德国"}],
			}).on("input_change",function(e){
				console.log(e.originalEvent.data);
			}).on("do_search",function(e){
				//用户输入内容，回车 或者点击搜索(放大镜) 触发这个事件
				console.log(e.originalEvent.data);//数据
			});			
		
		
	}
	return Demo;
});