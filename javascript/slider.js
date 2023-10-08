var slideIndex = 0;
showSlides();
setInterval(showSlides, 2500);

function showSlides(){
    var slides = document.getElementsByClassName('slide');
// tablou din elemente 
for (var i = 0; i < slides.length; i++){
    slides[i].style.display="none";
}
slides[slideIndex].style.display="block";
slideIndex++;

if (slideIndex>=slides.length){
    slideIndex=0;
}
}
