let data = {
    title: ["Macan & AVG - Спой", "Macan - Май", "Tupac Shakur - All Eyez On Me", "Miyagi & Andy Panda - Minor"],
    song: ["music/AVG_MACAN_-_Spojj_77373130.mp3", "music/MACAN_-_Majj_mp3", "Tupac_Skakur_-_all_eyes_on_me_.mp3", "Miyagi_Andy_Panda_-_Minor_.mp3"],
    poster: ['https://images.genius.com/41608d095caf37d11f8206d6f176582d.1000x1000x1.png', 'https://t2.genius.com/unsafe/680x680/https%3A%2F%2Fimages.genius.com%2Fe1061ac336b067bb9199554615d42905.1000x1000x1.jpg', 'https://blackculturetv.files.wordpress.com/2019/02/all-eyez-on-me.jpg', 'https://i1.sndcdn.com/artworks-USwDbsvFhel8jjv9-iJ97kQ-t500x500.jpg']
}
                



let song = new Audio();

let currentSong = 0;

function playSong(){
    song.src = data.song[currentSong];
    let songTitle = document.getElementsByClassName('songtitle');
    songTitle[0].textContent = data.title[currentSong];
    let img = document.getElementsByClassName('row1');
    img[0].style.backgroundImage = 'url(' + data.poster[currentSong] + ')'

    let main = document.getElementsByClassName('main');
    main.style.backgroundImage = 'url(' + data.poster[currentSong] + ')'
}

window.onload = function(){
    playSong();
}

song.play()


function playOrPauseSong(){
    let play = document.getElementById("play")
    if(song.paused){
             song.play();
             play.src = "images/pause.png"
    }else{
        song.pause();
        play.src = "images/play-button-arrowhead.png"
    }
}
