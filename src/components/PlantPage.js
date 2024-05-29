import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import {useState, useEffect} from "react"

/*

1. Make State: 
[plants] -> Search and PlantList
[search] -> Search and PlantList
[forms] -> NewPlantForm

2. Make a GET request to the local database: "http://localhost:6001/plants" and populate [plants]

3. Pass [plants].filtered to PlantList as a prop to render the plant list

4. Make a POST request with the NewPlantForm is submitted, and call [setPlants()] with the new plant

5. Change 'search' as the user types into <Search />. and as 'search' changes, change the list of plants that are being displayed.

*/

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(r => r.json())
    .then(setPlants)
  },[])

  const filterPlants = plants.filter(plant => plant.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <main>
      <NewPlantForm plants={plants} setPlants={setPlants} />
      <Search search={search} setSearch={setSearch} />
      <PlantList plants={filterPlants} />
    </main>
  );
} 

export default PlantPage;
