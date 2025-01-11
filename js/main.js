//////////// カルーセル ////////////
$('.cover-slick').slick({
  infinite: true,
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
});

//////////// スクロールに付随したフェードイン（左右方向） ////////////
$('.left').waypoint({
  handler: function (direction) {
    // 要素が画面中央に来るとここが実行される
    if (direction === 'down') {
      /**
       * 下方向のスクロール
       * イベント発生元の要素に
       * fadeInLeftアニメーションを付けることで
       * アニメーションを開始
       */
      $(this.element)
        .addClass('animate__fadeInLeft');
    }
  },

  // 要素が画面中央に来たらhandlerを実行
  offset: '50%',
});

$('.right').waypoint({
  handler: function (direction) {
    // 要素が画面中央に来るとここが実行される
    if (direction === 'down') {
      /**
       * 下方向のスクロール
       * イベント発生元の要素に
       * fadeInLeftアニメーションを付けることで
       * アニメーションを開始
       */
      $(this.element)
        .addClass('animate__fadeInRight');
    }
  },

  // 要素が画面中央に来たらhandlerを実行
  offset: '50%',
});


//////////// セミナー説明 ////////////
// アコーディオンのタイトルがクリックされたら
$('.workshop-accordion-title').on('click', function (e) {

  // .accordion-contentを選択
  var content = $(e.target).next();

  // .accordion-contentを表示・非表示
  content.slideToggle();

});


// 三角形の動き
$(function () {
  $(".workshop-accordion-title").on('click', function () {
    $(this).toggleClass("active");
  });
});