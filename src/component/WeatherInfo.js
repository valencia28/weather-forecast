import React from 'react'

const weatherImages = {
  Clear: require('../images/sunny_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png'), 
  Sunny: require('../images/sunny_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png'),
  Cloudy: require('../images/cloud_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png'),  
  Clouds: require('../images/cloud_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png'),  
  "Partly Cloudy": require('../images/partly_cloudy_day_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png'),
  Overcast: require('../images/cloud_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png'),
  Rain: require('../images/rainy_heavy_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png'), 
  Drizzle: require('../images/rainy_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png'),     
  "Light rain": require('../images/rainy_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png'),
  "Light rain shower": require('../images/rainy_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png'),
  "Heavy rain shower": require('../images/rainy_heavy_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png'),
  "Heavy rain": require('../images/rainy_heavy_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png'),
  Thunderstorm: require('../images/thunderstorm_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png'), 
  Snow: require('../images/cloudy_snowing_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png'),     
  "Light snow": require('../images/cloudy_snowing_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png'),
  "Heavy snow": require('../images/cloudy_snowing_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png'),
  Fog: require('../images/foggy_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png'),   
  Mist: require('../images/mist_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png'),
  Pending: require('../images/pending_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png')
};

const WeatherInfo = ({weather}) => {
  const weatherMain = weather?.weather[0].main;

  const weatherImage = weatherImages[weatherMain] || weatherImages.Pending;

  return (
    <div className="weather-info-box">
      <div className="location-name">{weather?.name}</div>

      <div className="weather-info">
        <img src={weatherImage} alt={weatherMain ||'Pending'}></img>
        <div className="weather-description">
          <div>{weather?.weather[0].description}</div>
          <div>{weather?.main?.temp? (weather.main.temp-273.15).toFixed(1): 'null'}°C 
            | {weather?.main?.temp? ((weather.main.temp-273.15)*9/5+32).toFixed(1): 'null'}°F
          </div> 
        </div>

      </div>
    </div>
  )
}

export default WeatherInfo

