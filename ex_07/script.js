const apiKey = '3eef8072346c006e5fcee08a7146f1f9';  

function fetchWeather(city) {
    
    const url = `https://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                document.getElementById('content').innerHTML = `<p>Erro: ${data.error.info}</p>`;
                return;
            }
            const weatherData = data.current;
            const content = document.getElementById('content');
            content.innerHTML = `
                <h2>Localização: ${data.location.name}, ${data.location.country}</h2>
                <p>Temperatura: ${weatherData.temperature}°C</p>
                <p>Condição: ${weatherData.weather_descriptions[0]}</p>
                <p>Vento: ${weatherData.wind_speed} km/h</p>
                <p>Humidade: ${weatherData.humidity}%</p>
                <p>Sensação Térmica: ${weatherData.feelslike}°C</p>
                <img src="${weatherData.weather_icons[0]}" alt="Icone do tempo">
            `;
        })
        .catch(error => console.error('Erro ao buscar os dados:', error));
}

