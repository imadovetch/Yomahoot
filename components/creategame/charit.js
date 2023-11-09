import React, { useEffect, useState } from 'react';

export default function Charit() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const itemsFromLocalStorage = [];
    for (let i = 0; i < localStorage.length; i++) {
      const item = localStorage.getItem(i);
      if (item) {
        itemsFromLocalStorage.push(item);
      }
    }
    setItems(itemsFromLocalStorage);
  }, []);

  return (
    <div className="h-3/4 p-3 flex flex-col justify-between w-64 bg-app--light rounded-r-lg border-spacing-3 border-2 border-black">
      <div className="h-full overflow-y-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className="w-full rounded-2xl my-1 flex items-center justify-start text-2xl font-serif p-2 bg-app-primary"
          >
            {item}
          </div>
        ))}
      </div>
      <button className="btn-base">Finish</button>
    </div>
  );
}
