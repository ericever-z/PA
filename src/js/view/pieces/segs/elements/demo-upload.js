define(function() {
    function Demo () {
        var fu = new FileUpload({
            container: $('.upload-container'),
            ajax: {
                url: './upload.php'
            },
            allowSize: [],
            type: 'image'
        });
    }
    return Demo;

});
