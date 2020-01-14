window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progress-bar").style.width = scrolled + "%";
}

const logo = document.querySelectorAll("#addison path");

console.log(logo);
console.log(logo.length);
console.log(logo[1].getTotalLength);

for (let i = 0; i < logo.length; i++) {
    console.log('Letter', i, 'is', logo[i].getTotalLength());
}

var rellax = new Rellax('.rellax');