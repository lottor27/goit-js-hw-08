import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle'

console.log("Work");

const iframe = document.querySelector('iframe');
    const player = new Vimeo(iframe);


const recordSecondsOnStop = function (event) {
  const pauseSeconds = event.seconds;
  console.log(pauseSeconds);
  localStorage.setItem('videoplayer-current-time', pauseSeconds);

  return pauseSeconds;
};


player.on('pause', throttle(recordSecondsOnStop, 1000));


const localStorageRecord = localStorage.getItem('videoplayer-current-time');

console.log(localStorageRecord);

player
  .setCurrentTime(localStorageRecord)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });

    player.getVideoTitle().then(function (title) {
      console.log('title:', title);
    });


    