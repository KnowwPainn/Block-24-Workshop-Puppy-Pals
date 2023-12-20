import './App.css'; // Adjust the path if needed
import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import { puppyList } from './data.js';

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  const handleClick = (puppyId) => {
    setFeatPupId(puppyId);
  };

  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  console.log("featuredPup: ", featuredPup);

  return (
    <div className="App">
      {/* Links to Vite and React websites */}
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* List of puppies */}
      <div>
        <h2>List of Puppies:</h2>
        <ul>
          {puppies.map((puppy) => (
            <li key={puppy.id} onClick={() => handleClick(puppy.id)}>
              {puppy.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Featured Puppy Information */}
      {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
