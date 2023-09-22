//1.saja
$(function(){
    $.ajax({
      url: "./json/saja-img.json",
      dataType: "json",
      success : function(data){
        if(data.length>0){
          for(var i in data){
            $(".saja-box > .img-box").eq(i).append("<div class='main'><div class='img-con'><a href='sub.html' target='_self'><img src='img/main_content1/" + data[i].url + "' alt='" + data[i].alt + "'></div>"); 
            $(".saja-box > .img-box > .main").eq(i).append("<div class='flag'><img src='img/icon/" + data[i].url2 + "' alt='" + data[i].alt2 + "'>");   
            $(".saja-box > .img-box > .main > .flag").eq(i).append("<span><p>" + data[i].txt + "</p></span>");   
        }
        }
      }
    });
  });

  //2.jaju
  $(function(){
    $.ajax({
      url: "./json/jaju-img.json",
      dataType: "json",
      success : function(data){
        if(data.length>0){
          for(var i in data){
            $(".jaju-box > .img-box").eq(i).append("<div class='main'><div class='img-con'><a href='sub.html' target='_self'><img src='img/main_content2/" + data[i].url + "' alt='" + data[i].alt + "'></div>"); 
            $(".jaju-box > .img-box > .main").eq(i).append("<div class='flag'><img src='img/icon/" + data[i].url2 + "' alt='" + data[i].alt2 + "'>");   
            $(".jaju-box > .img-box > .main > .flag").eq(i).append("<span><p>" + data[i].txt + "</p></span>");   
        }
        }
      }
    });
  });

  //3.shopping
  $(function(){
    $.ajax({
      url: "./json/shopping-img.json",
      dataType: "json",
      success : function(data){
        if(data.length>0){
          for(var i in data){
            $(".shopping-box > .img-box").eq(i).append("<div class='main'><div class='img-con'><a href='sub.html' target='_self'><img src='img/main_content3/1sscs/" + data[i].url + "' alt='" + data[i].alt + "'></div>"); 
            $(".shopping-box > .img-box > .main").eq(i).append("<div class='flag'><img src='img/icon/" + data[i].url2 + "' alt='" + data[i].alt2 + "'>");   
            if(i < 3){
                $(".shopping-box > .img-box > .main > .flag").eq(i).append("<span><p>" + data[i].txt + "</p></span>");   
            }            
        }
        }
      }
    });
  });