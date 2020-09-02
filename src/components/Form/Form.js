import React, { useState } from 'react';

const Form = () => {
  const [location, addLocation] = useState('');
  const [activity, addActivity] = useState('');
  const [description, addDescription] = useState('');

  const clickHandler = () => {
    
  };

  return (
    <section>
      <h3>Add a new adventure stop!</h3>
      <form>
        <label>Location</label>
        <input 
          value={location} 
          onChange={(e) => addLocation(e.target.value)}
        />
        <label>Activity</label>
        <input 
          value={activity} 
          onChange={(e) => addActivity(e.target.value)}
        />
        <label>Description</label>
        <input 
          value={description} 
          onChange={(e) => addDescription(e.target.value)}
        />
        <button 
          onClick={clickHandler}
          type='button'>Submit Activity
        </button>
      </form>
    </section>
  );
};

export default Form;