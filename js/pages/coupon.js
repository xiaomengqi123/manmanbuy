   $(function(){

    route.getData("api/getcoupon","",function(info){
        console.log(info);
        $(".coupon ul").html(template("couponTpl",info));
    
       });


   })