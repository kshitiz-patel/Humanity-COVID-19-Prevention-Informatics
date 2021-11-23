$(function() {
    $(document).scroll(function () {
        var $nav = $("nav");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

$(function() {

    // Returns width of browser view port
    var browser = $(window).width();
    // Returns width of HTML document
    var document = $(document).width();

    $('span.menu').click(function (e) {
        $('ul.nav').slideToggle('very slow');
        e.preventDefault();
    });

});