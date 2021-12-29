// toggle effect
$(document).ready(function(){
    $('.design').click(function(){
            $('.design').toggle();
                $('#para-one').toggle();
                $('#para-one').click(function(){
                    $('.design').toggle();
                    $('#para-one').hide();
                    $('.design').show();
                });
            });

    $('.dev').click(function(){
        $('.dev').toggle();
        $('#para-two').toggle();
        $('#para-two').click(function(){
            $('.dev').toggle();
            $('#para-two').hide();
            $('.dev').show();
        });
    });

    $('.product').click(function(){
        $('.product').toggle();
        $('#para-three').toggle();
        $('#para-three').click(function(){
            $('.product').toggle();
            $('#para-three').hide();
            $('.product').show();
        });
    });
});
