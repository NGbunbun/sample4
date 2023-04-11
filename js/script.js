$(function(){
   //----------------------------------------------------
   //-------------------- スライダー ---------------------
   //----------------------------------------------------
   const swiper1 = new Swiper(".swiper1", {
      // 最初に戻る
      loop: true,
      // カバーフロー設定・カーソルポインタ設定
      effect: "coverflow",
      grabCursor: true,
      // ナビボタン追加
      navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev"
   }
   });

   const swiper = new Swiper(".gallery-slider", {
   loop:true,
   effect: "coverflow",
   slidesPerView: "auto",
   centeredSlides: true,
   grabCursor: true,
   coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
   },
   pagination: {
      el: ".swiper-pagination",
   },
   });

   const swiper3 = new Swiper(".reviews-slider", {
   loop:true,
   grabCursor: true,
   breakpoints: {
      768:{
         slidesPerView: "1",
      },
      990:{
         slidesPerView: "2",
      },
   },
   pagination: {
      el: ".swiper-pagination",
      },
   });

   //----------------------------------------------------
   //----------------- FAQ アコーディオン ----------------
   //----------------------------------------------------
   let questions = document.querySelectorAll('.question');

   questions.forEach((question) => {
   question.addEventListener('click',() => {
      let answer = question.nextElementSibling;
      answer.classList.toggle('active');
   });
   });

   //----------------------------------------------------
   //------------------- ページ内リンク ------------------
   //----------------------------------------------------
   $('.nav_item a,.btn,.footer_box a,.spnav_item a').click(function(){
      let id = $(this).attr('href');
      let position = $(id).offset().top-50;
      $('html,body').animate({scrollTop:position},500);
   });

   //----------------------------------------------------
   //------------------ バーガーメニュー -----------------
   //----------------------------------------------------
   $('.fa-bars').click(function(){
      $('.nav_sp').toggleClass('appear');
   });
   $('.spnav_item a').click(function(){
      $('.nav_sp').removeClass('appear');
   });

});
