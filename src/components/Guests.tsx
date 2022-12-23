import React from 'react';
import peopleData from '../people.json'

function Guests() {

  return (
    <div>
       <h2>Guest list</h2>
      <ul>
        {peopleData.map(({id, name, diet}) => (
        <li key={id}>{name}, {diet}</li>
      ))}   
      </ul>
      <button>Add another guest</button>
    </div>
  );
}

export default Guests;
