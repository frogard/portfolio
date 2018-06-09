
$(document).ready(function () {

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

        $(".container").addClass("container--center container--center--" + navCircle); 
    }

});