import Vimeo from '@vimeo/player';

console.log("Work");

const iframe = document.querySelector('iframe');
    const player = new Vimeo(iframe);

  //   player.on('play', function() {
  //       console.log('played the video!');
  //   });




  // player.on('playing', function () {
  //     console.log('playing');
  //   });
const recordSecondsOnStop = function (event) {
  const pauseSeconds = event.seconds;
  console.log(pauseSeconds);
  localStorage.setItem('videoplayer-current-time', pauseSeconds);

  return pauseSeconds;
};


// player.on('pause', recordSecondsOnStop);

// const qqq = localStorage.getItem("videoplayer-current-time");

// console.log(qqq);

player
  .setCurrentTime(30.456)
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


    
// localStorage.setItem('videoplayer-current-time', pauseSeconds);
    










// player
//   .setCurrentTime(30.456)
//   .then(function (seconds) {
//     // seconds = the actual time that the player seeked to
//   })
//   .catch(function (error) {
//     switch (error.name) {
//       case 'RangeError':
//         // the time was less than 0 or greater than the video’s duration
//         break;

//       default:
//         // some other error occurred
//         break;
//     }
//   });