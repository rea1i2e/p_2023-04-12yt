let player;
const playPauseBtn = document.querySelector('.p-player__button');
let isPlaying = false;

function onYouTubeIframeAPIReady() {
	player = new YT.Player('js-player', {
		videoId: 'akWl5ScVgUs',
		events: {
			'onStateChange': onPlayerStateChange
		}
	});
}

function onPlayerStateChange(event) {
	if (event.data === YT.PlayerState.PLAYING) {
		playPauseBtn.classList.remove('p-player__button--play');
		playPauseBtn.classList.add('p-player__button--pause');
		isPlaying = true;
	} else {
		playPauseBtn.classList.remove('p-player__button--pause');
		playPauseBtn.classList.add('p-player__button--play');
		isPlaying = false;
	}
}

function playPauseVideo() {
	if (isPlaying) {
		player.pauseVideo();
		playPauseBtn.classList.remove('p-player__button--pause');
		playPauseBtn.classList.add('p-player__button--play');
	} else {
		player.playVideo();
		setTimeout(() => {
			playPauseBtn.classList.remove('p-player__button--play');
			playPauseBtn.classList.add('p-player__button--pause');
		}, 1000); // 1秒遅れて実行する（初回再生時のみ、サムネイル画像が一瞬再表示される問題解消のため）
	}
	isPlaying = !isPlaying;
}

playPauseBtn.addEventListener('click', playPauseVideo);
