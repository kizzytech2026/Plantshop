import React, { useState } from "react";

function PlantCard({ plant }) {
  const [soldOut, setSoldOut] = useState(false);

  function handleStockClick() {
    setSoldOut((currentSoldOut) => !currentSoldOut);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img
        src={plant.image}
        alt={plant.name}
      />

      <h4>{plant.name}</h4>

      <p>Price: {plant.price}</p>

      {soldOut ? (
        <button onClick={handleStockClick}>
          Out of Stock
        </button>
      ) : (
        <button
          className="primary"
          onClick={handleStockClick}
        >
          In Stock
        </button>
      )}
    </li>
  );
}

export default PlantCard;