import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherInfo from './component/WeatherInfo';
import LocationButton from './component/LocationButton';
import { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';

//1. 앱이 실행되자마자 현재 위치 기반 날씨가 보여짐 - 도시, 섭씨, 화씨, 날씨 상태
//2. 5개의 버튼 - 현재 위치, 4개는 다른 도시
//3. 도시 버튼을 누를 때마다 도시별 날씨가 보임
//4. 현재 위치 버튼을 누르면 현재 위치 기반 날씨 보여짐
//5. 데이터를 들고오는 동안 로딩 스피너가 돔

const cities = ['Seoul', 'London', 'Sydney', 'Paris', 'New York'];
const API_KEY = process.env.REACT_APP_API_KEY;

function App() {

  console.log("apikey: ", API_KEY)
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [apiError, setAPIError] = useState('');

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat,lon);
    });
  }

  const getWeatherByCurrentLocation = async(lat, lon)=>{
    try{
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
      setLoading(true);
      let response = await fetch(url);
      let data = await response.json();
      setWeather(data);
      setLoading(false);
      console.log('data: ', data);
    }catch(err){
      console.log(err);
      // setAPIError(err.message);
      setAPIError("Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  const getWeatherByCity = async()=>{
    try{
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
      setLoading(true);
      let response = await fetch(url);
      let data = await response.json();
      setWeather(data);
      setLoading(false);
      console.log('data: ', data);
    }catch(err){
      console.log(err);
      setAPIError("Something went wrong. Please try again.");
      setLoading(false);
    }
  }
  
  useEffect(()=>{
    if(city===''){
      getCurrentLocation();
    }else{
      getWeatherByCity();
    }    
  },[city])

  const handleCityChange = (city)=>{
    if(city === "current"){
      setCity('');
    }else{
      setCity(city);
    }
  }

  return (
    <div>
      {loading? (
        <div className="container">
          <ClipLoader
          color="#f88c6b"
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
          />
        </div>
      ) : apiError ? (
        <div>
          <h2>Something went wrong!</h2>
          <p>{apiError}</p>
        </div>
      ) : (
        <div className="container">
          <WeatherInfo weather={weather}/>
          <LocationButton 
          cities={cities}
          selectedCity={city}
          handleCityChange={handleCityChange}/> 
        </div> 
      )}       
    </div>
  );
}

export default App;
