

var mon = JSON.parse('{ "day": "Mon", "temp": 22, "windDirection": "north-east", "windSpeed": 10 , "type":"sunny" }');
var tue = JSON.parse('{"day":"Tue", "temp": 14, "windDirection": "north-west", "windSpeed": 14, "type": "rainy"}');
var wed = JSON.parse('{"day":"Wed", "temp": 17, "windDirection": "south-east", "windSpeed": 20, "type": "cloudy"}');
var thu = JSON.parse('{"day":"Thu", "temp": 14, "windDirection": "north-west", "windSpeed": 21, "type": "rainy"}');
var fri = JSON.parse('{"day":"Fri", "temp": 20, "windDirection": "south-east", "windSpeed": 12, "type": "sunny"}');
var sat = JSON.parse('{"day":"Sat", "temp": 24, "windDirection": "north-west", "windSpeed": 10, "type": "sunny"}');
var sun = JSON.parse('{"day":"Sun", "temp": 25, "windDirection": "north-west", "windSpeed": 8, "type": "cloudy"}');

window.onload = function() {
			document.getElementById("day").innerHTML = mon.day ;
			document.getElementById("temp").innerHTML=mon.temp+" <span>&#8451;</span>";
			document.getElementById("windDirection").innerHTML=mon.windDirection;
			document.getElementById("windSpeed").innerHTML=mon.windSpeed;
			document.getElementById("type").innerHTML=mon.type;
			let image = document.getElementById("icon");
			image.setAttribute('src','images/sunny.png');
			document.getElementById("temp1").innerHTML=mon.temp+" <span>&#8451;</span>";
			document.getElementById("temp2").innerHTML=tue.temp+" <span>&#8451;</span>";
			document.getElementById("temp3").innerHTML=wed.temp+" <span>&#8451;</span>";
			document.getElementById("temp4").innerHTML=thu.temp+" <span>&#8451;</span>";
			document.getElementById("temp5").innerHTML=fri.temp+" <span>&#8451;</span>";
			document.getElementById("temp6").innerHTML=sat.temp+" <span>&#8451;</span>";
			document.getElementById("temp7").innerHTML=sun.temp+" <span>&#8451;</span>";
};





function temp(day) {

	switch (day){

		case "mon": {
			document.getElementById("day").innerHTML = mon.day ;
			document.getElementById("temp").innerHTML=mon.temp+" <span>&#8451;</span>";
			document.getElementById("windDirection").innerHTML=mon.windDirection;
			document.getElementById("windSpeed").innerHTML=mon.windSpeed;
			document.getElementById("type").innerHTML=mon.type;
			let image = document.getElementById("icon");
			image.setAttribute('src','images/sunny.png');

		}
		brake;


		case "tue": {
			document.getElementById("day").innerHTML = tue.day ;
			document.getElementById("temp").innerHTML=tue.temp+" <span>&#8451;</span>";
			document.getElementById("windDirection").innerHTML=tue.windDirection;
			document.getElementById("windSpeed").innerHTML=tue.windSpeed;
			document.getElementById("type").innerHTML=tue.type;
			let image = document.getElementById("icon");
			image.setAttribute('src','images/rain.png');

		}
		brake;

		case "wed": {
			document.getElementById("day").innerHTML = wed.day ;
			document.getElementById("temp").innerHTML=wed.temp+" <span>&#8451;</span>";
			document.getElementById("windDirection").innerHTML=wed.windDirection;
			document.getElementById("windSpeed").innerHTML=wed.windSpeed;
			document.getElementById("type").innerHTML=wed.type;
			let image = document.getElementById("icon");
			image.setAttribute('src','images/cloud.png');

		}
		brake;

		case "thu": {
			document.getElementById("day").innerHTML = thu.day ;
			document.getElementById("temp").innerHTML=thu.temp+" <span>&#8451;</span>";
			document.getElementById("windDirection").innerHTML=thu.windDirection;
			document.getElementById("windSpeed").innerHTML=thu.windSpeed;
			document.getElementById("type").innerHTML=thu.type;
			let image = document.getElementById("icon");
			image.setAttribute('src','images/rain.png');

		}
		brake;

		case "fri": {
			document.getElementById("day").innerHTML = fri.day ;
			document.getElementById("temp").innerHTML=fri.temp+" <span>&#8451;</span>";
			document.getElementById("windDirection").innerHTML=fri.windDirection;
			document.getElementById("windSpeed").innerHTML=fri.windSpeed;
			document.getElementById("type").innerHTML=fri.type;
			let image = document.getElementById("icon");
			image.setAttribute('src','images/sunny.png');

		}
		brake;

		case "sat": {
			document.getElementById("day").innerHTML = sat.day ;
			document.getElementById("temp").innerHTML=sat.temp+" <span>&#8451;</span>";
			document.getElementById("windDirection").innerHTML=sat.windDirection;
			document.getElementById("windSpeed").innerHTML=sat.windSpeed;
			document.getElementById("type").innerHTML=sat.type;
			let image = document.getElementById("icon");
			image.setAttribute('src','images/sunny.png');

		}
		brake;

		case "sun": {
			document.getElementById("day").innerHTML = sun.day ;
			document.getElementById("temp").innerHTML=sun.temp+" <span>&#8451;</span>";
			document.getElementById("windDirection").innerHTML=sun.windDirection;
			document.getElementById("windSpeed").innerHTML=sun.windSpeed;
			document.getElementById("type").innerHTML=sun.type;
			let image = document.getElementById("icon");
			image.setAttribute('src','images/cloud.png');

		}
		brake;



		default: {
			document.getElementById("day").innerHTML = sun.day ;
			document.getElementById("temp").innerHTML=sun.temp+" <span>&#8451;</span>";
			document.getElementById("windDirection").innerHTML=sun.windDirection;
			document.getElementById("windSpeed").innerHTML=sun.windSpeed;
			document.getElementById("type").innerHTML=sun.type;
			let image = document.getElementById("icon");
			image.setAttribute('src','images/cloud.png');
		}
		brake;

	}
}

