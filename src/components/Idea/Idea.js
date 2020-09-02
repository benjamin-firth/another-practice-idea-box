import React from 'react';
import './Idea.css';

const Idea = ({ name, brand, frontT, backT, webLink, deleteCard }) => {
  return (
    <article>
      <h3>{name}</h3>
      <p>Brand: {brand}</p>
      <p>Front Suspension: {frontT}</p>
      <p>Back Suspension: {backT}</p>
      <a 
        rel="noopener noreferrer"
        target='_blank' 
        href={webLink}>Web Link
      </a>
      <button type='button' onClick={() => deleteCard(name, brand)}>DELETE BIKE, IT SUCKS</button>
    </article>
  )
};

export default Idea;