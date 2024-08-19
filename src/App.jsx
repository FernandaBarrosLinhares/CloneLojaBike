import './index.css'
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
// import CardBike from './components/CardBike'
import Contato from './Contato.jsx';  
import TituloContato from "./components/Contato/TituloContato/TituloContato.jsx";
import ListaBicicletas from './pages/ListaBicicletas/ListaBicicletas.jsx';

function App() {
  return (
    <div className="app">
      <Header logo="https://www.origamid.com/projetos/bikcraft/img/bikcraft.svg"></Header>
      <ListaBicicletas />
      <TituloContato></TituloContato>
      <Contato></Contato>
      {/* <CardBike></CardBike> */}
      <Footer></Footer>
    </div>
  )
}

export default App;