## timeCounter.js is a lightweight countdown Javascript library
timeCounter.js is a lightweight Javascript library to countdown your days with respect to a future date.

To work with timeCounter.js you need add the timeCounter.js script file to your HTML file and you are ready to work with it. 
    
    countDown( selector, Time)
    
    ### Example
    <script>
	    var Time = "7/11/2016 18:25:00";
        setInterval(function() { countDown(".jcountTimer", Time) }, 1000);
	</script>
	
	countDown function takes 2 parameters:
	* selector: it is used to target the HTML element.
	* Time: The Time will be used to define the future date for which the counter will start counting.
    
    
    