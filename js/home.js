//------
//navigation　slide down
//------

 $(window).on("load scroll",function(){
    let $main = $("#main"),
        $homeHeader = $(".home .header"),
        $distance = $main.offset().top,
        $scrollVal = $(window).scrollTop(),
        $navH = $(".header").outerHeight();

  	// console.log($distance);
  	// console.log($scrollVal);

    if(navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
    //ここに書いた処理はスマホ閲覧時は無効となる
    }
    else
    if($scrollVal>$distance){
        $homeHeader.addClass("fix");
        $main.css("margin-top",$navH);
    }else{
        $homeHeader.removeClass("fix");
        $main.css("margin-top",0);
    }
});

$(function(){
  $(window).scroll(function(){
    let trigger = $('.js-trigger')
      $(trigger).each(function(){
      let $scroll = $(window).scrollTop(),
          $elemTop = $(this).offset().top,
          $windowHeight = $(window).height();

          console.log($scroll);
          console.log($elemTop);
          console.log($windowHeight);

      if ($scroll > $elemTop - $windowHeight + 250){
  　    $(this).addClass('fade-scale');
      }
    });
  });
  $(window).trigger('scroll');
});


$(document).ready(function(){
  let eyecatch = $('.eyecatch')
    $(eyecatch).each(function(){
      $(this).addClass('soft-in')
    });

});


//------
//SP
//------

//------
//ハンバーガーメニューbtn
//------
$(".btn-trigger").on("touchstart",function(){
  $(this).toggleClass("active");
  // $(".header-nav").toggleClass("dn");
  $(".header-nav").fadeToggle(500);
});
