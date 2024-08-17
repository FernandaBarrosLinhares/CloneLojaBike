import CardBicicletas from "../../components/CardBicicletas/CardBicicletas";
import TituloCard from "../../components/TituloCard/TituloCard";
import './ListaBicicletas.css';

function ListaBicicletas() {
    const bicicletas = [
        {
            id: 0, modelo: 'Magic Might', preco: 2499,
            imgSrc: 'https://www.origamid.com/projetos/bikcraft/img/bicicletas/magic-home.jpg',
        },
        {
            id: 1, modelo: 'Nimbus Stark', preco: 4999,
            imgSrc: 'https://www.origamid.com/projetos/bikcraft/img/bicicletas/nimbus-home.jpg',
        },
        {
            id: 2, modelo: 'Nebula Cosmic', preco: 3999,
            imgSrc: 'https://www.origamid.com/projetos/bikcraft/img/bicicletas/nebula-home.jpg',
        }
    ]

    return (
        <div className="bicicletas-container">
            <TituloCard />
            <ul className="bicicletas-lista">
            {bicicletas.map(bike =>
                <CardBicicletas key={bike.id} modelo={bike.modelo} preco={bike.preco} imgSrc={bike.imgSrc} />
            )}
            </ul>
        </div>
    )
}

export default ListaBicicletas;
