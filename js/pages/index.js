$(function () {

  route.getData("api/getindexmenu", "", function (info) {
    $(".topmenu ul").html(template("menuTpl", info));
    $(".topmenu li").eq(7).nextAll().hide();

    // 点击菜单栏显示和隐藏  
    $(".topmenu li").eq(7).on("click", function () {
      $(this).nextAll().slideToggle(400);
    })

  });

  route.getData("api/getmoneyctrl", "", function (info) {
    //   console.log(info);
    $(".content ul").html(template("commentTpl", info));
  });





});