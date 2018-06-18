
$(document).ready(function () {

    var icon = "nav-circle__inner-nav-circle__icon",
        zoom;

    $(".nav-circle__inner-nav-circle, .back").click(function () {
        if ($(this).hasClass("nav-circle__inner-nav-circle")) {
            zoom = "in";
        } else {
            zoom = "out";
        }

        if ($(this).parent().hasClass("about")) {
            changeView("about", zoom, "yes");
        } else if ($(this).parent().hasClass("school")) {
            changeView("school", zoom, "yes");
        } else if ($(this).parent().hasClass("work")) {
            changeView("work", zoom, "yes");
        } else {
            changeView("contact", zoom, "yes");
        }
    });

    function changeView(navCircle, zoom, skip) {

        if (zoom == "in" || skip == "no") {
            $(".nav__container").toggleClass("nav__container--center nav__container--center--" + navCircle);
            $("." + icon).toggleClass(icon + "--vanish");
            $("." + navCircle).find("." + icon).toggleClass(icon + "--vanish");
            $(".content__block." + navCircle).toggleClass("content__block--added");

            if (zoom == "in") {
                setTimeout(function () {
                    elevator();
                }, 700);
            }

        } else {
            elevator();
        }

        function elevator() {
            $(".content__block." + navCircle).toggleClass("content__block--active");
            $(".nav").toggleClass("in-view").toggleClass("ascend");
            $(".content").toggleClass("descend").toggleClass("in-view");

            if (zoom == "in") {
                setTimeout(function () {
                    $(".page-wrapper").addClass("page-wrapper" + "--scroll");
                }, 1000);
            } else {
                $(".page-wrapper").removeClass("page-wrapper" + "--scroll");
                setTimeout(function () {
                    changeView(navCircle, zoom, "no");
                }, 700);
            }
        }
    }
});