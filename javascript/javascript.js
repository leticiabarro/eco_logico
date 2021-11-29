const progressBar = document.querySelector('#progress-bar');

const section = document.querySelector('section');

const animateProgressBar = () => {
  let scrollMouse = -section.getBoundingClientRect().top;

  let progressWidth = (scrollMouse / (section.getBoundingClientRect().height - document.documentElement.clientHeight)) * 100;
  
  let value = Math.floor(progressWidth);
  
  if(value <=0 ){
    value = 1;
  }
  progressBar.style.width = value + "%" ;

}

window.addEventListener('scroll', animateProgressBar);
animateProgressBar();