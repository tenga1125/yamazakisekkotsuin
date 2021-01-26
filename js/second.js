// navアニメーション
$(function() {
  var nav = $('.clone');
  //表示位置
  var navTop = nav.offset().top+500;
  //ナビゲーションの高さ（シャドウの分だけ足してます）
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






$(function(){
  load_effect();
  $(window).scroll(function (){
      scroll_effect();
  });
});

//ふわっとロード
function load_effect(){
  var tt = $(window).scrollTop();
  var hh = $(window).height();
  $('.load-fade').each(function(){
      var yy = $(this).offset().top;
      if (tt > yy - hh){
          $(this).addClass('done');
      }
  });
  $('.load-up').each(function(){
      var yy = $(this).offset().top;
      if (tt > yy - hh){
          $(this).addClass('done');
      }
  });
}

//ふわっとスクロール
function scroll_effect(){
  var tt = $(window).scrollTop();
  var hh = $(window).height();
  $('.scroll-fade').each(function(){
      var yy = $(this).offset().top+400;//効果発生開始タイミングを操作したい場合は数値を変更する
      if (tt > yy - hh){
          $(this).addClass('done');
      }
  });
  $('.scroll-up').each(function(){
      var yy = $(this).offset().top+300;//効果発生開始タイミングを操作したい場合は数値を変更する
      if (tt > yy - hh){
          $(this).addClass('done');
      }
  });

  
}



function initMap() {

  var target = document.getElementById('target');
  var map;
  var sekkotuin = {lat: 36.739400, lng: 136.980621};  // 接骨院の緯度,経度
  var marker;   // ピンのマーカーを配置
  var infoWindow;   // 情報ウィンドウを配置

  map = new google.maps.Map(target, {
    center: sekkotuin,
    zoom: 17,
    streetViewControl: false,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.LEFT_BOTTOM,
    },
  });


  var widgetDiv = document.getElementById("map-widget");
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(widgetDiv);


  // イベント設定
  // クリックした箇所の緯度と経度を表示
  map.addListener('click', function(e) {
    console.log(e.latLng.lat());    // 緯度
    console.log(e.latLng.lng());    // 経度
    console.log(e.latLng.toString());    // いい感じにフォーマットする
    this.setCenter(e.latLng);    // クリックした箇所を中心にする
    this.panTo(e.latLng);    // 少しゆっくり移動
  });

  // ピンのマーカーを表示
  marker = new google.maps.Marker({
    position: sekkotuin,   // このmarkerをどのmapに指定したいかを表示
    map: map,   // 上で作ったmapを指定
    title: '上北島ヤマザキ接骨院',   // marker二ホバーしたときの文字列
    // icon: 'icon.png',   // markerの画像を変更
    // icon: {   // marker画像を縮小,くっきりさせる
    //   url: 'icon.png',
      // scaledSize: new google.maps.Size(24, 24)
    // },
    // animation: google.maps.Animation.BOUNCE,   // アニメーション効果(BAUNCE)
    // animation: google.maps.Animation.DROP,   // アニメーション効果(DROP)
  })

  // マップをクリックした位置にマーカーを立てる
  // map.addListener('click', function(e) {
  //   var marker = new google.maps.Marker({
  //     position: e.latLng,   // markerのpositionをクリックした位置にする
  //     map: map,
  //     title: e.latLng.toString(),
  //     animation: google.maps.Animation.DROP
  //   })
  //   // 配置したマーカーを再度クリックして消す
  //   marker.addListener('click', function() {
  //     this.setMap(null);
  //   })
  // })

  // 情報ウィンドウを配置
  // infoWindow = new google.maps.InfoWindow({
  //   position: sekkotuin,
  //   // content: '<strong>Hello!</strong> Hello! Hello! Hello! Hello!'   // 表示したい情報
  //   // contentでHTML要素からlistを表示させる
  //   content: document.getElementById('info'),
  //   // maxWidth: 100,
  // });
  // // 表示するマップを指定
  // infoWindow.open(map);
}









// サイドバーを固定

