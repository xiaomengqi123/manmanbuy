$(function(){
var titleId;

function render(){
    route.getData("api/getcategory",{titleid:titleId},function(data){
        $(".content").html(template("contentTpl",data)); 
    });
}
render();

route.getData("api/getcategorytitle","",function(data){
    // console.log(data);
    $(".productList ul").html(template("titleTpl",data));
       
        $(".title").on("click",function(){
            titleId=$(this).data("titleid");
           var sibling=$(this).next();
           var siblings=$(this).parent().siblings().children(".content");

           render();

          route.getData("api/getcategory",{titleid:titleId},function(data){
              // console.log(data);
              sibling.toggleClass("now");
            //   sibling.stop().slideToggle();
  
              siblings.removeClass("now");
              $(".content").html(template("contentTpl",data));    
  
       })
    });


  

})




});