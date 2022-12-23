import React from 'react';
import '../App.css';
import Dishes from './Dishes';
import Guests from './Guests'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Guests />
        <Dishes />
       
      </header>
    </div>
  );
}

export default App;
