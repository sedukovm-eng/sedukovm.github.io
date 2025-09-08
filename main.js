$(function () {
    let header = $(".header"); // твій header
    let headerH = header.innerHeight(); 
    let scrollPos = $(window).scrollTop();
    let nav = $(".nav"); 
    let navToggle = $("#navToggle"); 

    console.log("Hello, JS is working!");
    console.log("Header height: " + headerH);

    // Фіксований header при скролі
    $(window).on("scroll resize", function () {
        scrollPos = $(this).scrollTop();

        if (scrollPos > headerH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    });

    // Функція перевірки скролу (для ручного виклику)
    function checkScroll(scrollPos, headerH) {
        if (scrollPos > headerH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    // Плавний скрол по data-scroll
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let elementId = $(this).data("scroll");
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 70
        }, 700);
    });

    // Тогл меню (бургер)
    navToggle.on("click", function (event) {
        event.preventDefault();
        nav.toggleClass("show");
    });
});
