
$('.login').on("click", (function() {

    if($('.user').val() == "voluntar1" &&
       $('.pass').val() == "parola1") {
        window.location.replace("index.html");

    } else if ($('.user').val() == "voluntar2" &&
                $('.pass').val() == "parola2") {
        window.location.replace("index.html");
    } else {
        $('.message').css('display', 'block');
    }

}));