$(function(){
    $('#accordion').on('shown.bs.collapse', function(){
        $('.panel-collapse').each(function(indx, el){
            var aryOfSpans = $('.glyphicon');
            var relativeSpan = aryOfSpans.eq(indx);
            if($(this).is(':visible')){
                relativeSpan.removeClass('glyphicon-plus');
                relativeSpan.addClass('glyphicon-minus');
            } else {
                relativeSpan.removeClass('glyphicon-minus');
                relativeSpan.addClass('glyphicon-plus');
            }
        })
    });

    $('#accordion').on('hidden.bs.collapse', function(){
        if($('.in').length == 0 && $('.collapsing').length == 1){
            $('.glyphicon').each(function(){
                $(this).removeClass('glyphicon-minus');
                $(this).addClass('glyphicon-plus');
            })
        }
    })
});