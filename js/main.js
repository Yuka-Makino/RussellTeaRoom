$(function () {

  // ページ全体のフェードイン
  $(window).on("load", function() {
    $('body').fadeIn(2000); 
  });


  // ハンバーガ―メニュー
  // ハンバーガーメニューをクリックした時
  $(".hamburger").on("click", function () {
    $("header").toggleClass("open");
  });
  // メニューのリンクをクリックした時
  $("#navi a").on("click", function () {
    $("header").toggleClass("open");
  });

  $('a[href^="#"]').click(function () {
    // クリックしたaタグのリンクを取得
    let href = $(this).attr("href");
    // ジャンプ先のid名をセット hrefの中身が#もしくは空欄なら,htmlタグをセット
    let target = $(href == "#" || href == "" ? "html" : href);
    // ページトップからジャンプ先の要素までの距離を取得
    let position = target.offset().top;
    // animateでスムーススクロールを行う   ページトップからpositionだけスクロールする
    // 600はスクロール速度で単位はミリ秒  swingはイージングのひとつ
    $("html, body").animate({ scrollTop: position }, 2000, "swing");
    // urlが変化しないようにfalseを返す
    return false;
  });


  // フェードイン
  $(function(){
    $(window).scroll(function (){
      $('.fadein').each(function(){
        var pos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > pos - windowHeight + 100){
          $(this).addClass('scroll');
        }
      });
    });
  });


  // サイトロゴの動き
  var beforePos = 0;

function ScrollAnime() {
  var scroll = $(window).scrollTop();
  // スクロールの開始を検出し、ヘッダーの表示状態を変更する
  if (scroll > beforePos) {
    // スクロールダウン時、ヘッダーを隠す
    $('.site-logo').removeClass('DownMove').addClass('UpMove');
  } else if (scroll < beforePos) {
    // スクロールアップ時、ヘッダーを表示する
    $('.site-logo').removeClass('UpMove').addClass('DownMove');
  }
  beforePos = scroll; // 現在のスクロール位置を更新
}

$(window).scroll(function () {
  ScrollAnime();
});

  });
