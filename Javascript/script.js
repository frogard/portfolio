
$(document).ready(function () {

    var icon = "nav-circle__inner-nav-circle__icon";

    $(".nav-circle__inner-nav-circle").click(function () {
        if ($(this).parent().hasClass("about")) {
            activateNavCircle("about");
        } else if ($(this).parent().hasClass("school")) {
            activateNavCircle("school");
        } else if ($(this).parent().hasClass("work")) {
            activateNavCircle("work");
        } else {
            activateNavCircle("contact");
        }
    });

    function activateNavCircle(navCircle) {
        $(".nav__container").addClass("nav__container--center nav__container--center--" + navCircle);
        $("." + icon).addClass(icon + "--vanish");
        $("." + navCircle).find("." + icon).addClass(icon + "--remain");

        function ascendContent () {
            $(".content__block." + navCircle).addClass("content__block--active");
            $(".nav, .content").addClass("ascend");

            function settleContent () {
                $(".page-wrapper").addClass("page-wrapper" + "--scroll");
                $(".nav").addClass("nav" + "--dismissed");
                $(".content").addClass("content" + "--settled");
            }

            setTimeout(function() {
                settleContent();
            }, 1000);
        }

        setTimeout(function() {
            ascendContent();
        }, 700);
    }

});