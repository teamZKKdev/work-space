/* ーーーーーーーーーーカナstartーーーーーーーーーーーーーーー */
// ロード画面ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
let bar = new ProgressBar.Line(loading_text, {//id名を指定
    easing: 'easeInOut',//アニメーション効果linear、easeIn、easeOut、easeInOutが指定可能
    duration: 2000,//時間指定(1000＝1秒)
    strokeWidth: 2,//進捗ゲージの太さ
    color: '#0F8CFD',//進捗ゲージのカラー
    trailWidth: 0.2,//ゲージベースの線の太さ
    trailColor: 'transparent',//ゲージベースの線のカラー
    text: {//テキストの形状を直接指定
        style: {//天地中央に配置
            position: 'absolute',
            left: '50%',
            top: '50%',
            padding: '0',
            margin: '-50px 0 0 0',//バーより上に配置
            transform: 'translate(-50%,-50%)',
            'font-size': '1.5rem',
            color: '#000',
        },
        autoStyleContainer: false //自動付与のスタイルを切る
    },
    step: function (state, bar) {
        bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
    }
});

//アニメーションスタート
bar.animate(1.0, function () {
    $("#loading").delay(500).fadeOut(800);
});

// ヘッダーの色変えーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
$(function () {
    if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
        $(window).on("scroll", function () {
            if ($(this).scrollTop() > 0) {
                $(".header").addClass("changeColor");
            } else {
                $(".header").removeClass("changeColor");
            }
        });
    }
});

// トップページのときだけヘッダーを固定するーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
$(document).ready(function () {
    if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
        $('.header').addClass('headerFixed');
    } else {
        $('.header').removeClass('headerFixed');
    }
});

//ヘッダーの出し入れーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
let startPos = 0;
let winScrollTop = 0;
$(function () {
    if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
        $(window).on('scroll', function () {
            winScrollTop = $(this).scrollTop();
            if (winScrollTop >= startPos) {
                if (winScrollTop >= 200) {
                    $('.header').addClass('hide');
                }
            } else {
                $('.header').removeClass('hide');
            }
            startPos = winScrollTop;
        });
    }
});

// kv部分のテキスト表示ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// TextTypingというクラス名がついている子要素（span）を表示から非表示にする定義
function TextTypingAnime() {
    $('.kv_text').each(function () {
        let elemPos = $(this).offset().top - 50;
        let scroll = $(window).scrollTop();
        let windowHeight = $(window).height();
        let thisChild = "";
        if (scroll >= elemPos - windowHeight) {
            thisChild = $(this).children(); //spanタグを取得
            //spanタグの要素の１つ１つ処理を追加
            thisChild.each(function (i) {
                let time = 150;
                //時差で表示する為にdelayを指定しその時間後にfadeInで表示させる
                $(this).delay(time * i).fadeIn(time);
            });
        } else {
            thisChild = $(this).children();
            thisChild.each(function () {
                $(this).stop(); //delay処理を止める
                $(this).css("display", "none"); //spanタグ非表示
            });
        }
    });
}

$(window).on('load', function () {
    let element = $(".kv_text");
    element.each(function () {
        let text = $(this).html();
        let textBox = "";
        text.split('').forEach(function (t) {
            if (t !== " ") {
                textBox += '<span>' + t + '</span>';
            } else {
                textBox += t;
            }
        });
        $(this).html(textBox);

    });
    setTimeout(function () {
        TextTypingAnime();
    }, 3500);
});

// ハンバーガーメニュー開閉トグルーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
$(function () {
    $(".header_hamburger").click(function () {
        $(".header").toggleClass('active');
    });
});

// メニューリンククリックでハンバーガーメニューが自動で閉じるーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
$(function () {
    $('.header_menuItemLink').on('click', function () {
        $('.header').removeClass('active');
    });
});


// アンカーリンクへのスムーズスクロールーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
$(function () {
    $('a[href^="#"]').click(function () {
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? 'html' : href);
        let position = target.offset().top;
        $("html, body").animate({ scrollTop: position }, 1000, "swing");
        return false;
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
$(function(){
    var topBtn=$('.tothetop');
    topBtn.hide();
   
    //ボタンの表示設定
    $(window).scroll(function(){
      if($(this).scrollTop()>1400){
        //---- 画面を800pxスクロールしたら、ボタンを表示する
        topBtn.fadeIn();
      }else{
        //---- 画面が800pxより上なら、ボタンを表示しない
        topBtn.fadeOut();
      } 
    });
   
    //ボタンをクリックしたら、スクロールして上に戻る
    topBtn.click(function(){
      $('body,html').animate({
      scrollTop: 0},500);
      return false;
    });
    });

// loading画面
// $(document).ready(function() {
//     $("loading-contents").fadeIn().queue(function() {
//         setTimeout(function(){$("loading-contents").dequeue();
//     }, 3000);
//     });
//     $("loading-contents").fadeOut();
// })


// document.addEventListener("DOMContentLoaded", function(){
//     // 画面が読み込まれたら非表示にする
//     hideLoading();
// });

// // 一定時間後に非表示にする関数
// function hideLoading() {
//     var loadingContents = document.getElementById("loading-contents");
//     if(loadingContents) {
//         loadingContents.style.display = "none";
//     }
// }

// // 画面の非表示後画面を表示する処理
// document.addEventListener("DOMContentLoaded", function(){
//     hideLoadingAndShowThanks();
// });

// // 非表示後thanksページを表示する関数
// function hideLoadingAndShowThanks() {
//     var loadingContents = document.getElementById("loading-contents");
//     var thanksSection = document.getElementById("thanks");
//     if(loadingContents && thanksSection) {
//         loadingContents.style.display = "none";
//         thanksSection.style.display = "block";
//     }
// }

// document.addEventListener("thanksMessageLoaded", function(){
//     // 一定の時間が経過したらアニメーションを消す
//     setTimeout(function() {
//         var animatedElement = document.getElementById("loading-contents");
//         if(animatedElement) {
//             animatedElement.style.animation = "none";   // アニメーションを解除
//         }
//     }, 5000);   //  5秒後にアニメーションを解除
// });

// const loading = document.querySelector('.loading-contents');

// window.addEventListener('load', () => {
//     loading.classList.add('hide');
// }, false);
/* ーーーーーーーーーーendーーーーーーーーーーーーーーー */