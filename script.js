// Scrolling View
var navs = document.querySelectorAll(".nav-menu a");

for (let i = 0; i < navs.length; i++) {
  navs[i].addEventListener("click", function(event) {
    event.preventDefault();
    var targetid = this.textContent.trim().toLowerCase();
    var targetsection = document.getElementById(targetid);

    var interval = setInterval(function() {
      var targetsectioncoordinate = targetsection.getBoundingClientRect();

      if (targetsectioncoordinate.top <= 0) {
        clearInterval(interval);
        return;
      }
      window.scrollBy(0, 50);
    }, 30);
  });
}


// Setting Skills Progress Bars Autofill Animation

// Fetching progress bars & skill container
var skillContainer= document.getElementById("skills-container");
var progressBars= document.querySelectorAll(".skill-progress > div");
window.addEventListener("scroll", checkScroll);
var animationDone=false;

// setting bars width zero
function setBarZero(){
    for(let bar of progressBars){
        bar.style.width= 0 + "%";
    }
}
setBarZero();
// filling progress bars
function fillBars(){
    for( let bar of progressBars){
        let targetWidth= bar.getAttribute("data-progress");
        let currentWidth=0;
        let skillInterval= setInterval(function(){
            if(currentWidth > targetWidth){
                clearInterval(skillInterval);
                return;
            }
            currentWidth++;
            bar.style.width= currentWidth + "%";
            }, 5);
    }
}                          
// checking skillbox visiblity in window
function checkScroll(){
    var skillCoordinates= skillContainer.getBoundingClientRect();
    if(!animationDone && skillCoordinates.top< window.innerHeight){
        animationDone=true;
        fillBars();
    }  
}

