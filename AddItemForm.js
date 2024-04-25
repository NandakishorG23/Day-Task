import React, { useState } from 'react';

const AddItemForm = ({ addItem }) => {
  const [itemName, setItemName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!itemName.trim()) return;
    addItem(itemName.trim());
    setItemName('');
  };

  return (
    <div className="add-item-form">
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter item name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default AddItemForm;
