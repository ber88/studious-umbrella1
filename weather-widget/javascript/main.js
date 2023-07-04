const API_KEY = config.WEATHER_API_KEY;

function getWeatherData(zip) {
    let API_KEY = config.WEATHER_API_KEY;
    let CITY_NAME = document.querySelector(".city_name");
    let CITY_TEMP = document.querySelector(".temperature");
    let input = document.querySelector(".zipcode");
    fetch('https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=685af0cca148a761850b28218bcbb704')
        .then((response) => response.json())
        .then((data) => {
            let local_weather_data = data;
            CITY_NAME.textContent = local_weather_data.name;
            let weather_in_celsius = Math.round(
                local_weather_data.main.temp - 273
            );
            CITY_TEMP.textContent = weather_in_celsius + " C";
            console.log(local_weather_data);
})
}
getWeatherData()
let btn = document.querySelector(".search-button");
btn.addEventListener('click', getZipCode);
function getZipCode(e) {
    e.preventDefault();
    let ZIP_CODE = input.value;
    getWeatherData(ZIP_CODE);
};