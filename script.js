let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
// Geolocation
const x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}

// Weather
console.log("script loaded");
let user_location = document.getElementById('location');
let search = document.getElementById('search');
let weather = document.getElementById('weather');
const API_KEY = '75f410cee2ebf850961967e02bc5d2ac';

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

search.addEventListener('click', function () {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${user_location.value}&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            let currentWeather = data.weather[0].description;
            let currentTemp = Math.round(data.main.temp - 273.15);
            weather.innerHTML = `
                <p>Current weather: ${currentWeather}</p>
                <p>Current temperature: ${currentTemp}°C</p>
            `;
        })
        .catch(error => {
            weather.innerHTML = `<p>Error: ${error}</p>`;
        });
});
