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

// auto reload the page after 20 seconds

setTimeout(function() {  window.location.href = "./index2.html";
}, 20000);

//test