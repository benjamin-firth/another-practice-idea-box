import React, { useState } from 'react';
import AddForm from '../AddForm/AddForm';
import Idea from '../Idea/Idea';
import './IdeaContainer.css';

const IdeaContainer = () => {
  const [cards, editCard] = useState([]);

  const createNewCard = (newCard) => {
    if (!cards.find(card => card.name === newCard.name)) {
      const newCards = [...cards, newCard];
      editCard(newCards);
    };
  };

  const deleteCard = (name) => {
    const newCards = [...cards].filter(card => card.name !== name);

    editCard(newCards);
  }

  return (
    <section>
      <AddForm createNewCard={createNewCard} />
      <section className='idea-container'>
        {cards.length ?
          cards.map(card => (
          <Idea 
            name={card.name}
            brand={card.brand}
            frontT={card.frontT}
            backT={card.backT}
            webLink={card.webLink}
            deleteCard={deleteCard}
          />
          )) :
          <p>You haven't added any bikes yet! Please add a bike to continue.</p>}
      </section>
    </section>
  );
};

export default IdeaContainer;