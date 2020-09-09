$(function(){
 //スムーススクロール
  $('a[href^="#"]').click(function(){
    var speed = 400
    var href=$(this).attr("href");
    var target=$(href == "#" || href =="" ? 'html':href);
    var position= target.offset().top;
    $("html,body").animate({scrollTop:position},speed,'swing');
    return false;
  });

  function ochibaMaker(n) {
    var ochiba = document.createElement("div");
    ochiba.className = "ochiba";
    ochiba.innerHTML = "🍂";
    for(var i = 0; i < n; i++) {
        ochibaSet(ochiba);
    }
}

   function ochibaSet(clone) {
    var ochibaClone = clone.cloneNode(true);
    var ochibaStyle = ochibaClone.style;
    ochibaStyle.left = 100 * Math.random() + "%";
    ochibaStyle.animationDelay = 8 * Math.random() + "s";
    ochibaStyle.fontSize = ~~(20 * Math.random() + 10) + "px";

    //秋っぽい色にランダムで OSなどの環境により適用されない事があります
    switch(~~(3 * Math.random())) {
        case 0: var ochibaColor = "#91002C"; break;
        case 1: var ochibaColor = "#E8380D"; break;
        case 2: var ochibaColor = "#F39800"; break;
    }
    ochibaStyle.color = ochibaColor;

    document.body.appendChild(ochibaClone);
    ochibaClone.addEventListener("animationend", function() {
        this.parentNode.removeChild(this);
        var ochiba = document.createElement("div");
        ochiba.className = "ochiba";
        ochiba.innerHTML = "🍂;";
        ochibaSet(ochiba);
    }, false)
}

//使用例 落ち葉を50枚出します
ochibaMaker(30);

var navPros = $("header").offset().top;
$(window).scroll(function(){
  if ($(window).scrollTop() > navPros) {
    $("header").css("position","fixed");
  }else {
    $("header").css("position","static");
  }
});
//トップへ戻るボタン
var showFlag = false;
   var topbtn = $('#topbtn');
   topbtn.css('bottom', '-300px');
   var showFlag = false;
   $(window).scroll(function () {
       if ($(this).scrollTop() > 400) {
           if (showFlag == false) {
               showFlag = true;
               topbtn.stop().animate({'bottom' : '20px'}, 200);
           }
       } else {
           if (showFlag) {
               showFlag = false;
               topbtn.stop().animate({'bottom' : '-300px'}, 200);
           }
       }
   });
});
