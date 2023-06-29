// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("nav--bar").style.backgroundColor = "#000";
    }else{
        document.getElementById("nav--bar").style.backgroundColor = "transparent";
    }
}