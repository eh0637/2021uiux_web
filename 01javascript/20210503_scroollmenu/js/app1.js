$(document).ready(function(){
  const oneTop = $("#v01s").offset().top;
  const twoTop = $("#v02s").offset().top;
  const threeTop = $("#v03s").offset().top;


  for( let i=0;i<$(".menu>a").length;i++ ){
    $(".menu>a").click(function(){
      $("html,body").animate({scrollTop:(".scene").eq(i).offset().top})
    })
  }

  // $(".menu > a").click(function(){
  //
  //   let i = $(this).index()
  //   const st = $(".scene").eq(i).offset().top
  //   $("html,body").animate({scrollTop:st})
  // })
});
