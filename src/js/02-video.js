
import Vimeo from "@vimeo/player";
var throttle = require('lodash.throttle');

    const iframe = document.querySelector('iframe');
    const player = new Vimeo(iframe);

 player.on('timeupdate', player.getCurrentTime().then(function(seconds) {
    console.log(seconds)
}).catch(function(error) {
    // an error occurred
}))


// const onPlay = function (data) {
//   localStorage.setItem('videoplayer-current-time', seconds.data);

//  };

// player.on('timeupdate', throttle(onPlay, 1000));

//  const currentTime = Number(localStorage.getItem('videoplayer-current-time'));
// console.log(currentTime)
//  player.setCurrentTime(currentTime)
