const btnScrollToTop = document.getElementById("buttonToTop");
var myElement = document.getElementsByClassName("scrl");
var topPos = myElement.offsetTop;

btnScrollToTop.addEventListener("click", function () {
    document.getElementById("scrl_top").scrollTop = topPos;
});
