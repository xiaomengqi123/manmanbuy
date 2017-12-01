$(function(){
// 头部导航渲染
var titleid=0;
render();

route.getData("api/getbaicaijiatitle","",function(info){
    // console.log(info);
    $(".topbar ul").html(template("topbatTpl",info));

   $(".topbar ul").on("click","li",function(){
       $(this).addClass("now").siblings().removeClass("now");
      titleid=$(this).data("titleid");
       render();
   })


    var lis=document.querySelectorAll(".topbar ul li");
    var slideul=document.querySelector(".topbar ul");
    //   子元素的宽度
    var ulwidth=0;
    var topbar=document.querySelector(".topbar");
    //   父元素的宽度
    var topbarwidth=topbar.offsetWidth;
    
    
    lis.forEach(function(element,index,lis){
        var liwidth=element.offsetWidth;
        ulwidth += liwidth;    
    });
    //   设置ul的宽度;
    slideul.style.width=ulwidth+"px";  
    var startX=moveX=distanceX=currentX=0;
    slideul.addEventListener("touchstart",function(e){
      startX=e.touches[0].clientX;
    });
    
    slideul.addEventListener("touchmove",function(e){
      moveX=e.touches[0].clientX;
      distanceX=moveX-startX;
      if((currentX+distanceX)>=minslide && (currentX+distanceX)<=maxslide){
          slideul.style.transform='translateX('+(currentX+distanceX)+'px)';
          slideul.style.transition="none";
      }
    
         
    });
    slideul.addEventListener("touchend",function(e){
        currentX+=distanceX;  
        if(currentX>maxposition){
            currentX=maxposition;
            slideul.style.transform='translateX('+(currentX)+'px)';
            slideul.style.transition="all 0.4s";
        }
        if(currentX<minposition){
            currentX=minposition;
            slideul.style.transform='translateX('+(currentX)+'px)';
            slideul.style.transition="all 0.4s";
        }
        
    });
    
   
      
    var maxposition=0;
    var minposition=topbarwidth-ulwidth;
    var maxslide=0+50;
    var minslide=minposition-50;


});




function render(){
    route.getData("api/getbaicaijiaproduct",{titleid:titleid},function(info){
        $(".productList ul").html(template("productTpl",info));
   
    });
}





})