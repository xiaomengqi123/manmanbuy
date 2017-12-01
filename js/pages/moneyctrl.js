$(function(){

  var pageid=1;

//   分页
render();
// 封装渲染
function render(){
      route.getData("api/getmoneyctrl",{pageid:pageid},function(info){
        console.log(info);
        $(".product ul").html(template("moneyctrlTpl",info));
    })
}


// 分页
    route.getData("api/getmoneyctrl",{pageid:pageid},function(info){
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
         href="moneyctrlproduct.html?productid="+productid;
         console.log(href);
         $(this).attr("href",href);
     })






})