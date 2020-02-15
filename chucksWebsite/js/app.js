/* PTN 29 Oct 17
   Adventures with my chucks webpage/app

*/

// Automatic Slideshow - change image every 5 seconds
var myIndex = 0;
scrollthru();

function resizePic(){

  var wh = $(window).height();
    $('body').attr('style', 'height:' + wh + 'px;');
}

function scrollthru() {
    var i;
    var x = document.getElementsByClassName("myChucks");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(scrollthru, 3000);
}

