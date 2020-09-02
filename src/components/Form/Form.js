import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addActivity } from '../../actions/index';

const Form = () => {
  const [location, addLocation] = useState('');
  const [activityName, addNewActivity] = useState('');
  const [description, addDescription] = useState('');
  const dispatch = useDispatch();

  const clickHandler = () => {
    const newActivity = {
      location,
      activityName,
      description
    }

    console.log(newActivity);

    dispatch(addActivity(newActivity));
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
          value={activityName} 
          onChange={(e) => addNewActivity(e.target.value)}
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