// アニメーションスタート
// $(document).ready(function () {
//   setTimeout(function(){
//     $("loading-body").fadeOut();
//   },5000);
// });

// setTimeout(function,delay);

$(document).ready(function() {
  $("#loading-body").fadeIn().queue(function() {
      setTimeout(function(){$("#loading-body").dequeue();
      }, 3000);
  });
  $("#loading-body").fadeOut();
});