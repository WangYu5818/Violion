'use strick';
$(function(){
    
  $(window).load(function(){
    var visiter=0;
    visiter+=1;
    console.log(visiter)
  })

    $(window).on('resize',resize).trigger('resize')

  function resize(){
    var windowWidth = $(window).width();
    var isSmall = windowWidth<768;
    
    $('#main_ad>.carousel-inner>.item').each(function(i,ite){
        
        var $item = $(ite);
        
        var img = isSmall?$item.data('img-sm'):$item.data('img-lg') ;
        if(isSmall){
            $item.html('<img src ="'+img+'"/>')
        }else{
            $item.html('');
            $item.css('backgroundImage','url("'+ img+'")');
        }

    });


var $ulcontainer  =$('.nav-tabs');
var width = 30;
$ulcontainer.children().each(function(i,ele){
    width+=ele.clientWidth;
})

if(width>$(window).width()){$ulcontainer
    .css('width',width)
    .parent().css('overflow-x','scroll');}

  }
//   
var $newsTitle = $(".news-title");
$('#news .nav-pills a').on('click',function(){

    var $this = $(this);
    var $title=$this.data("title");
    $newsTitle.text($title);

})

  var $carousel = $('.carousel');
  var startX,endX;
  var offset = 30;
//   注册滑动事件
$carousel.on('touchstart',function(e){
    startX = e.originalEvent.touches[0].clientX;
})
$carousel.on('touchmove',function(e){
    endX = e.originalEvent.touches[0].clientX;
})
$carousel.on('touchend',function(e){
    // 控制精度
    var distance = Math.abs(startX-endX)
    if (distance>offset) {
    $this.carousel(startX>endX?'next':'prev')
    }
})

})