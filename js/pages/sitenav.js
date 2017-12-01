$(function(){
route.getData("api/getsitenav","",function(info){
    console.log(info);
    $(".shop ul").html(template("sitenavTpl",info));
})



});