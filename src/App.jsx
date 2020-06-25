import React, { useState } from "react";
import SearchBar from './components/SearchBar'
import "./App.css";
import data from "./API/data_for_test.json";
import Planets from './components/Planets'
import Select from './components/Select'

function App() {
  const [{ dataAPI, description, active }, setApplicationState] = useState({
    dataAPI: data,
    description: "",
    active: ""
  });

  const handleClickPlanet = (id, data) => {
    setApplicationState({ description: data, active: id, dataAPI });
  };

  const sortArray = (type) => {
    if (!type) {
      setApplicationState({ dataAPI: data, description, active });

      return
    };

    const types = {
      distanceFromSunDesc: { type: 'distanceFromSun', field: "value", descending: true },
      equatorialRadiusDesc: { type: 'equatorialRadius', field: "value", descending: true },
      moonsDesc: { type: 'moons', field: "count", descending: true },
      distanceFromSunAsc: { type: 'distanceFromSun', field: "value", descending: false },
      equatorialRadiusAsc: { type: 'equatorialRadius', field: "value", descending: false },
      moonsAsc: { type: 'moons', field: "count", descending: false },
    };

    const sortProperty = types[type];
    const sorted = [...dataAPI].sort(
      sortProperty.descending
        ? (a, b) => b[sortProperty.type][sortProperty.field] - a[sortProperty.type][sortProperty.field]
        : (a, b) => a[sortProperty.type][sortProperty.field] - b[sortProperty.type][sortProperty.field]
    );

    setApplicationState({ dataAPI: sorted, description, active });
  };

  const updateData = (config) => {
    setApplicationState({dataAPI, description, active, ...config});
  }


  return (
    <div className="App">
      <ul className="navbar">
        <li>
          <Select sortArray={sortArray} />
        </li>
        <li>
          <div className="searchbar form-group">
            <form action="#">
              <SearchBar
                dataAPI={data}
                update={updateData}
              />
            </form>
          </div>
        </li>
      </ul>

      <div className="content_grid">
        <Planets dataAPI={dataAPI} handleClickPlanet={handleClickPlanet} active={active} />
      </div>

      <div id="description">
        {description}
      </div>
    </div>
  )
}

export default App;
