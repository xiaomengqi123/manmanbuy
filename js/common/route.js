;(function(window){

 var route={
     baseURL:"http://127.0.0.1:9090/",
     getData:getData,
     getParam:getParam,
     getSearch:function(key){
         return this.getParam()[key];
     }


 }

//  获取数据
 function getData(url,data,callback){
    $.ajax({
        type:"get",
        url:route.baseURL+url,
        data:data,
        dataType:"json",
        success:function(info){
            callback&&callback(info);
        }
    });
 }
// 获取url的参数
function getParam(){
    var search=location.search;
    search=decodeURI(search);
    search=search.slice(1);
    var arr=search.split("&");
    var obj={};
    arr.forEach(function(v){
        var key=v.split("=")[0];
        var value=v.split("=")[1];
        obj[key]=value;
   });
   return obj;
}



 



window.route=route;
})(window);