$(function(){
  var shopid=0;
  var areaid=0;
  render();

    // 渲染店铺
route.getData("api/getgsshop","",function(info){
    
    // console.log(info);
    $(".list ul").html(template("shopTpl",info));
    $(".shopname").on("click",function(){
        $(".list1").hide();
        $(".list").slideToggle(400);
        $(".list ul").html(template("shopTpl",info));
        $(".list ul li").on("click",function(){
           var shopname=$(this).text().trim();
           $(".shop p").text(shopname);
           $(".list").hide();
           shopid=$(this).data("shopid");
           render();
        });
    })
});


// 地区
 route.getData("api/getgsshoparea","",function(info){
    //  console.log(info);
    $(".list1 ul").html(template("placeTpl",info));
    $(".placename").on("click",function(){
        $(".list").hide();
        $(".list1").slideToggle(400);
        $(".list1 ul").html(template("placeTpl",info));
        $(".list1 ul li").on("click",function(){
            var placename=$(this).text().trim();
            placename=placename.slice(0,2);
            $(".place p").text(placename);
            $(".list1").hide();
            
            areaid=$(this).data("areaid");
            render();

        })
    })
 });

 function render(){
    route.getData("api/getgsproduct",{shopid:shopid,areaid:areaid},function(info){
        // console.log(info);
        $(".productList ul").html(template("productTpl",info));  
    });
 }






})
