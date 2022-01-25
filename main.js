function surprise(){
    document.getElementById("birthday").innerHTML="HAPPY BIRTHDAY!!!!";
    document.getElementById("other").style.display="inline";
     document.getElementById("musical").style.display="inline";
}
function another(){
   document.getElementById("special_slider").style.display="inline";
   document.getElementById("wish").style.display="inline";
   document.getElementById("wish1").style.display="inline";
   document.getElementById("wish2").style.display="inline";
   document.getElementById("wish3").style.display="inline";
  
}

function PLay(){
    var audio = new Audio('Happy-Birthday-To-You-Happy-Birthday-Songs-2021-WishesPlus.com_.mp3')
    audio.play()
}