$(document).ready(function(){
  // 상단에 있는 터치슬라이드 1번
  const swiper = new Swiper('.swiper-container', { // 오브젝트형태 속성값

    direction: 'horizontal',
    slidesPerView: 1,
    debugger: true, 
    loop: true,
    centeredSlides: true,

        autoplay: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
  });

  // 상단에 있는 터치슬라이드 2번
  const swiper2 = new Swiper('.swiper-container2', { // 오브젝트형태 속성값

    direction: 'horizontal',
    slidesPerView: 1,
    debugger: true, 
    loop: true,
    centeredSlides: true,

        autoplay: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
  });
});
