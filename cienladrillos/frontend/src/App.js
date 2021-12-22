import './assets/css/App.css';
import logo from './img/logotipo.png';
import Header from './components/Header';
import Contenido from './components/Contenido';
import Formulario from './components/Formulario';


function App() {
  return (
    <div className='App'>
        <Header/>
        <Contenido/>
    </div>
  );
}

export default App;
