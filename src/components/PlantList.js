import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {

const plant = plants.map(plant => <PlantCard key={plant.id} plant={plant} />)

  return (
    <ul className="cards">{plant}</ul>
  );
}

export default PlantList;
