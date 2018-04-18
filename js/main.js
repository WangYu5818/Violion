'use strick';
$(function(){
    
  $(window).load(function(){
    var visiter=0;
    visiter+=1;
    console.log(visiter)
  })

    //   trigger()立即执行一下
    $(window).on('resize',resize).trigger('resize')

    // 根据屏幕尺寸，自动改变背景图片
  function resize(){
    var windowWidth = $(window).width();
    var isSmall = windowWidth<768;
    // i为序号，ite为每一项
    
    $('#main_ad>.carousel-inner>.item').each(function(i,ite){
        // 因为拿到的是dom对象，需要转换
        
        var $item = $(ite);
        
        var img = isSmall?$item.data('img-sm'):$item.data('img-lg') ;
        if(isSmall){
            $item.html('<img src ="'+img+'"/>')
        }else{
            $item.html('');
            $item.css('backgroundImage','url("'+ img+'")');
        }

    });

     //   控制标签页的标签容器宽度

var $ulcontainer  =$('.nav-tabs');
// 获取所有子元素的宽度和
var width = 30;//因为bootstrap有padding，所以要多加一些
// 遍历子元素
$ulcontainer.children().each(function(i,ele){
    // console.log(ele.clientWidth)
    width+=ele.clientWidth;
})

if(width>$(window).width()){$ulcontainer
    .css('width',width)
    .parent().css('overflow-x','scroll');}
//   判断当前ul宽度是否超过屏幕，超出就显示横向滚动条

  }
//   
var $newsTitle = $(".news-title");
$('#news .nav-pills a').on('click',function(){
    // 获取当前点击元素
    // 获取对应title值
    // 将title设置到相应的位置
    var $this = $(this);
    var $title=$this.data("title");
    $newsTitle.text($title);

})

// 获取轮播元素
  var $carousel = $('.carousel');
  var startX,endX;
  var offset = 30;
//   注册滑动事件
$carousel.on('touchstart',function(e){
    // console.log(e.originalEvent.touches[0].clientX);
    startX = e.originalEvent.touches[0].clientX;
})
$carousel.on('touchmove',function(e){
    // console.log(e.originalEvent.touches[0].clientX);
    endX = e.originalEvent.touches[0].clientX;
})
$carousel.on('touchend',function(e){
    // 控制精度
    var distance = Math.abs(startX-endX)
    if (distance>offset) {
    //    console.log(distance) \
    $this.carousel(startX>endX?'next':'prev')
    }
})

})