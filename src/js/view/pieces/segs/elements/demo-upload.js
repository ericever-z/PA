define(function() {
    function Demo() {
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
