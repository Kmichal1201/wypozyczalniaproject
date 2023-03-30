document.addEventListener("DOMContentLoaded",function(){
    
    const downArrow = document.querySelector(".down");
    const upArrow = document.querySelector(".up");
    const checkOffer = document.querySelector(".check")
    
    downArrow.addEventListener("click", function(){
        window.scroll({
            top: 2500,
           left: 0,
           behavior: "smooth",
        });
    });
    
    upArrow.addEventListener("click", function(){
       window.scroll({
           top: 0,
           left: 0,
           behavior: "smooth",
       }); 
    });
    
    checkOffer.addEventListener("click", function(){
        window.scroll({
           top: 1650,
           left: 0,
           behavior: "smooth",
       });
    });
    
});