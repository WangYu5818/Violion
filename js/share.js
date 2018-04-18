var welcome = "这里是";
     var mess = document.getElementsByTagName("title")[0].innerHTML;
        
        window._bd_share_config = {
          common : {
            bdText : welcome+mess,	
            bdDesc : "欢迎来到提琴世界^^",	
            bdUrl : 'https://www.baidu.com', 	
            bdPic : './img/GZ.png'
          },
          share : [{
            "bdSize" : 16
          }],
          slide : [{	   
            bdImg : 0,
            bdPos : "left",
            bdTop : 200
          }]
          // ,image : [{
          //   viewType : 'list',
          //   viewPos : 'top',
          //   viewColor : 'black',
          //   viewSize : '16',
          //   viewList : ['qzone','tsina','tqq','renren']
          // }]
        }
        with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion='+~(-new Date()/36e5)];