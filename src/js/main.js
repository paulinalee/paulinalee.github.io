import './../scss/style.scss';
import png from './../assets/mountains.jpg'
import pdf from './../assets/resumef18.pdf'

$("#bg-image").addClass("activate");
$("#everything").addClass("show");
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