//slider
let currentSlide = 0;

setInterval(() => changeSlide(1), 5000);

function changeSlide(n) {
    currentSlide+= n;
    showSlide();
}
showSlide();

function showSlide() {
    const slides = document.getElementsByClassName('slides');
    const countSlides = slides.length -1;
    if ( currentSlide > countSlides ) {
        currentSlide = 0;
    }
    else  if ( currentSlide < 0) {
        currentSlide = countSlides;
    }
    for ( let i = 0; i <= countSlides; i++ ) {
        slides[i].style.display = 'none';
    }
    slides[currentSlide].style.display = 'block';
}

//nav
function isActive(currentId) {
    let element = document.getElementById(currentId);
    for (let i = 1; i <= 4; i++){
        document.getElementById('nav-'+i).classList.remove('active');
    }
    element.setAttribute("class", "active");
}