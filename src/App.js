import React from "react";
import "./App.css";
import axios from "axios";
import OneMovie from "./OneMovie";
import fuzzysort from "fuzzysort";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesData: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  async handleChange(event) {
    let eventValue = event.target.value;
    const { data } = await axios.get(
      `https://s3.amazonaws.com/innovid-services-data/rtpool2019/data/movieDB.json`
    );
    // Implement a fuzzy search based on a search input & movieName match
    const fuzzySortResult = fuzzysort.go(eventValue, data, {
      key: "movieName"
    });
    const fuzzySortArray = fuzzySortResult.map(item => item.target);
    // Filter existing data for the data objects
    const fuzzyDataMatch = data.filter(movieObj =>
      fuzzySortArray.includes(movieObj.movieName)
    );
    // If the result is not empty, reset the state; else put initial data on state
    if (fuzzySortResult[0]) {
      this.setState({ moviesData: fuzzyDataMatch });
    } else {
      this.setState({ moviesData: data });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  async fetchData() {
    // Where we're fetching data from
    const { data } = await axios.get(
      `https://s3.amazonaws.com/innovid-services-data/rtpool2019/data/movieDB.json`
    );
    this.setState({ moviesData: data });
  }
  render() {
    return (
      <div>
        <div className="searchBar">
          <div className="emptySearchBarBox" />
          <div className="searchBarBox">
            <form onSubmit={this.handleSubmit}>
              <label>
                <input
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
          <div className="emptySearchBarBox" />
        </div>
        <div className="flexContainer">
          {Array.isArray(this.state.moviesData) &&
            this.state.moviesData.map((el, idx) => (
              <OneMovie movieData={el} key={idx} />
            ))}
        </div>
      </div>
    );
  }
}

export default App;
