import React, { Component } from "react";
import Titles from "./components/Titles.js";
import Form from "./components/Form.js";
import Weather from "./components/weather.js";

const api_key = "9cbcdd23179c13e5cf0c5f6a4e41718f";
class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };

  getWeather = async e => {
    e.preventDefault();
    const cityName = document.getElementById("cityName").value;
    const countryName = document.getElementById("countryName").value;
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryName}&appid=${api_key}&units=metric`
    );
    const data = await api_call.json();
    if (cityName && countryName) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter a value"
      });
    }
  };
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-sm-5 title-container">
                  <Titles></Titles>
                </div>
                <div className="col-sm-7 form-container">
                  <Form getWeather={this.getWeather}></Form>
                  <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                  ></Weather>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
