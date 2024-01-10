let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

function currentSlide(n) {
    slideIndex = n;
    showSlides(slideIndex);
}

function showSlides(n) {
    let slides = document.getElementsByClassName('slide');
    let dots = document.getElementsByClassName('dot');

    if(n > slides.length) {
        slideIndex = 1;
    } else if(n < 1) {
        slideIndex = slides.length;
    }

    for(let i = 0 ; i < slides.length; i++) {
        slides[i].style.display = 'none';
        dots[i].className = dots[i].className.replace(' active', '');
    }

    slides[slideIndex - 1].style.display = 'flex';
    dots[slideIndex - 1].className = dots[slideIndex - 1].className + ' active';
}
