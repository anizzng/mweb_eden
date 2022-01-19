/* 사이드 메뉴 */
function openNav() {
  document.getElementById("mySidepanel").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

/* 회원가입 버튼 */
function joinUs(){
  alert("회원가입 페이지는 준비중입니다.")
}

/* 사이드 배너 언어 버튼 자바스크립트 */
var utilView = document.getElementsByClassName("util_view");
var langOpt = document.getElementById("langOpt");
var opened = 0;

function langChose1(){
  if (opened == 0) {
    utilView[0].style.display = "block";
    opened = 1;
  } else if (opened == 1) {
    utilView[0].style.display = "none";
    opened = 0;
  }
  langOpt.classList.toggle("is_active"); // 없으면 넣어주고 있으면 빼준다.
}

var langOpt2 = document.getElementById("langOpt2");
var opened = 0;
function langChose2(){
  if (opened == 0) {
    utilView[1].style.display = "block";
    opened = 1;
  } else if (opened == 1) {
    utilView[1].style.display = "none";
    opened = 0;
  }
  langOpt2.classList.toggle("is_active"); // 없으면 넣어주고 있으면 빼준다.
}

// 제이쿼리 언어 버튼
// $('.site_list').each(function(index){
//   $(this).on('click', function(){
//     $(this).next().slideToggle();
//   });
// });

// var state = 0;
// $('.site_list').each(function(index){
//   $(this).on('click', function(){
// 	if(state==0) {
// 		$(this).css({'background':'url(images/up-arrow.png)', 'background-repeat':'no-repeat'});
// 		state=1;
// 	}else{
// 		$(this).css({'background':'url(images/down-arrow.png)', 'background-repeat':'no-repeat'});
// 		state=0;
// 	}

//     $(this).next().slideToggle();
//   });
// });




/* 메인 상단 배너 */
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var bars = document.getElementsByClassName("bar");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < bars.length; i++) {
    bars[i].className = bars[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  bars[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}


/* 객실, 다이닝, 부대시설, Event 배너 */
//1. jquery + swiper 터치슬라이드
$(document).ready(function(){
  // 2. 제이쿼리+swiper 연동 : 상단에 있는 슬라이드 1번
  const swiper = new Swiper('.swiper-container-sec01', { // 오브젝트형태 속성값

      direction: 'horizontal',
      slidesPerView: 'auto',
      spaceBetween: 10,

      debugger: true,
      loop: true,
      centeredSlides: false,

      autoplay: false,
      pagination: false,

  });

  const swiper2 = new Swiper('.swiper-container-sec02', { // 오브젝트형태 속성값

    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 10,

    debugger: true,
    loop: true,
    centeredSlides: false,

    autoplay: false,
    pagination: false,

  });

  const swiper3 = new Swiper('.swiper-container-sec03', { // 오브젝트형태 속성값

    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 10,

    debugger: true,
    loop: true,
    centeredSlides: false,

    autoplay: false,
    pagination: false,

  });

  const swiper5 = new Swiper('.swiper-container-sec05', { // 오브젝트형태 속성값

    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 10,

    debugger: true, 
    loop: true,
    centeredSlides: false,

    autoplay: false,
    pagination: false,

  });

  const swiper4 = new Swiper('.swiper-container-sec04', { // 오브젝트형태 속성값

    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 10,
    debugger: true,
    loop: true,
    centeredSlides: false,

    autoplay: false,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
    }

})

});