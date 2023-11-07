import React, { useState } from 'react';

const CharacterDetailsModal = ({ character }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="character-details-modal">
      <button onClick={() => setIsOpen(!isOpen)}>Open Modal</button>
      {isOpen && (
        <div className="modal-content">
          <h2>{character.name}</h2>
          <p>Height: {character.height} m</p>
          <p>Mass: {character.mass} kg</p>
          {/* Add more details */}
          <button onClick={() => setIsOpen(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default CharacterDetailsModal;