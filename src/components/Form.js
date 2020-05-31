import React, { Component } from "react";

class Form extends Component {
  state = {};
  render() {
    return (
      <form onSubmit={this.props.getWeather}>
        <input type="text" name="City" placeholder="City" id="cityName"></input>
        <input
          type="text"
          name="Country"
          placeholder="Country"
          id="countryName"
        ></input>
        <button>Get Weather</button>{" "}
      </form>
    );
  }
}

export default Form;
