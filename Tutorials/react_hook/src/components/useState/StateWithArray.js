import React, { useState } from "react";

function StateWithArray() {
  const [items, setItem] = useState([]);

  const addItem = () => {
    setItem([
      ...items,
      {
        id: items.length + 1,
        value: Math.floor(Math.random() * 10 + 1)
      }
    ]);
  };

  return (
    <div>
      <h1>UseState with Array</h1>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default StateWithArray;
