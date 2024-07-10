
import './index.css'
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
// import CardBike from './components/CardBike'
import Contato from './components/Contato/ContatoFormulario/ContatoFormulario.jsx';
import TituloContato from "./components/Contato/TituloContato/TituloContato.jsx";



function App() {
  

  return (
    <div className="app">
      <Header logo="https://www.origamid.com/projetos/bikcraft/img/bikcraft.svg"></Header>
      <TituloContato></TituloContato>
      <Contato></Contato>
     
      
      {/* <CardBike></CardBike> */}
     <Footer></Footer>
    </div>
  )
}

export default App