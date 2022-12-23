// document.body.style.zoom = "90%";
let weather = {
    apiKey: "d2b2a6e1f66f020adfe1a1428801beba",
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey)
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity, feels_like } = data.main;
        const { speed } = data.wind;
        // console.log(name, icon, description, temp, feels_like, humidity, speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".feels").innerText = "Feels Like: " + feels_like + "°C";
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" +
            icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900?" + name + "')";
    },
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }

};

document.querySelector(".search").addEventListener("click", () => weather.search());
document.querySelector(".search-bar").addEventListener("keyup", (event) => {
    if (event.key == "Enter") {
        weather.search();
    }
});
weather.fetchWeather("raipur");