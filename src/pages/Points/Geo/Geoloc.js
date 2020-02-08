import React, { Component } from 'react';
import L from 'leaflet'
//import { Icon } from 'leaflet';
import { Container } from './stylesGeoloc';

export default class Map extends Component {
  constructor(){
      super();
      this.state = {
          lng: -22.904732,
          lat: -43.176408,
          zoom: 12,
      };
  };

  componentDidMount(){
    this.map = L.map('map').setView([this.state.lng, this.state.lat], this.state.zoom);

    L.tileLayer('https://c.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

  
    // SABOR SAUDE CENTRO
    L.marker([-22.904732, -43.176408]).addTo(this.map)
        .bindPopup('<b style="color: green">Descarte seus equipamentos aqui!</b><br />Sabor Saúde<br/> Rua da Quitanda nº32, Centro - Rio de janeiro</p>');
    // MUNDO VERDE BOTAFOGO
    L.marker([-22.949193, -43.187831]).addTo(this.map)
        .bindPopup('<b style="color: green">Descarte seus equipamentos aqui!</b><br />Mundo verde <br/> Rua São Clemente nº164, Botafogo - Rio de janeiro</p>');
    // MUNDO VERDE ZN
    L.marker([-22.884931, -43.284891]).addTo(this.map)
        .bindPopup('<b style="color: green">Descarte seus equipamentos aqui!</b><br />Mundo verde <br/> Av Dom Helder Câmara nº5474, Piedade - Rio de janeiro</p>');
  

  };

  // POSIÇÃO DO USUARIO

    displayLocation = () => {
      navigator.geolocation.getCurrentPosition((position) => {
        let longi = position.coords.longitude;
        let lati = position.coords.latitude;
        L.marker([lati, longi]).addTo(this.map)
        .bindPopup('<b style="color: red">Você está aqui!</p>');
    });
  };

render(){
  
  return(
    <Container>
      <div>
          <button id="botaoLoc" onClick={this.displayLocation}>Onde estou?</button>
          <div id="map"></div>
      </div>
    </Container>
  )};
};