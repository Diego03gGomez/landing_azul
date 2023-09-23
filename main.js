$(document).ready(function () {



$(".menu_i").click(function (e) { 
    e.preventDefault();
    $(".fondo_nav").slideToggle();
    
});


$(".filtrado3").hide();
$(".filtrado2").hide();



$(".filtrado button").eq(0).click(function (e) { 
    e.preventDefault();
    $(".filtrado3").fadeOut(150);
   $(".filtrado2").fadeOut(150);
   $(".filtrado1").fadeIn(150);

  $(".filtrado button").eq(0).addClass("color_btn");
  $(".filtrado button").eq(1).removeClass("color_btn");
  $(".filtrado button").eq(2).removeClass("color_btn");
    
});
$(".filtrado button").eq(1).click(function (e) { 
    e.preventDefault();
    $(".filtrado1").fadeOut(150);
    $(".filtrado3").fadeOut(150);
    $(".filtrado2").fadeIn(150);

    $(".filtrado button").eq(1).addClass("color_btn");
    $(".filtrado button").eq(0).removeClass("color_btn");
    $(".filtrado button").eq(2).removeClass("color_btn");
   
});
$(".filtrado button").eq(2).click(function (e) { 
    e.preventDefault();
    $(".filtrado1").fadeOut(150);
    $(".filtrado2").fadeOut(150);
    $(".filtrado3").fadeIn(150);

    $(".filtrado button").eq(2).addClass("color_btn");
    $(".filtrado button").eq(0).removeClass("color_btn");
    $(".filtrado button").eq(1).removeClass("color_btn");
 
    
});



/*FUNCION DE SCROLL*/
$(window).scroll(function () {
    scroll = $(window).scrollTop();
    if(scroll>=150){
     $("header").addClass("color_fondo");
    } else {
       $("header").removeClass("color_fondo");
    }

})



});