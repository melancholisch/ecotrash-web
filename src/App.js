import React from 'react';
// import { Container } from './styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


import Routes from './routes';
import GlobalStyle from './styles/global';

function App(){
  return (
  <>
  <Routes />
  <GlobalStyle/>
  </>
  );
}
export default App;
