//quick-menu
$(function(){
    $.ajax({
      url: "./json/quick-menu.json",
      dataType: "json",
      success : function(data){
        if(data.length>0){
          for(var i in data){
            $("#quick-menu > .li-box > li").eq(i).append("<a href='#'><span><img src='img/quick/" + data[i].url + "' alt='" + data[i].alt + "'></span><br></a>"); 
            $("#quick-menu > .li-box > li").eq(i).append("<span>" + data[i].txt + "</span>");                           
          }
        }
      }
    });
  });
  