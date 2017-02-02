/**
 * Created by Jonsen on 2/1/2017.
 */
$(function(){
  $(".box").on('click', ()=>{console.log($('.btn').text())});
  $(".btn").on('click',(event)=>{
    let t = $("#box1")[0].classList;
    console.log(t);

    // let t = $("#box1")[0].classList;
    t.add(".mbox");
    console.log(t);

  });


});