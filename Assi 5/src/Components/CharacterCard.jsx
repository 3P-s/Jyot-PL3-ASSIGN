  const CharacterCard = ({ character }) => {
    return (
      <div className="character-card">
        <img src={character.image || "https://cdn2.vectorstock.com/i/1000x1000/11/41/male-profile-picture-vector-2051141.jpg"} alt="Character" />
        <h3>{character.name}</h3>
        <div className="character-details">
          <p>Species: {character.species}</p>
          <p>Gender: {character.gender} </p>
          <p>DOB: {character.dateOfBirth} </p>
        </div>
      </div>
    );
  };

  export default CharacterCard;