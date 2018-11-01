var btn = document.querySelector(".btn");
var content = document.querySelector(".content");
var fan = document.querySelector(".fan");
var span = Array.from(btn.querySelectorAll("span"));
for (var i = 0; i < span.length; i++) {
    span[i].onclick = function() {
        content.innerHTML = this.innerHTML;
    }
}