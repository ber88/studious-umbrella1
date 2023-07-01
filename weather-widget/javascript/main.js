console.log("this works");
alert("Hello, WOrld!");
const API_KEY = config.WEATHER_API_KEY;
function getWeatherData() 
    fetch('https://api.openweathermap.org/data/2.5/weather?zip=94040,us&appid=${WEATHER_API_KEY}')
        .then(response => response.json())
        .then(data => console.log(data));
        
