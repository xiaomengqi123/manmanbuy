$(function(){
    // 渲染页面
    var couponid=route.getSearch("couponid");
    var imglength=0;
    var currentimg;
    route.getData("api/getcouponproduct",{couponid:couponid},function(info){
        $(".couponproduct ul").html(template("couponproductTpl",info));
        imglength=info.result.length;
        // console.log(imglength);
         


        //    点击出现蒙层
        $(".couponproduct ul li").on("click",function(){
            $(".shade").addClass("now");
            $(".slide").off().on("click",function(){
                $(".shade").removeClass("now");
            });
        
         // 显示当前的图片
            // currentimg=$(this).data("img"); 
            // info["currentimg"]=currentimg;
            // console.log(info);
            // $(".slide").html(currentimg);  

            
        
          //  动态渲染图片
          var $slideul=$(".shade .slide ul");
          var $slide=$(".slide");
          var imgwidth=$slide.width();
          var lis;
          $slideul.css("width",''+(imglength*imgwidth)+'px')  ;

          render();

          function render(){
            route.getData("api/getcouponproduct",{couponid:couponid},function(info){              
                $(".slide ul").html(template("slideTpl",info));
                lis=$(".slide ul li");   
            });
          }   
        
           //让轮播图动                
            var count=0;
            $(".rightarrow").on("click",function(){
                count++;               
                if(count>lis.length-1){
                    count=0;
                    $slideul.css("transform",'translateX(0px)');
                }
                $slideul.css("transform",'translateX('+(-imgwidth*count)+'px)');
                
            });

            $(".leftarrow").on("click",function(){
                count--;
                if(count<0){
                    count=lis.length-1;
                    $slideul.css("transform",'translateX('+(-imgwidth*count)+'px)');
                }
                $slideul.css("transform",'translateX('+(-imgwidth*count)+'px)');
            });
         });

    });
});


