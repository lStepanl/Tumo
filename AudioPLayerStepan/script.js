let data = {
    title: [
        "Спой",
        "Май",
        "All Eyez On Me",
        "Minor",
        "Ты и Я",
        "Поспешили",
        "Marmalade",
        "Там Ревели Горы",
        "Вороны"

    ],
    autorsong: [
        "Macan & AVG",
        "Macan",
        "Tupac Shakur",
        "Miyagi & Andy Panda",
        "Xcho",
        "Macan & Jakone",
        "Miyagi & Andy Panda feat. Mav-d",
        "MiyaGi & Andy Panda",
        "Xcho"
        

    ],
    song: [
        "music/AVG_MACAN_-_Spojj_77373130.mp3",
        "music/MacanMusic2.mp3",
        "music/allEyeseOnMe.mp3",
        "music/minor.mp3",
        "music/xcho_tu.mp3",
        "music/Macan_Jakone.mp3",
        "music/Miyagi_Marmelade.mp3",
        "music/Miyagitamgory.mp3",
        "music/Xcho_vorony.mp3"
    ],
    poster: [
        'https://images.genius.com/41608d095caf37d11f8206d6f176582d.1000x1000x1.png',
        'https://t2.genius.com/unsafe/680x680/https%3A%2F%2Fimages.genius.com%2Fe1061ac336b067bb9199554615d42905.1000x1000x1.jpg',
        'https://blackculturetv.files.wordpress.com/2019/02/all-eyez-on-me.jpg',
         'https://i1.sndcdn.com/artworks-USwDbsvFhel8jjv9-iJ97kQ-t500x500.jpg',
         'https://t2.genius.com/unsafe/680x680/https%3A%2F%2Fimages.genius.com%2F96f8bb4a817965cb857c1009d076d721.1000x1000x1.png',
         'https://images.genius.com/96a8326f1c5a9db113a8dd33bb4ad8d0.1000x1000x1.jpg',
         'https://images.genius.com/e81fcb22fcc14fa00dc7c8b36ffea8c0.1000x1000x1.jpg',
         'https://i.scdn.co/image/ab67616d0000b273a7717523c2f13a93b89b8886',
         'https://mp3-tut.click/media/music_image/950/76/56333_950761eedbf62b8734ca81fc06b62f19.jpg'
    ]
}




let song = new Audio();

let currentSong = 0;

function playSong() {
    song.src = data.song[currentSong];
    let songTitle = document.getElementsByClassName('songtitle');
    let AuthorSong = document.getElementsByClassName('authorsong');
    songTitle[0].textContent = data.title[currentSong];
    AuthorSong[0].textContent = data.autorsong[currentSong];
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
        play.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1wYXVzZSI+PHJlY3QgeD0iMTQiIHk9IjQiIHdpZHRoPSI0IiBoZWlnaHQ9IjE2IiByeD0iMSIvPjxyZWN0IHg9IjYiIHk9IjQiIHdpZHRoPSI0IiBoZWlnaHQ9IjE2IiByeD0iMSIvPjwvc3ZnPg=="

    } else {
        song.pause();
        play.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1wbGF5Ij48cG9seWdvbiBwb2ludHM9IjYgMyAyMCAxMiA2IDIxIDYgMyIvPjwvc3ZnPg=="
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

    currentTime[0].textContent = min + ":" + sec;
    totalTime(song.duration)
}


function totalTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    currentTime[0].textContent += " / " + min + ":" + sec
}




function next() {
    currentSong++;
    play.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1wYXVzZSI+PHJlY3QgeD0iMTQiIHk9IjQiIHdpZHRoPSI0IiBoZWlnaHQ9IjE2IiByeD0iMSIvPjxyZWN0IHg9IjYiIHk9IjQiIHdpZHRoPSI0IiBoZWlnaHQ9IjE2IiByeD0iMSIvPjwvc3ZnPg=="

    if (currentSong >= data.song.length) {
        currentSong = 0
    }
    playSong()
}
function prev() {
    currentSong--;
    play.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1wYXVzZSI+PHJlY3QgeD0iMTQiIHk9IjQiIHdpZHRoPSI0IiBoZWlnaHQ9IjE2IiByeD0iMSIvPjxyZWN0IHg9IjYiIHk9IjQiIHdpZHRoPSI0IiBoZWlnaHQ9IjE2IiByeD0iMSIvPjwvc3ZnPg=="
    if (currentSong <= 0) {
        currentSong = data.song.length - 1
    }
    playSong()
}



let mutes = document.getElementById("mute");

function mute() {
    if (song.muted) {
        song.muted = false
        mutes.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS12b2x1bWUtMSI+PHBvbHlnb24gcG9pbnRzPSIxMSA1IDYgOSAyIDkgMiAxNSA2IDE1IDExIDE5IDExIDUiLz48cGF0aCBkPSJNMTUuNTQgOC40NmE1IDUgMCAwIDEgMCA3LjA3Ii8+PC9zdmc+"
    } else {
        song.muted = true
        mutes.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS12b2x1bWUteCI+PHBvbHlnb24gcG9pbnRzPSIxMSA1IDYgOSAyIDkgMiAxNSA2IDE1IDExIDE5IDExIDUiLz48bGluZSB4MT0iMjIiIHgyPSIxNiIgeTE9IjkiIHkyPSIxNSIvPjxsaW5lIHgxPSIxNiIgeDI9IjIyIiB5MT0iOSIgeTI9IjE1Ii8+PC9zdmc+"
    }
}



function decrease() {
    let decrease = document.getElementById("decrease");
    song.volume -= 0.2;

    if (song.volume <= 0) {
        mutes.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS12b2x1bWUtMSI+PHBvbHlnb24gcG9pbnRzPSIxMSA1IDYgOSAyIDkgMiAxNSA2IDE1IDExIDE5IDExIDUiLz48cGF0aCBkPSJNMTUuNTQgOC40NmE1IDUgMCAwIDEgMCA3LjA3Ii8+PC9zdmc+"
    }
}

function increase() {
    let increase = document.getElementById("increase")
    song.volume += 0.2
}


    
