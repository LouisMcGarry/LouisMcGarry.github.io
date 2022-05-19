var titleText = document.getElementById('title');
var messageText = document.getElementById('conf-text');

var countDownDate = new Date("Sept 4, 2022 14:00:00").getTime();
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // If the count down is over display finish message
  if (distance <= 0 && seconds <= 0) {
    clearInterval(x);
    titleText.innerHTML = "You've Made It!";
    messageText.innerHTML = "<span style='color: #1b1b1b'><b>Well done Gorgeous.</b> <br>You've so got this, more than you think you do. <br> I believe in you Lauren.</span>";
  }
  else{
    if (days > 0) {
      titleText.innerHTML = days + " : " + hours + " : " + minutes + " : " + seconds;
      messageText.innerHTML = "*Tick Toc, Tick Toc* <br> Uni is so close now, " + "<b>" + ((days / 7).toFixed(2)) + "</b>" + " weeks left!";
    }
    else if(hours > 0){
      titleText.innerHTML = "<span style='color: #4acf5c'>" + days + "</span> : " + hours + " : " + minutes + " : " + seconds;
      messageText.innerHTML = "*Tickety Toc, Tickety Toc* <br> Less than a day to go! " + "<br><br><span style='color: #3d3d3d'><b>" + (((hours / 24) / 7).toFixed(3)) + "</b></span>" + " weeks left!";
    }
    else if(minutes > 0){
      titleText.innerHTML = "<span style='color: #4acf5c'>" + days + "</span> : <span style='color: #4acf5c'>" + hours + "</span> : " + minutes + " : " + seconds;
      messageText.innerHTML = "*Whoopty Woop Woop* <br> Wow, under an hour then uni life awaits! " + "<br><br><span style='color: #3d3d3d'><b>" + ((((minutes / 60) / 24) / 7).toFixed(5)) + "</b></span>" + " weeks left!";
    }
    else {
      titleText.innerHTML = "<span style='color: #4acf5c'>" + days + "</span> : <span style='color: #4acf5c'>" + hours + "</span> : <span style='color: #4acf5c'>" + minutes + "</span> : " + seconds;
      messageText.innerHTML = "Well done Gorgeous. <br> You really did it. You've so got this, more than you think you do. " + "<br><br><span style='color: #3d3d3d'><b>" + (((((seconds / 60) / 60) / 24) / 7).toFixed(7)) + "</b></span>" + " weeks left!";
    }
  }
}, 1000);
