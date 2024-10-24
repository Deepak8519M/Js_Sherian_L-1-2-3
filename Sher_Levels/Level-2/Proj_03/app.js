var arr = [
  {
    songName: "Jale 2",
    url: "songs/Jale 2.mp3",
    image: "images/jale.jpg",
  },
  {
    songName: "Pehle Be Mein",
    url: "songs/Pehle Bhi Main.mp3",
    image: "images/animal.jpg",
  },
  {
    songName: "Ram siya ram",
    url: "songs/Ram Siya Ram.mp3",
    image: "images/ram.jpg",
  },
  {
    songName: "Arjun Vailly",
    url: "songs/Arjan Vailly Ne.mp3",
    image: "images/animal.jpg",
  },
];

var allSongs = document.querySelector("#all-songs");
var poster = document.querySelector("#left");
var play = document.querySelector("#play");
var backward = document.querySelector("#backward");
var forward = document.querySelector("#forward");

var audio = new Audio();

var selectedSong = 0;

function createCard() {
  var clutter = "";
  arr.forEach((obj, idx) => {
    clutter += `<div class="song-card" id = ${idx} >
                    <div class="part-1">
                        <img src="${obj.image}" alt="" />
                        <h2>${obj.songName}</h2>
                    </div>
                    <h6>3:56</h6>
              </div>`;
  });
  allSongs.innerHTML = clutter;

  audio.src = arr[selectedSong].url;

  poster.style.backgroundImage = `url(${arr[selectedSong].image})`;
}

createCard();

allSongs.addEventListener("click", (dets) => {
  selectedSong = dets.target.id;
  play.innerHTML = `<i class="ri-pause-line"></i>`;
  createCard();
  audio.play();
});

var flag = 0;

play.addEventListener("click", () => {
  if (flag == 0) {
    play.innerHTML = `<i class="ri-pause-line"></i>`;
    createCard();
    audio.play();
    flag = 1;
  } else {
    play.innerHTML = `<i class="ri-play-large-fill"></i>`;
    createCard();
    audio.pause();
    flag = 0;
  }
});

forward.addEventListener("click", () => {
  if (selectedSong < arr.length - 1) {
    selectedSong++;
    createCard();
    play.innerHTML = `<i class="ri-pause-line"></i>`;
    audio.play();
  } else {
    forward.style.opacity = 0.3;
  }
});

backward.addEventListener("click", () => {
  if (selectedSong > 0) {
    selectedSong--;
    createCard();
    play.innerHTML = `<i class="ri-pause-line"></i>`;
    audio.play();
  } else {
    backward.style.opacity = 0.3;
  }
});
