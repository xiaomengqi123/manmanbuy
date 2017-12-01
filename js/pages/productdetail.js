$(function(){

    var categoryid=route.getSearch("categoryid");
    var category=route.getSearch("category");
    var productid=route.getSearch("productid");
    var productName;


      //  获取商品详情
      route.getData("api/getproduct",{productid:productid},function(info){

        productname=info.result[0].productName;
        productName=productname.split(" ")[0];
        // console.log(info);    
        $(".display").html(template("detailTpl",info));

     
    });


    //  三级导航
    route.getData("api/getcategorybyid",{categoryid:categoryid},function(info){
        // console.log(info);
        info["productName"]=productName;
        $(".left ul").html(template("pathTpl1",info));
    });

  
//    商品评论
route.getData("api/getproductcom",{productid:productid},function(info){
    console.log(info);
    $(".content ul").html(template("comTpl",info));
})



});