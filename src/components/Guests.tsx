import React from 'react';
import peopleData from '../people.json'

function Guests() {

  console.log(peopleData)

  return (
    <div>
       <h2>Guest list</h2>
      <ul>
        <li key="1">Bridget</li>
      </ul>
    </div>
  );
}

export default Guests;
