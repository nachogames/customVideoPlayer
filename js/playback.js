let playing = false;
let playPause = document.getElementById("play-pause");
let volume = document.getElementById("volume");
let fullscreen = document.getElementById("fullscreen");
let video = document.getElementById("vid");

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