$(function(){
  var dir = -1;
  var interval = 3000;
  var duration = 700;
  var timer;
  $("#slide ul").prepend($("#slide li:last-child"));
  $("#slide ul").css("left",-1000);
  timer = setInterval(slideTimer, interval);
  function slideTimer(){
    $("#slide ul").animate({"left":"-=1000px"},duration,
    function(){
      $(this).append($("#slide li:first-child"));
      $(this).css("left",-1000);
    });
  }
});
