
const input = document.querySelector("input");
const btn = document.querySelector("button");
const city = document.querySelector(".city")
const temp = document.querySelector(".temp")
const humidity = document.querySelector(".humidity")
const wind = document.querySelector(".wind")
const image = document.querySelector(".weather-icon")
const showValues = document.querySelector(".weather")
const errMsg = document.querySelector(".error")


// Function that gets the weather data
const checkingWeather = async (cityName) => {
    try {
        const apiKey = "ba22eaa56b37b7a896eaad29720a336e"
        const apiRootUrl = "https://api.openweathermap.org/data/2.5/weather?"
        const res = await axios.get(`${apiRootUrl}&units=metric&q=${cityName}&appid=${apiKey}`)
        errMsg.style.display = "none";
        city.innerHTML = res.data.name;
        temp.innerHTML = Math.round(res.data.main.temp);
        humidity.innerHTML = res.data.main.humidity
        wind.innerHTML = res.data.wind.speed;
        if (res.data.weather[0].main === "Clouds") {
            image.src = "images/clouds.png"
        } else if (res.data.weather[0].main === "Rain") {
            image.src = "images/rain.png"

        } else if (res.data.weather[0].main === "Snow") {
            image.src = "images/snow.png"

        } else if (res.data.weather[0].main === "Drizzle") {
            image.src = "images/drizzle.png"

        } else if (res.data.weather[0].main === "Clear") {
            image.src = "images/clear.png"

        } else if (res.data.weather[0].main === "Mist") {
            image.src = "images/mist.png"
        }
        showValues.style.display = "block";
    } catch (e) {

        errMsg.style.display = "block";
        return ("No data available sorry ):(")
    }

}

// calling the checkingWeather function Using a button click
btn.addEventListener('click', async function () {
    const cityName = input.value;
    checkingWeather(cityName)

})

