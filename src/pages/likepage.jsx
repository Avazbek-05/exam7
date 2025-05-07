import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

const Likepage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("like")) || [];
    setItems(storedItems);
  }, []);

  const handleToggleLike = (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
    localStorage.setItem("like", JSON.stringify(updatedItems));
  };

  if (items.length === 0) {
    return (
      <div className="text-center py-16 text-gray-600 text-xl border border-gray-300 rounded-md mt-[50px]">
        💔 Список избранного пуст
      </div>
    );
  }

  return (
    <div className="lll grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
      {items.map(item => (
        <div key={item.id} className="relative border rounded p-3 shadow-md bg-white border-gray-300 ">
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-auto object-cover mb-2 rounded"
          />
          <p className="font-semibold">{item.title}</p>
          <p className="text-gray-600">{item.price} $</p>

          <Heart
            onClick={() => handleToggleLike(item.id)}
            className="absolute top-2 right-2 text-red-500 cursor-pointer"
          />
        </div>
      ))}
    </div>
  );
};

export default Likepage;
