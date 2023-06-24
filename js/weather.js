
const API_KEY ='15f24fe2934a2ee7fa248d6b912f76e8';

function onGeoOk(position) {
const lat = position.coords.latitude;
const lon = position.coords.longitude;
console.log("You alive in" ,lat ,lon)
const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
fetch(url).then(response => response.json()).then(data => {
console.log(data)
    const weather = document.querySelector("#weather span:nth-child(1)")
    const icon = document.querySelector("#weather span:nth-child(2)")

    icon.innerHTML = "";//기존 아이콘 초기화
    const iconCode =  data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;
    const iconImg = document.createElement("img");
    iconImg.src = iconUrl;
    icon.appendChild(iconImg);

    const temperature = Math.floor(data.main.temp); 
    weather.innerText = `${temperature}°C`;
} );
}


function onGeoError() {
   alert( "you are in out side of earth");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);


