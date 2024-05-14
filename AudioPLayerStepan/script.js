let data = {
    title: [
        "Macan & AVG - Спой",
         "Macan - Май", 
         "Tupac Shakur - All Eyez On Me", 
         "Miyagi & Andy Panda - Minor"],
    song: [
        "music/AVG_MACAN_-_Spojj_77373130.mp3", 
        "music/MacanMusic2.mp3", 
        "music/allEyeseOnMe.mp3", 
        "music/minor.mp3"
    ],
    poster: ['https://images.genius.com/41608d095caf37d11f8206d6f176582d.1000x1000x1.png', 'https://t2.genius.com/unsafe/680x680/https%3A%2F%2Fimages.genius.com%2Fe1061ac336b067bb9199554615d42905.1000x1000x1.jpg', 'https://blackculturetv.files.wordpress.com/2019/02/all-eyez-on-me.jpg', 'https://i1.sndcdn.com/artworks-USwDbsvFhel8jjv9-iJ97kQ-t500x500.jpg']
}




let song = new Audio();

let currentSong = 0;

function playSong() {
    song.src = data.song[currentSong];
    let songTitle = document.getElementsByClassName('songtitle');
    songTitle[0].textContent = data.title[currentSong];
    let img = document.getElementsByClassName('row1');
    img[0].style.backgroundImage = 'url(' + data.poster[currentSong] + ')'
    song.play()
}

window.onload = function () {
    playSong();
}



function playOrPauseSong() {
     play = document.getElementById("play")
    if (song.paused) {
        song.play();
        play.src = "images/pause.png"
    } else {
        song.pause();
        play.src = "images/play-button-arrowhead.png"
    }
}



song.addEventListener("timeupdate", () => {
    // console.log(song.currentTime);
    // console.log(song.duration);
    let fill = document.getElementsByClassName("fill")
    let possition = song.currentTime / song.duration;
    fill[0].style.marginLeft = possition * 100 + "%"
    conveertTime(song.currentTime)
    if (song.ended) {
        next()
    }
})
    let currentTime = document.getElementsByClassName("currentTime");

function conveertTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60)

    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    currentTime[0].textContent =min + ":" + sec;
    totalTime(song.duration)
}


function totalTime(seconds){
let min = Math.floor(seconds/60);
let sec = Math.floor(seconds%60);

currentTime[0].textContent += " / "+ min + ":" + sec
}


function next(){
 currentSong++;
 play.src = "images/pause.png"

 if(currentSong >= data.song.length){
     currentSong = 0
 }
 playSong()
}

function prev(){
    currentSong--;
    play.src = "images/pause.png"

    if(currentSong <= 0){
        currentSong = data.song.length -1
    }
    playSong()
   }
   
