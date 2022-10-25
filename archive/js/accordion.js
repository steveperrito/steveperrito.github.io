$(function () {
    $('#accordion').on('shown.bs.collapse', function () {
        $('.panel-collapse').each(function (indx, el) {
            var aryOfSpans = $('.glyphicon');
            var relativeSpan = aryOfSpans.eq(indx);
            if ($(this).is(':visible')) {
                relativeSpan.removeClass('glyphicon-plus');
                relativeSpan.addClass('glyphicon-minus');
            } else {
                relativeSpan.removeClass('glyphicon-minus');
                relativeSpan.addClass('glyphicon-plus');
            }
        })
    });

    $('#accordion').on('hidden.bs.collapse', function () {
        if ($('.in').length == 0 && $('.collapsing').length == 1) {
            $('.glyphicon').each(function () {
                $(this).removeClass('glyphicon-minus');
                $(this).addClass('glyphicon-plus');
            })
        }
    });

    setTimeout(function(){
        sortEm('#Projects');
    }, 750);

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var container = '#' + $(e.target).text();
        //var qStringMarker = container.replace(/#/, '');
        sortEm(container);
    });

    function sortEm (selector){
        container = $(selector).isotope({
            itemSelector: '.panel',
            getSortData: {
                random: function(){
                    return Math.random()*10;
                }
            }
        });
        container.isotope({
            sortBy: 'random'
        });

        container.isotope('updateSortData').isotope();
    }
});