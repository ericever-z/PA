define(function(){
	function Demo(){
			$("div.ndp-bread-wrapper[name=plain-bread]").bread({
				list:["Home","Library","Data"]
			});
		
			$("div.ndp-bread-wrapper[name=split-bread]").bread({
				list:["Home","Library","Data"],
				spliter:">"
			});
		
			$("div.ndp-bread-wrapper[name=home-bread]").bread({
				home:"<i class='glyphicon glyphicon-home'></i>",
				list:["Home","Library","Data"],
				spliter:">"
			});		
	}
	return Demo;
});