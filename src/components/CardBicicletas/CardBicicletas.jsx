import './CardBicicletas.css';

function CardBicicletas({ modelo, preco, imgSrc }) {
    return (
        <div className='card-bicicleta'>
            <ul>
                <li>
                    <a href="#bicicletas">
                    <img src={imgSrc} alt="Bicicleta"/>
                    <h3>{modelo}</h3>
                    <span>R$ {preco}</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default CardBicicletas;