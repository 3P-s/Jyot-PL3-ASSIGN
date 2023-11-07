import React, { useState } from 'react';
import CharacterDetailsModal from './CharacterDetailsModal';

const CharacterCard = ({ character }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="character-card" onClick={() => setIsModalOpen(true)}>
      <img src={`https://picsum.photos/200/300?random=${character.name}`} alt="Character" />
      <h3>{character.name}</h3>
      <div className="character-details">
        <p>Species: {character.species}</p>
        {/* Add more details as needed */}
      </div>
      {isModalOpen && <CharacterDetailsModal character={character} />}
    </div>
  );
};

export default CharacterCard;