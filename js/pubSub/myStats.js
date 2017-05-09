(function () {

    var count = 0;
    var $block = $('.my-stats');
    var $template = $('#my-stats').html();

    function _init() {
        $block.html(Mustache.render($template, { count : count }))
    }

    function statsView(countPeople) {
        count = countPeople;
        _init();
    }

    events.on("peopleChanged", statsView);

    _init();

})();