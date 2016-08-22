$(document).ready(function() {
    $('.ryu').mouseenter(function() {
            $('.ryu-still').hide();
            $('.ryu-ready').show();
        })
        .mouseleave(function() {
            $('.ryu-ready').hide();
            $('.ryu-still').show();
        })
        .mousedown(function() {
            playHadouken();
            $('.ryu-ready').hide();
            $('.ryu-still').hide();
            $('.ryu-throwing').show();
            $('.hadouken').finish().show().animate({ 'left': '1020px' }, 500, function() {
                $('.hadouken').hide();
                $('.hadouken').css('left', '520px');
            });
        })
        .mouseup(function() {
            $('.ryu-throwing').hide();
            $('.ryu-ready').show();
            $('.ryu-still').hide();
        })
    $(document).keydown(function(event) {
        if (event.which == 88) {
            playHadouken();
            $('.ryu-still').hide();
            $('.ryu-ready').hide();
            $('.ryu-throwing').hide();
            $('.ryu-cool').show();

        }
    });
    $(document).keyup(function(event) {
        if (event.which == 88) {
//$('#hadouken-sound')[0].pause();
        $('.ryu-still').show();
        $('.ryu-ready').hide();
        $('.ryu-throwing').hide();
        $('.ryu-cool').hide();

}

    });
});

function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}
function playHard() {
    $('#hard-sound')[0].volume = 0.5;
    $('#hard-sound')[0].load();
    $('#hard-sound')[0].play();


}
