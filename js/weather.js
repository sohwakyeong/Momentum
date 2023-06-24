const API_KEY2 ='15f24fe2934a2ee7fa248d6b912f76e8';

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("You are alive at", lat, lon);
  const API_KEY2 = 
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY2}&units=metric`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);

      const weather = document.querySelector("#weather span:nth-child(1)");
      const icon = document.querySelector("#weather span:nth-child(2)");

      icon.innerHTML = ""; // 기존 아이콘 초기화
      const iconCode = data.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;
      const iconImg = document.createElement("img");
      iconImg.src = iconUrl;
      icon.appendChild(iconImg);

      const temperature = Math.floor(data.main.temp);
      weather.innerText = `${temperature}°C`;
    });
}

function onGeoError() {
  alert("You are outside of Earth");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);


