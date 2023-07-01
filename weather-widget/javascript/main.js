console.log("this works");
alert("Hello, WOrld!");
const API_KEY = config.WEATHER_API_KEY;
function getWeatherData() 
    fetch('https://api.openweathermap.org/data/2.5/weather?zip=94040,us&appid=685af0cca148a761850b28218bcbb704')
        .then(response => response.json())
        .then(data => console.log(data));
        
