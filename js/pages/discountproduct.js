$(function(){
    
    var productid=route.getSearch("productid");
    console.log(productid);
    route.getData("api/getdiscountproduct",{productid:productid},function(info){
        console.log(info);
        $(".topcontent").html(template("mcproductTpl",info));
        // $(".place ul").html(template("placeTpl",info));
        // var productComComment=info.result[0].productComment;
        // console.log(productComComment);
        $(".comment").html(template("commentTpl",info));
    });
    
    
    
    })