import React, { Component } from "react";
import SearchBar from './components/SearchBar'
import "./App.css";
import data from "./API/data_for_test.json";
import Planets from './components/Planets'
import Select from './components/Select'

class App extends Component {
  state = {
    dataAPI: data,
    description: "",
    active: ""
  };

  handleClickPlanet = (id, data) => {
    this.setState({ description: data, active: id });
  };

  sortArray = (type) => {
    if (!type) {
      this.setState({ dataAPI: data });

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
    const sorted = [...this.state.dataAPI].sort(
      sortProperty.descending
        ? (a, b) => b[sortProperty.type][sortProperty.field] - a[sortProperty.type][sortProperty.field]
        : (a, b) => a[sortProperty.type][sortProperty.field] - b[sortProperty.type][sortProperty.field]
    );

    this.setState({ dataAPI: sorted });
  };

  updateData = (config) => {
    this.setState(config);
  }

  render() {
    const { dataAPI } = this.state;
    return (
      <div className="App">
        <ul className="navbar">
          <li>
            <Select sortArray={this.sortArray} />
          </li>
          <li>
            <div className="searchbar form-group">
              <form action="#">
                <SearchBar
                  dataAPI={data}
                  update={this.updateData}
                />
              </form>
            </div>
          </li>
        </ul>

        <div className="content_grid">
          <Planets dataAPI={dataAPI} handleClickPlanet={this.handleClickPlanet} active={this.state.active} />
        </div>

        <div id="description">
          {this.state.description}
        </div>
      </div>
    );
  }
}
export default App;
