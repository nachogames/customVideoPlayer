let playing = false;
let playPause = document.getElementById("play-pause");
let volume = document.getElementById("volume");
let fullscreen = document.getElementById("fullscreen");
let video = document.getElementById("vid");
let progComplete = document.getElementById("progress-complete");

playPause.addEventListener('click',()=>{
    if(playing === false){
        video.play();
        playing = true;
    }

    else if(playing === true){
        video.pause();
        playing = false;
    }
});
let progWidth = 0;
let lastWidth = 0;
window.setInterval(function(){   
    if(playing === true){
        progWidth = (video.currentTime/video.duration) * 100 + "%";
        console.log(progWidth);
        progComplete.style.width = progWidth;
    }
  }, 1000);

video.volume=0;

// let vid = document.getElementById("main-vid");
// vid.style.width="100%";
// vid.style.height="100%";
// vid.style.background="cover";