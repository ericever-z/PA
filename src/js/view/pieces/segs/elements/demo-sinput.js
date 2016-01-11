define(function(){
	function Demo(){
			$("div.ndp-sinput-wrapper[name=plain-sinput]").sinput({
				placeholder:"请输入"
			});	
			
			$("div.ndp-sinput-wrapper[name=icon-sinput1]").sinput({
				xion:"<span><i class='glyphicon glyphicon-lock'></i></span>",
				placeholder:"请输入"
			});	
			
			$("div.ndp-sinput-wrapper[name=icon-sinput2]").sinput({
				xion:"<span><i class='glyphicon glyphicon-folder-open'></i></span>",
				placeholder:"请输入",
				pos:"left"
			});	
			
			$("div.ndp-sinput-wrapper[name=stepper]").sinput({
				type:2,
				max:100,
				placeholder:"请输入数字",
				step:1,
				min:1,
				default:1
			});	
			
			$("div.ndp-sinput-wrapper[name=plain-title]").sinput({
				title:"user name"
			});		
			
			$("div.ndp-sinput-wrapper[name=disabled-title]").sinput({
				title:"user name",
				disabled:true
			});
			
			$("div.ndp-sinput-wrapper[name=plain-pwd]").sinput({	
				inputType:"password",
				xion:'<span class="switcher"><label><input type="checkbox" class="scheckbox"></label></span>',
				default:"1we232ertt"
			});	
			$("div.ndp-sinput-wrapper[name=plain-disabled]").sinput({	
				xion:"<span><i class='glyphicon glyphicon-folder-open'></i></span>",
				placeholder:"请输入",
				pos:"left",
				disabled:true
			});		
		
		
	}
	
	return Demo;
});