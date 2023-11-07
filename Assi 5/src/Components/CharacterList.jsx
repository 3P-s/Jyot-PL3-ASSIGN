import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import './CharacterList.css';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://hp-api.onrender.com/api/characters');
        console.log(response.data);
        setCharacters(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="character-list">
      {characters.map((character, index) => (
        <CharacterCard key={index} character={character} />
      ))}
    </div>
  );
};

export default CharacterList;