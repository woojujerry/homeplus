function slideBanner() {
    $(".banner-img").stop().animate({ marginLeft: -1200 }, 800, function () {
        $(".banner-img li:first").appendTo(".banner-img");
        $(".banner-img").css({ marginLeft: 0 });
    });
}
setInterval(slideBanner, 3000);