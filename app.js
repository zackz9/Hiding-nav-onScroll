let lastScrollTop = 0 ;
const nav = document.getElementById('nav');

window.addEventListener('scroll', function() {

    var scrollTop = document.pageYOffset || document.documentElement.scrollTop ;

    if(scrollTop > lastScrollTop ) {
        nav.style.top = "-80px";

    } else {
        nav.style.top = "0";
    }

    lastScrollTop = scrollTop;

})