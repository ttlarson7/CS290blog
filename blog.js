const back = document.getElementById("backtoprofile")

back.addEventListener("click", function(){
    window.location.href = "index.html"
});

const hidden = document.getElementById("hidden1")
const showblog1 = document.getElementById("blog1")

showblog1.addEventListener("mouseenter", function() {
    showblog1.style.width = "61%";
    showblog1.style.background = "#f59d7a"
});

showblog1.addEventListener("mouseleave", function(){
    showblog1.style.width = "60%"
    showblog1.style.background = "#eb5e28"
})

showblog1.addEventListener("click", function() {
    const dis = window.getComputedStyle(hidden);
    const displayValue = dis.getPropertyValue("display");
    if (displayValue === "none") {
        hidden.style.display = "flex";
        hidden.style.opacity = "1";
    } else {
        hidden.style.opacity = "0"; // Fade out first
        hidden.style.display = "none"; // Hide after the fade-out transition
    }
});
