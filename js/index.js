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

// hover effect
$(document).ready(function(){
    $('#port1').mouseover(function(){
        $('#proj1').show();
    });
    $('#port1').mouseout(function(){
        $('#proj1').hide();
    });
});

$(document).ready(function(){
    $('#port2').mouseover(function(){
        $('#proj2').show();
    });
    $('#port2').mouseout(function(){
        $('#proj2').hide();
    });
});

$(document).ready(function(){
    $('#port3').mouseover(function(){
        $('#proj3').show();
    });
    $('#port3').mouseout(function(){
        $('#proj3').hide();
    });
});

$(document).ready(function(){
    $('#port4').mouseover(function(){
        $('#proj4').show();
    });
    $('#port4').mouseout(function(){
        $('#proj4').hide();
    });
});

$(document).ready(function(){
    $('#port5').mouseover(function(){
        $('#proj5').show();
    });
    $('#port5').mouseout(function(){
        $('#proj5').hide();
    });
});

$(document).ready(function(){
    $('#port6').mouseover(function(){
        $('#proj6').show();
    });
    $('#port6').mouseout(function(){
        $('#proj6').hide();
    });
});

$(document).ready(function(){
    $('#port7').mouseover(function(){
        $('#proj7').show();
    });
    $('#port7').mouseout(function(){
        $('#proj7').hide();
    });
});

$(document).ready(function(){
    $('#port8').mouseover(function(){
        $('#proj8').show();
    });
    $('#port8').mouseout(function(){
        $('#proj8').hide();
    });
});

// forms validation

