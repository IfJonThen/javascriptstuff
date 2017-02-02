/**
 * Created by Jonsen on 2/1/2017.
 */
$(function(){
  $(".box").on('click', ()=>{console.log($('.btn').text())});
  $(".btn").on('click',(event)=>{
    let t = $(event.target).text();
    // var v = ;

    switch (t) {
        case "Small":
            $(".box").addClass("sbox");
            break;
        case "Medium":
            $(".box2").addClass("mbox");
            break;
        case "Large":
            $(".box3").addClass("mbox");
            break;

    }
});


});