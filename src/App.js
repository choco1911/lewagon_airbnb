import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
//import logo from './logo.svg';
import './App.css';
import Flat from './components/flat';
import Marker from './components/marker';

class App extends Component {
  constructor(props) {
        super(props);
        this.state = {
                flats: []
        };
  }

 componentDidMount() {
    const url = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json"
    fetch(url) //AJAX
        .then(response => response.json())
        .then(data => {
            /*
            console.log(data);
            */
            this.setState({
                flats: data
            });
        });
 }


  render() {
     const center = {
          lat: 48.864716,
          lng: 2.349014
     }

    return (
        <div className="app">
            <div className="main">
                <div className="search">
                </div>
                <div className="flats">
                    {this.state.flats.map(flat =>  <Flat flat={flat} />)}
                </div>
            </div>
            <div className="map">
            <GoogleMapReact
                center={center}
                zoom={14}
            >
                    {this.state.flats.map(flat =>  <Marker lat={flat.lat} lng={flat.lng} text={flat.price} />)}
            </GoogleMapReact>
            </div>
        </div>
    );
  }
}

export default App;
