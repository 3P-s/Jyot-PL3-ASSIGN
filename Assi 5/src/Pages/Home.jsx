import React, { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [searchedLocation, setSearchedLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);

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
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1>Weather Search</h1>
        <input
          type="text"
          placeholder="Enter a location (e.g., New York)"
          value={searchedLocation}
          onChange={(e) => setSearchedLocation(e.target.value)}
          style={{
            padding: '8px',
            width: '300px',
            margin: '10px',
          }}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      
      {weatherData && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <h2>Weather for {weatherData.location.name}</h2>
          <p>Temperature: {weatherData.current.temp_c}°C</p>
          <p>Condition: {weatherData.current.condition.text}</p>
        </div>
      )}
    </div>
  );
};

export default Home;