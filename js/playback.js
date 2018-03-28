let playing = false;
let playPause = document.getElementById("play-pause");
let volume = document.getElementById("volume");
let fullscreen = document.getElementById("fullscreen");
let video = document.getElementById("vid");
let progComplete = document.getElementById("progress-complete");
let controlsBar = document.getElementById("controls-bar")
let buttons = document.getElementsByClassName("btn");

// controlsBar.style.height="0px";
// buttons.style.height="0px";

playPause.addEventListener('click',()=>{
    if(playing === false){
        video.play();
        playing = true;
        // controlsBar.style.height="30px";
        // buttons.style.height="20px";
    }

    else if(playing === true){
        video.pause();
        playing = false;
    }
});
let progWidth = 0;
let lastWidth = 0;
window.setInterval(function(){  
    console.log(progComplete.clientX); 
    if(playing === true){
        progWidth = (video.currentTime/video.duration) * 100 + "%";
        console.log(progWidth);
        progComplete.style.width = progWidth;
    }
  }, 1000);

video.volume=0;

$("#progress-complete").on("click", function(e){
    var offset = $(this).offset();
    var left = (e.pageX - offset.left);
    var totalWidth = $("#progress-complete").width();
    var percentage = ( left / totalWidth );
    var vidTime = vid.duration * percentage;
    vid.currentTime = vidTime;
});//click()

// let vid = document.getElementById("main-vid");
// vid.style.width="100%";
// vid.style.height="100%";
// vid.style.background="cover";