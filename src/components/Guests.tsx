import React from 'react';
import eventData from '../data.json'
 
function Guests() {
  let guests = eventData.data.events[0].guests


  return (
    <div>
       <h2>Guest list</h2>
      <ul>
        {guests.map(({id, name, diet}) => (
        <li key={id}>{name}, {diet}</li>
      ))}   
      </ul>
      <button>Add another guest</button>
    </div>
  );
}

export default Guests;
