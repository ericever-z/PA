define(function(){
	function Demo(){
        var hwd=$("div.ndp-field-wrapper").field();

        $("#intag").click(function(){
            hwd.addTag({val:"1130",text:'hello world'});
        });
        $("#intxt").click(function(){
            hwd.getContent();
        }); 	
	}
	return Demo;
});