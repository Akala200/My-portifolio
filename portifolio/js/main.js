

var string = "Hi, my name is Adeniyi Olatunji Akala. I am a front-end developer, Customer Success expert, Strategist and a ninja.";
var str = string.split("");
var el = document.getElementById('content');
(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
var running = setTimeout(animate, 18);
})();


$(function() {
    var header = $(".navbar");
  
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            header.addClass("scrolled");
        } else {
            header.removeClass("scrolled");
        }
    });
  
});