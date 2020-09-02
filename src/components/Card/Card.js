import React from 'react';

const Card = ({ location, activityName, description }) => {
  return (
    <article>
      <h3>{activityName}</h3>
      <p>{location}</p>
      <p>Description:</p>
      <p>{description}</p>
    </article>
  );
};

export default Card;