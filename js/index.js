var jet = document.getElementsByClassName(".jetSetter");
var woo = document.getElementsByClassName(".woo");

$(.jetSetter).on("mouseenter", function() {
    jet.style.backgroundColor = "#DAA189";
});

$(.jetSetter).on("mouseleave", function() {
    jet.style.backgroundColor = "#C5CEB9";
});

$(.woo).on("mouseenter", function() {
    woo.style.backgroundColor = "#DAA189";
});

$(.woo).on("mouseleave", function() {
    woo.style.backgroundColor = "#C5CEB9";
});