import './../scss/style.scss';

$(".home").addClass("active");

$(".tabs .port").click(() => {
    $(".portfolio").addClass("active");
    $(".home").removeClass("active");
    $(".back").addClass("shown");
});

$(".back").click(() => {
    $(".portfolio").removeClass("active");
    $(".home").addClass("active");
    $(".back").removeClass("shown");
});