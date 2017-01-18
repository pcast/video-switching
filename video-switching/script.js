window.onload = function() {

	// Video
	var video = document.getElementById("video");
	var videoone = document.getElementById("videoone");

	// Buttons
	var playButton = document.getElementById("play-pause");
	var muteButton = document.getElementById("mute");
	var switchButton = document.getElementById("codeswitch");	
	var fullScreenButton = document.getElementById("full-screen");
	var videoScreenone = document.getElementById("video");
	var videoScreentwo = document.getElementById("videoone");

	// Sliders
	var seekBar = document.getElementById("seek-bar");
	var volumeBar = document.getElementById("volume-bar");


	
	//This is custom for clicking screen itself - playing and pausing on click

videoScreenone.addEventListener("click", function(){

		if (video.paused == true) {
			// Play the video
			video.play();
			videoone.play(); //

			// Update the button text to 'Pause'
			playButton.src= "pause.png";



		} else {
			// Pause the video
			video.pause();
			videoone.pause(); //

			// Update the button text to 'Play'
			playButton.src= "play.png";

		}

});

videoScreentwo.addEventListener("click", function(){

		if (video.paused == true) {
			// Play the video
			video.play();
			videoone.play(); //

			// Update the button text to 'Pause'
			playButton.src= "pause.png";





		} else {
			// Pause the video
			video.pause();
			videoone.pause(); //

			// Update the button text to 'Play'
			playButton.src= "play.png";


		}

});





	// Event listener for the play/pause button

	playButton.addEventListener("click", function() {
		if (video.paused == true) {
			// Play the video
			video.play();
			videoone.play(); //

			// Update the button text to 'Pause'
			playButton.src= "pause.png";

		/* this is for the timer

			var time = 0; //this part's custom - need to load 0 and start time, then when paused, keep displaying the time

						 $(function(){
			             $('#currentTime').html($('#video-container').find('#video').get(time).load());
			             $('#currentTime').html($('#video-container').find('#video').get(time).play());
			          })
			        setInterval(function(){
			             $('#currentTime').html($('#video-container').find('#video').get(time).currentTime);
			             $('#totalTime').html($('#video-container').find('#video').get(time).duration);    
			            },100)
				
			*/



		} else {
			// Pause the video
			video.pause();
			videoone.pause(); //

			// Update the button text to 'Play'
			playButton.src= "play.png";

						/* this is for timer too 

							var time = currentTime;

							 $(function(){
				             $('#currentTime').html($('#video-container').find('#video').get(time).load());
				             $('#currentTime').html($('#video-container').find('#video').get(time).play());
				          }) */


		}





	});


	// Event listener for the mute playButton     		
	muteButton.addEventListener("click", function() {

		if	(video.volume == 1) {

				video.volume = 0;
				videoone.volume = 0;
				muteButton.src = "mute.png";

			} 


		else if (video.volume == 0)  {

				video.volume = 1;
				videoone.volume = 1;
				muteButton.src = "unmute.png";;


			}



		});

	// Event listener for the seek bar
	seekBar.addEventListener("change", function() {
		// Calculate the new time
		var time = video.duration * (seekBar.value / 100);

		// Update the video time
		video.currentTime = time;
		videoone.currentTime = time; //
	});

	
	// Update the seek bar as the video plays
	video.addEventListener("timeupdate", function() {
		// Calculate the slider value
		var value = (100 / video.duration) * video.currentTime;

		// Update the slider value
		seekBar.value = value;
	});

	// Pause the video when the seek handle is being dragged
	seekBar.addEventListener("mousedown", function() {
		video.pause();
		videoone.pause(); //
	});

	// Play the video when the seek handle is dropped
	seekBar.addEventListener("mouseup", function() {
			
			//adding conditional to only do this if the video is currently playihng


		if (playButton.innerHTML == "Pause") {
			// Play the video
			video.play();
			videoone.play(); //
		}

	});

}


    function vidplay() {
       var video = document.getElementById("video");
       var video1 = document.getElementById("videoone");       
       var button = document.getElementById("play");
       if (video.paused) {
          video.play();
          button.textContent = "||";
       } else {
          video.pause();
          button.textContent = ">";
       }
       if (video1.paused) {
          video1.play();
          button.textContent = "||";
       } else {
          video1.pause();
          button.textContent = ">";
       }       
    }

    function restart() {
        var video = document.getElementById("video");
        var video1 = document.getElementById("videoone");
        video.currentTime = 0;
        video1.currentTime = 0;
    }

    function skip(value) {
        var video = document.getElementById("video");
        var video1 = document.getElementById("videoone");       
        video.currentTime += value;
        video1.currentTime += value;        
    }   
    
    

	function changeFlag(){
        var img = document.getElementById('codeswitch').src;
        if (img.indexOf('german.png')!=-1) {
            document.getElementById('codeswitch').src  = 'english.png';
        }
         else {
           document.getElementById('codeswitch').src = 'german.png';
       }

    }

	function changeOverlay(){
        var img = document.getElementById('overlay').src;
        if (img.indexOf('germanDE.png')!=-1) {
            document.getElementById('overlay').src  = 'englishEN.png';
        }
         else {
           document.getElementById('overlay').src = 'germanDE.png';
       }

    }

    
    
    