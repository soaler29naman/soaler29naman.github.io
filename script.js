console.log("Welcome to Spotify");
//Initialize the Variables
let songIndex=1;
let audioElement = new Audio('./songs/1.mp3');
let masterPlay =document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif =document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName: "Salam-e", filePath: "./songs/1.mp3",coverPath:"./covers/1.jpg"},
    {songName: "Salam-e", filePath: "./songs/2.mp3",coverPath:"./covers/2.jpg"},
    {songName: "Salae-Ishq", filePath: "./songs/3.mp3",coverPath:"./covers/3.jpg"},
    {songName: "Sassdsdlam-e-Ishq", filePath: "./songs/4.mp3",coverPath:"./covers/4.jpg"},
    {songName: "Salam-]]e-Ishq", filePath: "./songs/5.mp3",coverPath:"./covers/5.jpg"},
    {songName: "Salamfdf c-Ishq", filePath: "./songs/6.mp3",coverPath:"./covers/6.jpg"},
    {songName: "Salam-e-fdfIshq", filePath: "./songs/7.mp3",coverPath:"./covers/7.jpg"},
    {songName: "Salfeee-Ishq", filePath: "./songs/8.mp3",coverPath:"./covers/8.jpg"},
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src =songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1; 

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0; 
    }

    
})
//Listen to Events
audioElement.addEventListener('timeupdate',()=>{


    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);

    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{

            element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-cirlce');
    })

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach(( element )=>{
    element.addEventListener('click',(e)=>{
            makeAllPlays();
            

            songIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-cirlce');
            audioElement.src='./songs/${songIndex+1}4.mp3'
            masterSongName.innerText =songs[songIndex].songName;
            audioElement.currentTime= 0;
            audioElement.play();
            gif.style.opacity=1; 
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
    })

})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex > 8){
        songIndex=1;;
    }
    else{
        songIndex +=1;
    }
    audioElement.src=`song/${songIndex+1}.mp3`;
    masterSongName.innerText =songs[songIndex].songName;

    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex < 1){
        songIndex=1;;
    }
    else{
        songIndex -=1;
    }
    audioElement.src=`song/${songIndex+1}.mp3`;
    masterSongName.innerText =songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})