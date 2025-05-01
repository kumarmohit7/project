
$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            // $('.navbar').removeClass("sticky");
        }
    });
});
// javascript code for button 
// Download CV button
const downloadBtn = document.getElementById("downloadBtn");
const backgroundColors = ["#963eb9"];
const textColors = ["#ffffff"];
let colorIndex = 0;

downloadBtn.addEventListener("click", function () {
    colorIndex = (colorIndex + 1) % backgroundColors.length;
    this.style.backgroundColor = backgroundColors[colorIndex];
    this.style.color = textColors[colorIndex];
});
// Save button 
const sendbtn = document.getElementById("sendbtn");
const backgroundColor = ["#963eb9"];
const textColor = ["#ffffff"];
sendbtn.addEventListener("click", function () {
    colorIndex = (colorIndex + 1) % backgroundColor.length;
    this.style.backgroundColor = backgroundColor[colorIndex];
    this.style.color = textColor[colorIndex];
});

