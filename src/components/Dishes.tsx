import React from 'react';
import eventData from '../data.json'
 
function Dishes() {
  let guests = eventData.data.events[0].guests


  return (
    <div>
       <h2>Menu</h2>
        {guests.map(({id, name, dishes}) => (
        <p key={id}>{name} is bringing {dishes[0].dishName}</p>
      ))}   
      <button>Add another dish</button>
    </div>
  );
}

export default Dishes;
