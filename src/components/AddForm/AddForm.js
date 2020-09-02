import React, { useState } from 'react';

const AddForm = ({ createNewCard }) => {
  const [name, editName] = useState('');
  const [brand, editBrand] = useState('');
  const [frontT, editFrontT] = useState('');
  const [backT, editBackT] = useState('');
  const [webLink, editWebLink] = useState('');

  const clickHandler = () => {
    const newCard = {
      name,
      brand,
      frontT,
      backT,
      webLink
    }
    createNewCard(newCard);
    editName('');
    editBrand('');
    editFrontT('');
    editBackT('');
    editWebLink('');
  };

  return (
    <section>
      <h2>Enter Bike Information</h2>
      <form>
        <div>
          <label>Name</label>
          <input 
            value={name} 
            onChange={(e) => editName(e.target.value)}
          />
        </div>
        <div>
          <label>Brand</label>
          <input 
            value={brand} 
            onChange={(e) => editBrand(e.target.value)}
          />
        </div>
        <div>
          <label>Front Travel</label>
          <input 
            value={frontT} 
            onChange={(e) => editFrontT(e.target.value)}
          />
        </div>
        <div>
          <label>Rear Travel</label>
          <input 
            value={backT} 
            onChange={(e) => editBackT(e.target.value)}
          />
        </div>
        <div>
          <label>Website Link</label>
          <input 
            value={webLink} 
            onChange={(e) => editWebLink(e.target.value)}
          />
        </div>
        <button type='button' onClick={clickHandler}>Enter Information</button>
      </form>
    </section>
  );
};

export default AddForm;