$(function () {
    $(".cate-menu").click(function () {
        $(".sub").stop().slideUp();
        $(this).find(".sub").stop().slideToggle();
    });
});