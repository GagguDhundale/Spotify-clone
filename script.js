// DOM Elements
const playBtn = document.querySelector('.play');
const progressBar = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-bar');
const songCards = document.querySelectorAll('.card');
const currentTimeEl = document.querySelector('.time-start');
const durationEl = document.querySelector('.time-end');
const songTitleEl = document.querySelector('.song-title');
const songArtistEl = document.querySelector('.song-artist');
const songImgEl = document.querySelector('.song-info img');

// Mock song data (replace with real data later)
const songs = [
  {
    title: "Blinding Lights",
    artist: "The Weeknd",
    duration: "3:45",
    cover: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
  },
  {
    title: "Save Your Tears",
    artist: "The Weeknd",
    duration: "3:35",
    cover: "https://i.scdn.co/image/ab67616d00001e025f9f06d9b2a3d7a7f7c70e9c",
  },
  {
    title: "Stay",
    artist: "The Kid LAROI, Justin Bieber",
    duration: "2:21",
    cover: "https://i.scdn.co/image/ab67616d00001e026a5b30bb3a0d5a5a7a7f0e9d",
  },
];

// State
let isPlaying = false;
let currentSongIndex = 0;

// Initialize
loadSong(currentSongIndex);

// Functions
function loadSong(index) {
  const song = songs[index];
  songTitleEl.textContent = song.title;
  songArtistEl.textContent = song.artist;
  songImgEl.src = song.cover;
  durationEl.textContent = song.duration;
}

function togglePlay() {
  isPlaying = !isPlaying;
  const icon = playBtn.querySelector('i');
  icon.classList.toggle('fa-play', !isPlaying);
  icon.classList.toggle('fa-pause', isPlaying);
  
  // Simulate progress animation (demo only)
  if (isPlaying) {
    progressBar.style.width = '50%'; // Fake progress
  }
}

function updateProgressBar(e) {
  const { duration, currentTime } = e.target;
  const progressPercent = (currentTime / duration) * 100;
  progressBar.style.width = `${progressPercent}%`;
}

function setProgressBar(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = 200; // Fake duration (seconds)
  const currentTime = (clickX / width) * duration;
  progressBar.style.width = `${(currentTime / duration) * 100}%`;
  currentTimeEl.textContent = formatTime(currentTime);
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Event Listeners
playBtn.addEventListener('click', togglePlay);

// Fake progress bar interaction (no real audio)
progressContainer.addEventListener('click', setProgressBar);

// Click on song cards to play
songCards.forEach((card, index) => {
  card.addEventListener('click', () => {
    currentSongIndex = index;
    loadSong(currentSongIndex);
    if (!isPlaying) togglePlay();
  });
});

const volumeBar = document.querySelector('.volume-progress');
const volumeContainer = document.querySelector('.volume-bar');

volumeContainer.addEventListener('click', (e) => {
  const width = volumeContainer.clientWidth;
  const clickX = e.offsetX;
  const volumePercent = (clickX / width) * 100;
  volumeBar.style.width = `${volumePercent}%`;
});