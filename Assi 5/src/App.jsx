import React from 'react';
import './App.css';
import CharacterList from './Components/CharacterList';

function App() {
  return (
    <div className="App">
      <img className='logo' src="https://i.pinimg.com/originals/8b/b3/99/8bb3991dca3078f26bab8d07770f8d33.png" alt="" />
      <CharacterList />
    </div>
  );
}

export default App;