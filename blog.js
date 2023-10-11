const back = document.getElementById("backtoprofile")

back.addEventListener("click", function(){
    window.location.href = "index.html"
});

//highlights the specific blog
function hightlight(element){
    element.addEventListener("mouseenter", function() {
        element.style.backgroundImage = "linear-gradient(to left, #6930c3, #56cfe1)"
    });

    element.addEventListener("mouseleave", function(){
        element.style.background = "#eb5e28"
    })
}


//used to expand each blog for user to read
function expand(triggerElement, hiddenElement, height){
    triggerElement.addEventListener("click", function() {
        //gets the value of the css display element
        const dis = window.getComputedStyle(hiddenElement);
        const displayValue = dis.getPropertyValue("display");
        //switches that value depending on what it is
        if (displayValue === "none") {
            hiddenElement.style.opacity = 0;
            hiddenElement.style.display = "flex";
            triggerElement.style.height = hiddenElement.offsetHeight + height + "px";
            setTimeout(function(){
                hiddenElement.style.opacity = 1;
            }, 300);
            
        } else {
            hiddenElement.style.opacity = 0;
            hiddenElement.style.display = "none"; // Hide after the fade-out transition
            triggerElement.style.height = height + "px";
            
        }
    });
}


//Adds the highlight effect to the blog posts

const posts = document.querySelectorAll(".blog1")


posts.forEach(function(element){
    const divHeight = element.offsetHeight;
    hightlight(element)
    const childElement = element.querySelector("[id^='hidden']");
    expand(element, childElement, divHeight)
    
})






    
