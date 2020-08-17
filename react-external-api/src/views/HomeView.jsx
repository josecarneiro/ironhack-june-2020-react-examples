import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { loadSummary } from './../services/covid';

class HomeView extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      global: null,
      countries: []
    };
  }

  componentDidMount() {
    loadSummary()
      .then(data => {
        this.setState({
          global: data.Global,
          countries: data.Countries,
          loaded: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        {this.state.loaded && (
          <>
            <section>
              <h2>Global COVID-19 Data</h2>
              <p>
                <strong>Confirmed Cases:</strong> {this.state.global.TotalConfirmed}
              </p>
              <p>
                <strong>New Confirmed Cases:</strong> {this.state.global.NewConfirmed}
              </p>
              <p>
                <strong>Recovered Cases:</strong> {this.state.global.TotalRecovered}
              </p>
              <p>
                <strong>New Recovered Cases:</strong> {this.state.global.NewRecovered}
              </p>
              <p>
                <strong>Deaths:</strong> {this.state.global.TotalDeaths}
              </p>
              <p>
                <strong>New Deaths:</strong> {this.state.global.NewDeaths}
              </p>
            </section>
            <section>
              <h2>Per-country COVID-19 Data</h2>
              {this.state.countries.map(item => (
                <Link key={item.Slug} to={`/country/${item.Slug}`}>
                  <h6>{item.Country}</h6>
                  <span>
                    <strong>Confirmed:</strong> {item.TotalConfirmed}
                  </span>
                  <span>
                    <strong>Recovered:</strong> {item.TotalRecovered}
                  </span>
                  <span>
                    <strong>Deaths:</strong> {item.TotalDeaths}
                  </span>
                </Link>
              ))}
            </section>
          </>
        )}
      </div>
    );
  }
}

export default HomeView;
