/**
 * Created by Jonsen on 2/1/2017.
 */
$(function(){
  $(".box").on('click', ()=>{console.log($('.btn').text())});
  $(".btn").on('click',(event)=>{
    let t = $(event.target).text();
    // var v = ;
    let height = "5%";
    let width = "5%";
    switch (t) {
        case "Small":
            height="15%";
            width="15%";
            break;
        case "Medium":
            height ="30%";
            width= "30%";
            break;
        case "Large":
            height="50%";
            width="50%";
            break;
    }
    changeDimensions(height,width);

});
  var changeDimensions=(height,width)=>{
        // let elements = document.querySelectorAll(".box");
        let elements = $(".box");
        for(let i=0; i< elements.length;i++){
          elements[i].style.height=height;
          elements[i].style.width=width;
      }
    };
});