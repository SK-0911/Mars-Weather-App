const prevWeatherToggle = document.querySelector(".show-previous-weather");

const prevWeather = document.querySelector(".previous-weather");

prevWeatherToggle.addEventListener("click", () => {
    prevWeather.classList.toggle('show-weather');
})