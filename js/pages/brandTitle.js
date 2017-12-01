$(function(){
route.getData("api/getbrandtitle","",function(info){
    // console.log(info);
    $(".categoryList ul").html(template("catListTpl",info));

    // $(".categoryList").on("click","a",function(){
    //     var brandtitleid=$(this).data("brandtitleid");
    //    location.href="brand.html?brandtitleid="+brandtitleid;

    // })
});






})