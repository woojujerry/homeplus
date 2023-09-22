function slide() {
    $(".imgbox").stop().animate({ marginLeft: -1200 }, "fast", function () {
        $(".imgbox li:first").appendTo(".imgbox");
        $(".imgbox").css({ marginLeft: 0 });
    });
}

setInterval(slide, 3000);