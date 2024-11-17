import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import DetallesPelicula from './Components/DetallesPelicula.js';
import CatalogoPeliculas from './Components/CatalogoPeliculas.js';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './Components/Layout.js';
import Especies from './Components/Especies.js'
import Ubicasiones from './Components/Ubicaciones.js'
import Vehiculos from './Components/Vehiculos.js'

function App() {
  return (
  <Router>
    <Routes>
      <Route path='/' Component={Layout}>
        <Route path='/' Component = {CatalogoPeliculas}></Route>
        <Route path='/pelicula/:id' Component={DetallesPelicula}></Route>
        <Route path='/especies' Component={Especies}></Route>
        <Route path='/ubicaciones' Component={Ubicasiones}></Route>  
        <Route path='/vehiculos' Component={Vehiculos}></Route>   
      </Route>
    </Routes>
  </Router>
  );
}

export default App;
