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
	}
	return Demo;
});