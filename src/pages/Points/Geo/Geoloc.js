import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


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
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="AQUI MEU CARALHO"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;


