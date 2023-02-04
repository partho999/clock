function ghori(){

	var somoy = new Date(),
		hours = somoy.getHours(),
		minutes = somoy.getMinutes(),
		seconds = somoy.getSeconds(),
		dayNight = " PM" ;

		// am/pm
	if ( hours< 12 ) {
		dayNight = ' AM';
	}

	// 00 = 12
	if ( hours == 0 ) {
		hours = 12;
	}


	// 12 hours
	if ( hours> 12 ) {
		hours = hours - 12;
	}

	// adding 0 before hours

	if ( hours < 10 ) {
		hours = '0' + hours;
	}

	// adding 0 before Minutes

	if ( minutes < 10 ) {
		minutes = '0' + minutes;
	}

	// adding 0 before second

	if ( seconds < 10 ) {
		seconds = '0' + seconds;
	}


	document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds + dayNight;

}

	
	setInterval(ghori, 100);