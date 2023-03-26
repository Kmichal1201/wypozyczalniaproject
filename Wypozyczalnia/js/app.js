/*jslint devel: true */
document.addEventListener("DOMContentLoaded",function(){
    //slider
    const slider = document.querySelector(".slider");
    const gallery = document.querySelector(".galery");
    const sliderLeft = document.querySelector(".slider-left");
    const sliderRight = document.querySelector(".slider-right");
    const slide = document.querySelectorAll(".slider li");
    const slideWidth = slide[0].clientWidth;
    let currentIndex = 0;
    
    function goToSlide(index){
        if(index < 0){
            index = slide.length-1;
        }else if (index > slide.length-1){
            index = 0;
        }
        slider.style.right = index * (slideWidth) + "px";
        currentIndex = index;
    }
    
    function nextSlide(){
        goToSlide(currentIndex + 1);
    }
    
    function prevSlide(){
        goToSlide(currentIndex - 1);
    }
    
    sliderLeft.addEventListener("click",prevSlide);
    sliderRight.addEventListener("click", nextSlide);
    
    // goUp && goDown
    
    const goUpButton = document.querySelector(".go-up");
    const goDownButton = document.querySelector(".go-down");
    const checkOfferBtn = document.querySelector(".check-offer");
    
    goDownButton.addEventListener("click",function(){
       window.scroll({
           top: 1900,
           left: 0,
           behavior: "smooth",
       });
    });
    goUpButton.addEventListener("click", function(){
        window.scroll({
           top: 0,
           left: 0,
           behavior: "smooth",
       });
    });
    checkOfferBtn.addEventListener("click", function(){
        window.scroll({
           top: 930,
           left: 0,
           behavior: "smooth",
       });
    })
    
});