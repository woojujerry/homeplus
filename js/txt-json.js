//1.saja
$(function(){
    $.ajax({
      url: "./json/saja-text.json",
      dataType: "json",
      success : function(data){
        if(data.length>0){
          for(var i in data){
            if(i == 2 || i == 5){
                $(".saja-box > .text-box").eq(i).append('<h1>' + data[i].hot + '</h1>'); 
            }
            $(".saja-box > .text-box").eq(i).append('<h5>' + data[i].title + '</h5>'); 
            $(".saja-box > .text-box").eq(i).append('<p><span>' + data[i].sale + '</p></span>');      
            $(".saja-box > .text-box > p").eq(i).append('<strong>' + data[i].price + '</strong>');  
            $(".saja-box > .text-box").eq(i).append('<h6><img src="img/icon/icon-star.png" alt="별점">\t' + data[i].review + '</h6>');                     
          }
        }
      }
    });
});

//2.jaju
$(function(){
    $.ajax({
      url: "./json/jaju-text.json",
      dataType: "json",
      success : function(data){
        if(data.length>0){
          for(var i in data){
            $(".jaju-box > .text-box").eq(i).append('<h5>' + data[i].title + '</h5>');      
            $(".jaju-box > .text-box").eq(i).append('<p><strong>' + data[i].price + '</strong><p>');  
            $(".jaju-box > .text-box").eq(i).append('<h6><img src="img/icon/icon-star.png" alt="별점">\t' + data[i].review + '</h6>');
            $(".jaju-box > .text-box").eq(i).append('<button type="button">' + data[i].button + '</button>');                         
          }
        }
      }
    });
});

//3.shopping
$(function(){
    $.ajax({
      url: "./json/shopping-text.json",
      dataType: "json",
      success : function(data){
        if(data.length>0){
          for(var i in data){
            if(i == 3 || i == 4 || i == 5){
                $(".shopping-box > .text-box").eq(i).append('<h1>' + data[i].hot + '</h1>'); 
            }
            $(".shopping-box > .text-box").eq(i).append('<h5>' + data[i].title + '</h5>');      
            $(".shopping-box > .text-box").eq(i).append('<p><strong>' + data[i].price + '</strong><p>');  
            $(".shopping-box > .text-box").eq(i).append('<h6><img src="img/icon/icon-star.png" alt="별점">\t' + data[i].review + '</h6>');
           
            if(i < 3){
                $(".shopping-box > .text-box").eq(i).append('<button type="button">' + data[i].button + '</button>');  
            }
          }
        }
      }
    });
});