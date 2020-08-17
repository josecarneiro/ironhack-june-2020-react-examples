import React, { Component } from 'react';
import axios from 'axios';
import { loadCountry } from './../services/covid';

class CountryView extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      today: null,
      historical: []
    };
  }

  componentDidMount() {
    loadCountry(this.props.match.params.id)
      .then(data => {
        const today = data[data.length - 1];
        this.setState({
          loaded: true,
          historical: data,
          today: today
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const today = this.state.today;
    return (
      <div>
        {this.state.loaded && (
          <>
            <h1>{today.Country}</h1>
            <h4>
              Latitude: {today.Lat}, Longitude: {today.Lon}
            </h4>
            <h5>Confirmed Cases</h5>
            <span>{today.Confirmed}</span>
            <h5>Recovered Cases</h5>
            <span>{today.Recovered}</span>
            <h5>Deaths Cases</h5>
            <span>{today.Deaths}</span>
          </>
        )}
      </div>
    );
  }
}

export default CountryView;
