import React, { Component } from "react";
import Dimensions from "react-dimensions";
import { Container } from "./stylesGeoloc";
import MapGL from "react-map-gl";
import PropTypes from "prop-types";

const TOKEN =
  "pk.eyJ1IjoibWVsYW5jaG9saXNjaCIsImEiOiJjazUwNnVpdzMwajE1M29xazB6Njl6NnB1In0.kwi4Ppx64vVbkt956MbOvg";

class Map extends Component {
  static propTypes = {
    containerWidth: PropTypes.number.isRequired,
    containerHeight: PropTypes.number.isRequired
  };

  state = {
    viewport: {
      latitude:  -22.9035,
      longitude: -43.2096,
      zoom: 12.8,
      bearing: 0,
      pitch: 0
    }
  };
  render() {
    const { containerWidth: width, containerHeight: height } = this.props;
    return (
      <MapGL
        width={width}
        height={height}
        {...this.state.viewport}
        mapStyle="mapbox://styles/mapbox/light-v9"
        mapboxApiAccessToken={TOKEN}
        onViewportChange={viewport => this.setState({ viewport })}
      />
    );
  }
}

const DimensionedMap = Dimensions()(Map);
const App = () => (
  <Container>
    <DimensionedMap />
  </Container>
);

export default App;

















/*
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import stylesGeoloc from './stylesGeoloc';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="mapa" 
            style={{ 
                height: '70vh', 
                width: '70%', 
                margin: '0 auto' 
                
                }}>


        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBLeoPQDM449sDfdfG5jSsoz2q8AkwV8P8' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          defaultOptions={{style: stylesGeoloc}}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="COLOCAR MARCADOR AQUI"

          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;


*/