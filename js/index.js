'use strict'

{
 
// navアニメーション
  $(function() {
    var nav = $('.clone');
    //表示位置
    var navTop = nav.offset().top+750;
    //ナビゲーションの高さ
    var navHeight = nav.height()+10;
    var showFlag = false;
    nav.css('top', -navHeight+'px');
    //ナビゲーションの位置まできたら表示
    $(window).scroll(function () {
        var winTop = $(this).scrollTop();
        if (winTop >= navTop) {
            if (showFlag == false) {
                showFlag = true;
                nav
                    .addClass('fixed')
                    .stop().animate({'top' : '0px'}, 200);
            }
        } else if (winTop <= navTop) {
            if (showFlag) {
                showFlag = false;
                nav.stop().animate({'top' : -navHeight+'px'}, 200, function(){
                    nav.removeClass('fixed');
                });
            }
        }
    });
});




// ロード時にフェード
// メインロゴフェード
$('head').append(
  '<style>.load-fade{display:none;}'
  );
  $(window).on("load", function() {
  $('.load-fade').delay(600).fadeIn("slow");
  });
// navロゴ
$('head').append(
  '<style>.load-fade2{display:none;}'
  );
  $(window).on("load", function() {
  $('.load-fade2').delay(2000).fadeIn("slow");
  });
  






// スクロールしてフェードイン
$(function(){
  $(window).scroll(function (){
      $('.fadein').each(function(){
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > position - windowHeight + 200){
            $(this).addClass('active');
          }
      });
  });
});


// メニューカレント表示
$(function(){
    $('nav.menu ul li a').each(function(){
        var $href = $(this).attr('href');
        if(location.href.match($href)) {
        $(this).addClass('active');
        } else {
        $(this).removeClass('active');
        }
    });
});



// Topに戻る
$(function(){
  var pagetop = $('#page_top');
  // ボタン非表示
  pagetop.hide();

  // 100px スクロールしたらボタン表示
  $(window).scroll(function () {
     if ($(this).scrollTop() > 550) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });
});






// ハンバーガーメニュー２
$(function(){
  $("#barger").click(function(){
    $(".icon").toggleClass("close");
    $("#nav0").toggleClass("close");
  });
});





// スライダー
$(function() {
  //swiper 480以下で起動
  var swiper; 
  $(window).on('load resize', function(){
      var w = $(window).width();
      if (w <= 480) {
          if (swiper) {
              return;
          } else {
              swiper = new Swiper('.swiper-container', {
                  loop: true,
                  autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                  },
              });
          }
      } else {
          if (swiper) {
              swiper.destroy();
              swiper = undefined;
          } 
      } 
  });
}); 







}