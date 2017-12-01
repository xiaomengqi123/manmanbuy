$(function(){
  route.getData("api/getinlanddiscount","",function(info){
      console.log(info);
      $(".discount>ul").html(template("discountTpl",info));


      $(".discount").on("click","a",function(){

        var productid=$(this).data("productid");
        var href=location.href;
         href="discountproduct.html?productid="+productid;
         console.log(href);
         $(this).attr("href",href);

      })
  });





  




})