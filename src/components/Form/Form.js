import React from 'react';

const Form = () => {
  return (
    <section>
      <h3>Add a new adventure stop!</h3>
      <form>
        <label>Location</label>
        <input />
        <label>Activity</label>
        <input />
        <label>Description</label>
        <input />
        <button type='button'>Submit Activity</button>
      </form>
    </section>
  );
};

export default Form;