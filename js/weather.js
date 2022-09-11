const API_KEY ="48b57a59e3daa5f17da6d3fceb26aa1c"

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response)=>response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText =`${data.weather[0].main} /${data.main.temp}`;
    });
}

function onGeoError(){
    alert("I Can't Know Where You Are.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);