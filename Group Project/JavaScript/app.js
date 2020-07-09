
function showMenu() {
    var x = document.getElementById("phoneNav");
    if (x.style.display === "none"){
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

const parralax = document.getElementById('parralax')

window.addEventListener('scroll', function(){

    let scrollPosition = window.pageYOffset

    parralax.style.backgroundPositionY = scrollPosition * 0.5 + 'px'
})