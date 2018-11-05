var btn = Array.from(document.querySelectorAll(".p"));
btn.forEach(function(v, i) {
    v.onclick = function() {
        alert("提交")
    }
})