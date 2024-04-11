var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video=document.querySelector("#player1");
	video.autoplay=false;
	video.loop=false;
	console.log('auto play is set to ' + video.autoplay);
	console.log('loop is set to ' + video.loop);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	console.log('Playing video');
	console.log(video.volume);
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
	console.log('Video paused');
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.90;
	console.log("Slower. Now speed is: " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.90;
	console.log("Faster. Now speed is: " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0;
		console.log("Location in video: " + video.currentTime);
	} else {
		video.currentTime += 10;
		console.log("Location in video: " + video.currentTime);
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
		console.log("Video is unmuted");
	} else {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("Video is muted");
	}
});

document.querySelector("#slider").addEventListener("change", function() {
	video.volume = this.value / 100;
	console.log("Volume: " + video.volume);
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log("Vintage");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("Original");
});

