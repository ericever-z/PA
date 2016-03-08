define(function() {
    function Demo () {
//        var fu = new FileUpload({
//            container: $('.upload-container'),
//            ajax: {
//                url: './upload.php'
//            },
//            allowSize: [],
//            type: 'image'
//        });
		
			console.log($('.upload-container').get(0));
			$('.upload-container').fileupload({
				ajax: {
					url: '/upload.php'
				},
				allowSize: [],
				type: 'image'
			});	
		
    }
    return Demo;
});
