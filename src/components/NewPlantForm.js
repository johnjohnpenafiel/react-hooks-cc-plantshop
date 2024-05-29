import React from "react";
import { useState } from "react";

function NewPlantForm({plants, setPlants}) {

  const [newPlants, setNewPlants] = useState({
    name: "",
    image: "",
    price: "",
  })

  const onChangeNewPlant= event => {
    setNewPlants({...newPlants, [event.target.name]: event.target.value})
};

const submitPlant = (e) => {
  e.preventDefault();
  fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Accept":"application/json"
      },
      body: JSON.stringify(newPlants)
  })
  .then(res => res.json())
  .then(newPlantInDb => setPlants([newPlantInDb, ...plants]))

}

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={submitPlant}>
        <input type="text" name="name" placeholder="Plant name" autoComplete="name" value={newPlants.name} onChange={onChangeNewPlant} />
        <input type="text" name="image" placeholder="Image URL" value={newPlants.image} onChange={onChangeNewPlant} />
        <input type="number" name="price" step="0.01" placeholder="Price" value={newPlants.price} onChange={onChangeNewPlant} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
