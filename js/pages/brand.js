$(function(){

   var brandtitleid=route.getSearch("brandtitleid");
   var productid=0;
    route.getData("api/getbrand",{brandtitleid:brandtitleid},function(info){
        console.log(info);
        $(".sort ul").html(template("brandTpl",info));

        $(".sort ul").on("click","li",function(){
            
        })
    
    });
    
    route.getData("api/getbrandproductlist",{brandtitleid:brandtitleid,pagesize:4},function(info){
        // console.log(info);
        
        $(".sale .content ul").html(template("saleTpl",info));
        productid=info.result[0].productId;
        productImg=info.result[0].productImg;
        $(".top").html(template("topTpl",info));
              






    });

    route.getData("api/getproductcom",{productid:productid},function(info){
        // console.log(info);
        $(".comtext").html(template("bottomTpl",info));
    
    });
    
    
    
    
    
    
    })