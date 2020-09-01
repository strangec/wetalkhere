$(document).ready(function () {
    $("#header").click(function () {
        $("#header_p").fadeOut(function () {
            $("#header_p").text(($("#header_p").text() == 'What do you want to say today?') ? "It's just between us" : "What do you want to say today?").fadeIn();
        })
    })
});
