$(function(){

    var categoryid=route.getSearch("categoryid");
    var category=route.getSearch("category");
    var pageid=1;


    // 渲染产品类表
//  route.getData("api/getproductlist",{categoryid:categoryid,category:category,pageid:pageid},function(info){
//     // console.log(info);
//     $(".product ul").html(template("catListTpl",info));
// });


     // 渲染三级列表
route.getData("api/getcategorybyid",{categoryid:categoryid},function(info){
    console.log(info);
    $(".left ul").html(template("pathTpl",info));
});


render();
// 封装渲染
function render(){
    route.getData("api/getproductlist",{categoryid:categoryid,category:category,pageid:pageid},function(info){
        $(".product ul").html(template("catListTpl",info));
    });
}


// 分页
    route.getData("api/getproductlist",{categoryid:categoryid},function(info){
        // console.log(info);
        var count=info.totalCount;
        var pagesize=info.pagesize;
        var page=Math.ceil(count/pagesize);
        info["page"]=page;
        $(".page").html(template("pageTpl",info)); 

        $("#selectPage").on("change",function(){
            pageid=$(this).val(); 
            render();
        });

        $(".right a").on("click",function(){
            if(pageid>=page){
                return false;
            }
             pageid++;
             $("option:selected").prop("selected",false).next().prop("selected",true);         
             render();
               
          });


     $(".front a").on("click",function(){
     if(pageid<=0){
         return false;
     }
        pageid--;
        $("option:selected").prop("selected",false).prev().prop("selected",true);
        render();
          
     });
          
     });



     
     $(".product").on("click","a",function(){
        var productid=$(this).data("productid");
        var href=location.href;
         console.log(href);
         href="productdetail.html?productid="+productid+"&categoryid="+categoryid+"&category="+category;
         console.log(href);
         $(this).attr("href",href);
     })



    


});