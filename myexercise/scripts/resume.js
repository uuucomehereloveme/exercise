$("#audio_btn").click(function(){    
    var music = document.getElementById("music");    
    if(music.paused){    
        music.play();    
        $("#audio_btn").attr("class","glyphicon glyphicon-volume-up");    
    }else{    
        music.pause();    
        $("#audio_btn").attr("class","glyphicon glyphicon-volume-off");    
    }    
});   

$(function(){
	  var slideShow = $('.slideShow'),image = $('.slideShow div a'),
	      showNumber = $('.showNav span');
      var timer = null;
	  var iNow = 0;
      
      image.eq(0).addClass('firstPhoto');
      image.eq(0).siblings().hide();
	  showNumber.mouseover(function(){
	    $(this).addClass('active').siblings().removeClass('active');
		var index = $(this).index();
		iNow = index;
		//image.eq(iNow).stop().animate({opacity:1,'z-index':1},300).siblings().stop().animate({opacity:0,'z-index':0},300);
		image.eq(iNow).stop().fadeIn().show().siblings().stop().fadeIn().hide();
        //image.fadeOut();
		//image.eq(iNow).fadeIn();
	  });

      function autoplay(){
      timer = setInterval(function(){
	    iNow++;
		if(iNow > showNumber.length-1){
		  iNow = 0;
		}
		showNumber.eq(iNow).addClass('active').siblings().removeClass('active');
		//image.eq(iNow).stop().animate({opacity:1,'z-index':1},300).siblings().stop().animate({opacity:0,'z-index':0},300);
		image.eq(iNow).stop().fadeIn().show().siblings().stop().fadeIn().hide();
	  },2000);
	  }

      autoplay();

	  slideShow.hover(function(){
	     clearInterval(timer);
	   },autoplay);
});