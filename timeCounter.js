var countDown = function(theSelector, time){
	var output = "";
	var dTime = Date.parse(time);
  var theDate = Date.parse(new Date());
  var difference = dTime - theDate;
  var milliseconds = difference % 1000;
  
  function addZero(number){
  	if(number <= 9){
    	number = "0" + number;
    }
    return number;
  }
  
  x = difference / 1000;
  seconds = addZero(parseInt(x % 60));
  x /= 60;
  minutes = addZero(parseInt(x % 60));
  x /= 60;
  hours = addZero(parseInt(x % 24));
  x /= 24;
  days = addZero(parseInt(x));
  
  output += "<span class='days'>" + days + "<small>Days</small></span>";
  output += "<span class='hours'>" + hours + "<small>Hours</small></span>";
  output += "<span class='minutes'>" + minutes + "<small>Minutes</small></span>";
  output += "<span class='seconds'>" + seconds + "<small>Seconds</small></span>";
  document.querySelector(theSelector).innerHTML = output;
}