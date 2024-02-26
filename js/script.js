/* ーーーーーーーーーーカナstartーーーーーーーーーーーーーーー */
$(document).ready(function () {
    $(".header_hamburger").click(function () {
        $(".header").toggleClass('active');
    });
});

/* ーーーーーーーーーーendーーーーーーーーーーーーーーー */


/* ーーーーーーーーーーザキstartーーーーーーーーーーーーーーー */
//スライドを動かすためのJS設定
$(function () {
    $('.carouselarea').slick({
        centerMode: true,//スライドを中心にして表示、部分的に前後のスライドが見える設定
        slidesToShow: 3,//一度に表示するスライド数
        centerPadding: '5%',//スライドの前後が見える幅の設定
        dots: false,//ドットインジケーターの表示設定
        autoplay: true,//自動再生の設定
        autoplaySpeed: 1500,//自動再生の速度設定
        speed: 1500,//スライド、フェードアニメーションの速度設定
        focusOnSelect: true,//クリックした要素にスライドする設定
        infinite: true,//スライドの無限ループ設定
        touchMove: true,//タッチでスライドできる設定
        variableWidth: true,//スライド幅の自動計算の有無設定

        responsive: [ //スマホ画面にしたときのサイズ変更設定
            {
                breakpoint: 769, //798px以下で適用
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });
});

//featureエリアのモーション設定
$(window).scroll(function () {
    $('.grid-box').each(function () {
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();

        if (scroll > elemPos - windowHeight + 150) {
            $(this).addClass('scrollin');
        }
    });
});
/* ーーーーーーーーーーendーーーーーーーーーーーーーーー */


/* ーーーーーーーーーーコウstartーーーーーーーーーーーーーーー */

/* ーーーーーーーーーーendーーーーーーーーーーーーーーー */