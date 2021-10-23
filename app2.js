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
  /*
  const fakeVid = document.querySelector('#dummy-video')[0];
  while ( click === 1 ) {
    //const fakeVid = document.getElementById('dummyVid');
    fakevid.classList.remove('hide2');
    fakeVid.classList.add('container');
  }*/
});

// need event to refresh back to the main page
fakeVid.addEventListener('ended', () => {
  // when the video has ended I want to hide it again 
  window.location.href = "./index2.html";
 });