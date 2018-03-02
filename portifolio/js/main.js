

var string = "Hi, my name is Adeniyi Olatunji Akala. I am a front-end developer, Customer Success expert, Strategist and a ninja.";
var str = string.split("");
var el = document.getElementById('content');
(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
var running = setTimeout(animate, 18);
})();

