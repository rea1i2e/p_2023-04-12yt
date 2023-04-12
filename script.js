let player;
const playPauseBtn = document.querySelector('#play-pause-btn');
let isPlaying = false;

function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		videoId: 'akWl5ScVgUs',
		events: {
			'onStateChange': onPlayerStateChange
		}
	});
}

function onPlayerStateChange(event) {
	if (event.data === YT.PlayerState.PLAYING) {
		playPauseBtn.classList.remove('play-btn');
		playPauseBtn.classList.add('pause-btn');
		isPlaying = true;
	} else {
		playPauseBtn.classList.remove('pause-btn');
		playPauseBtn.classList.add('play-btn');
		isPlaying = false;
	}
}

function playPauseVideo() {
	if (isPlaying) {
		player.pauseVideo();
		playPauseBtn.classList.remove('pause-btn');
		playPauseBtn.classList.add('play-btn');
	} else {
		player.playVideo();
		setTimeout(() => {
			playPauseBtn.classList.remove('play-btn');
			playPauseBtn.classList.add('pause-btn');
		}, 1000); // 1秒遅れて実行する（初回再生時のみ、サムネイル画像が一瞬再表示される問題解消のため）
	}
	isPlaying = !isPlaying;
}

playPauseBtn.addEventListener('click', playPauseVideo);
