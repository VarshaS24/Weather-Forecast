const apikey = "a1e69a281259d84c85e2a865781fa9d3";


async function getWeather() {
    
    const city = document.querySelector(".name").value .trim(); 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apikey}`;
    
    
    
    try {
        
        const response = await fetch(apiUrl);
       
    
        if (!response.ok) {
            throw new Error("City not found!");
        }

       
        const data = await response.json();

       
        document.getElementById("city-name").textContent = data.name;
        document.getElementById("temperature").innerHTML = `${data.main.temp}<sup>o</sup>C`;
        document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
        document.getElementById("humidity").textContent = `${data.main.humidity}%`;
        document.getElementById("pressure-value").textContent = `${data.main.pressure}nPa`;
        document.getElementById("windy-value").textContent = `${data.wind.speed}m/s`;
   
        document.querySelector(".cname").style.display = "block";
        document.querySelector(".cloud").style.display = "block";
        document.querySelector(".sec1").style.display =  "block";
        document.querySelector(".sec2").style.display =  "block";
        document.querySelector(".sec3").style.display =  "block";
        

    }
     catch (error) {
        alert(error.message);
    }

}

document.querySelector(".press").addEventListener("click", getWeather);
