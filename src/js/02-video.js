import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle'

const STORAGE_KEY = 'videoplayer-current-time';
const timeRange = localStorage.getItem(STORAGE_KEY) || 0;



// onTimeAreaInput();

// onTimeAreaInput = function () {
//   if (!STORAGE_KEY) {
//     localStorage.setItem(STORAGE_KEY, 0);
//   }
// };

const iframe = document.querySelector('iframe');
    const player = new Vimeo(iframe);


const recordSecondsOnStop = function (event) {
  const pauseSeconds = event.seconds;
  console.log(pauseSeconds);
  localStorage.setItem('videoplayer-current-time', pauseSeconds);

  return pauseSeconds;
};


player.on('timeupdate', throttle(recordSecondsOnStop, 1000));


const localStorageRecord = localStorage.getItem('videoplayer-current-time');


console.log(localStorageRecord);

player.setCurrentTime(timeRange);



  