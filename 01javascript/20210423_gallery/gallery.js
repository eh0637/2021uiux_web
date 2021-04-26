$(document).ready(function(){
  $("#thumbnail li").click(function(){
      let t = $(this).index()
      console.log(t)
    $("#image p").hide().eq(t).show();
  });

  let current = 0;

  $(".right").click(function(){
    current++;
    if(current == 3 ){current = 2}
    console.log(current);
    imgmove()
  });
  $(".left").click(function(){
    current--;
    if(current == -1 ){current = 0}
    console.log(current);
    imgmove()
  });

 function imgmove(){
   // let cNum = current * -1 * 760;
   $(".container > ul").animate({left:current * -760},1000);
 }
});
