
import Vimeo from "@vimeo/player";
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);


const getCurrentTime = function (currentTime) {
  if (currentTime.seconds < 60) {
    const seconds = currentTime.seconds;
    localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
  } else { currentTime.seconds = 58 }
};

player.on('timeupdate', throttle(getCurrentTime, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem('videoplayer-current-time')) || 0);

