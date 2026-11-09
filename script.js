// بيانات الأفلام (أضفنا رابط فيديو لكل فيلم)
const movies = [
    { title: "فيلم أكشن", poster: "https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg", video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
    { title: "مسلسل درامي", poster: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg", video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
    { title: "أنيميشن", poster: "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg", video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" },
    { title: "وثائقي", poster: "https://image.tmdb.org/t/p/w500/2LqaLgk4Z226KkgPJuiOQ58wvrm.jpg", video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" },
    { title: "فيلم خيال علمي", poster: "https://image.tmdb.org/t/p/w500/5P8SmMzSNYikXpxil6BYzJ16611.jpg", video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4" },
    { title: "فيلم رعب", poster: "https://image.tmdb.org/t/p/w500/6WxhEvFsauuACfv8HyoVX6mZKFj.jpg", video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4" }
];

const grid = document.getElementById('movieGrid');
const modal = document.getElementById('videoModal');
const videoPlayer = document.getElementById('mainVideo');

// عرض الأفلام
function loadMovies() {
    movies.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}">
            <div class="info"><h3>${movie.title}</h3></div>
        `;
        // عند الضغط على الفيلم، يتم تشغيل الفيديو
        card.onclick = () => openVideo(movie.video);
        grid.appendChild(card);
    });
}

// فتح مشغل الفيديو
function openVideo(videoUrl) {
    modal.style.display = 'flex';
    videoPlayer.src = videoUrl;
    videoPlayer.play();
}

// إغلاق مشغل الفيديو
function closeVideo() {
    modal.style.display = 'none';
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
}

loadMovies();
