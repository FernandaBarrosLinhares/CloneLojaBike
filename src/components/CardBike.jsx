import './CardBike.css'

// eslint-disable-next-line react/prop-types
function CardBike({modelo,preco,imagemSrc}) {
    function comprarBike() {
        console.log('comprando a bicicleta')
    }
    return (

        
        <>
            <div className="card-bike">
                <div>
                <img src={imagemSrc}></img>
                <h4 className="modelo">{modelo}</h4>
                <h6 className="preco">{preco}</h6>
                
                <button onClick={() => comprarBike()}>Comprar</button>
                </div>
                
            
            </div>        
        </>
    )
}

export default CardBike

