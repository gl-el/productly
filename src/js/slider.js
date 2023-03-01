const slider = document.querySelector('.about__cards-container');
const cards = document.querySelector('.about__cards');
const dots = document.querySelectorAll('.dot');
let isPressed = false;
let cursorX, startX, cardsOffset;

const moveToStart = () => {
  if (window.innerWidth <= 768) {
    slider.style.transform = `translateX(${-230}px)`;
    slider.style.transition = 'all 0.2s ease-out';
    dots[1].classList.add('dot_active');
  } else {
    slider.style.transform = '';
    slider.style.transition = '';
  }
}

window.addEventListener('load', moveToStart);
window.addEventListener('resize', moveToStart);


const start = (e) => {
  isPressed = true;
  startX = slider.style.transform.replace(/[a-zA-Z%()]+/g, "");
  cursorX = (e.pageX || e.targetTouches[0].clientX);
  slider.style.cursor = "grab";
}

const move = (e) => {
  if (!isPressed) return;
  e.preventDefault();
  cardsOffset = startX - (cursorX - e.pageX || cursorX - e.touches[0].pageX);
  slider.style.transform = `translateX(${cardsOffset}px)`;
}

const end = () => {
  isPressed = false;
  if (cardsOffset >= -45) {
    cardsOffset = 150;
    setDotActive(dots[0]);
  } else if (cardsOffset < 200 && cardsOffset >= -445) {
    cardsOffset = -230;
    setDotActive(dots[1]);
  } else {
    cardsOffset = -640;
    setDotActive(dots[2]);
  }
  slider.style.transform = `translateX(${cardsOffset}px)`;
}

(() => {
  slider.addEventListener('mousedown', start);
  slider.addEventListener('touchstart', start);

  slider.addEventListener('mousemove', move);
  slider.addEventListener('touchmove', move);

  slider.addEventListener('mouseleave', end);
  slider.addEventListener('mouseup', end);
  slider.addEventListener('touchend', end);
})();


const dotIndex = (e) => {
  const index = Array.from(dots).indexOf(e.target); vb
  return index;
}

function setDotActive(active) {
  dots.forEach(dot => {
    dot.classList.remove('dot_active');
  });
  active.classList.add('dot_active');
}

function moveWithDots(activeIndex) {
  switch (activeIndex) {
    case 0:
      cardsOffset = 150;
      break;
    case 1:
      cardsOffset = -230;
      break;
    case 2:
      cardsOffset = -650;
      break;
  }
  slider.style.transform = `translateX(${cardsOffset}px)`;
  setDotActive(dots[activeIndex]);
}

dots.forEach(dot => {
  dot.addEventListener('click', (e) => {
    const dotIndex = Array.from(e.target.parentElement.children).indexOf(e.target);
    moveWithDots(dotIndex);
  })
});