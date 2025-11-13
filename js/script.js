const swiper = new Swiper('.mySwiper', {
  effect: 'flip',
  grabCursor: true,
  speed: 700,
  flipEffect: {
    slideShadows: true,
    limitRotation: true,
  },
});

// Botones manuales
document.getElementById('next').addEventListener('click', () => swiper.slideNext());
document.getElementById('prev').addEventListener('click', () => swiper.slidePrev());
