import React, { useState } from 'react';
import './App.css';
import ItemList from './components/ItemList';
import AddItemForm from './components/AddItemForm';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (itemName) => {
    setItems([...items, itemName]);
  };

  return (
    <div className="app">
      <h1>My Item List</h1>
      <ItemList items={items} />
      <AddItemForm addItem={addItem} />
    </div>
  );
}

export default App;
