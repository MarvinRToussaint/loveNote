let click = 0;
const button = document.querySelector('button'); //main button
const playVideo = document.getElementsByClassName('hide')[0];
const container = document.querySelector('.container');
const fakeVid = document.querySelector('#dummy-video');
const frontPage = document.querySelector('body');
//this event diplays the video in the container
button.addEventListener('click', () => {
  playVideo.classList.remove('hide');
  container .classList.add('hide');
  playVideo.classList.add('container');
  click++;
});

// auto reload the page after 18 seconds

setTimeout(function() {  window.location.href = "./index2.html";}, 18000);

