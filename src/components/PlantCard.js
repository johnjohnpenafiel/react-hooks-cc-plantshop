import React from "react";
import {useState} from "react"

function PlantCard({plant}) {
  const [stock, setStock] = useState(true)
  const handleClick = () => {
    setStock(!stock)
  }
  
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {stock ? (<button onClick={handleClick} className="primary">In Stock</button>) : (<button onClick={handleClick}>Out of Stock</button>)}
    </li>
  );
}

export default PlantCard;
