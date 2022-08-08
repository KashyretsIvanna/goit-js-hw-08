const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
let t = JSON.parse(localStorage.getItem('videoplayer-current-time'));
// let _ = require('lodash');

player.on('timeupdate', _.throttle(data => {

  console.log(data);
  localStorage.setItem('videoplayer-current-time', data.seconds);
},3000))

player
  .setCurrentTime(JSON.parse(localStorage.getItem('videoplayer-current-time')))
  .then(function (seconds) {
    console.log(seconds);
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
