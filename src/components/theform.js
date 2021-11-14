import React, { Component } from "react";
import Select from "react-select";
import Dropdown from "react-bootstrap/DropdownButton";
//import makeAnimated from 'react-select/animated';
import { colourOptions } from "./hobbiesData";

//const animatedComponents = makeAnimated();

export default class TheForm extends Component {
  render() {
    return (
      <form>
        <h3>My Information</h3>

        <div className="form-group">
          <label>Age</label>
          <input
            type="age"
            className="form-control"
            placeholder="Enter your age please"
          />
        </div>

        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Gender
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Male</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Female</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Other</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Do you want/have a pet?
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Yes</Dropdown.Item>
            <Dropdown.Item href="#/action-2">No</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Select
          closeMenuOnSelect={false}
          //components={animatedComponents}
          defaultValue={[colourOptions[21]]}
          isMulti
          options={colourOptions}
        />
      </form>
    );
  }
}
