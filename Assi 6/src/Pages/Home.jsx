import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';
const Home = () => {
  const [searchedLocation, setSearchedLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [err, Iserr] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);

  const handleSearch = async () => {
    const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/current.json',
      params: { q: searchedLocation },
      headers: {
        'X-RapidAPI-Key': 'c52254c69fmshf5639ae43bb4e6ep144ab6jsne865e33e50a5',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      setWeatherData(response.data);
      Iserr(false);
      if (searchedLocation && !searchHistory.includes(searchedLocation)) {
        setSearchHistory((prevHistory) => [
          searchedLocation,
          ...prevHistory.slice(0, 4), 
        ]);
      }
    } catch (error) {
      setWeatherData(null);
      Iserr(true);
      console.error(error);
    }
  };
  useEffect(() => {
    setSearchHistory((prevHistory) => [
      ...new Set(prevHistory.slice(0, 5)),
    ]);
  }, [searchHistory]);

  return (
    <div>
      <div className="search">
        <h1>Weather Search</h1>
        <input
          type="text"
          placeholder="Enter a location (e.g., New York)"
          value={searchedLocation}
          onChange={(e) => setSearchedLocation(e.target.value)}
          style={{ padding: '8px', width: '300px', margin: '10px' }}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      

      {weatherData && (
        <div className="weather-info">
          <h2>Weather for {weatherData.location.name}, {weatherData.location.country}</h2>
          <div className="weather-details">
            <img
              src={'https://static.vecteezy.com/system/resources/previews/007/247/903/non_2x/sun-cloud-weather-for-icon-symbol-web-illustration-free-vector.jpg'}
              alt={weatherData.current.text}
              className="weather-icon"
            />
            <p>Temperature: {weatherData.current.temp_c}°C</p>
            <p>Condition: {weatherData.current.text}</p>
            <p>Humidity: {weatherData.current.humidity}%</p>
          </div>
        </div>
      )}
      {searchHistory.length > 0 && (
        <div className="weather-info">
          <h2>Recent 5 Searches</h2>
          <p>
            {searchHistory.map((search, index) => (
              <p key={index}>{search}</p>
            ))}
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
