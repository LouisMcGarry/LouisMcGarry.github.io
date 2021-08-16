var titleText = document.getElementById('title');
var messageText = document.getElementById('conf-text');

var countDownDate = new Date("Sept 4, 2021 07:00:00").getTime();
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  titleText.innerHTML = days + " : " + hours + " : " + minutes + " : " + seconds;

  // If the count down is over display finish message
  if (distance < 0) {
    clearInterval(x);
    titleText.innerHTML = "You've Made It!";
    messageText.innerHTML = "Well done Gorgeous. <br> You really did it.";
  }
  else{
    messageText.innerHTML = "*Tick Tock, Tick Tock* <br> Uni is nearly here, " + "<b>" +((days / 7).toFixed(2)) + "</b>" + " weeks left!";
  }
}, 1000);
