import ".Contato.css";
import ContatoFormulario from "./Contat0/ContatoFormulario/ContatoFormulario";


function Contato(){
    return(
        <>
        <div className="contato container">
            <section className="contato-dados">
                <h2>Loja OnLine</h2>
                <div className="contato-endereco">
                    <p>Rua Sem saída, 80</p>
                    <p>Florianópolis</p>
                    <p>Santa Cartarina-Brasil</p>
                </div>
                <address className="contato-meios">
                    <a href="">contato@bikecraft.com</a>
                    <a href="">assistencia@bikecraft.com</a>
                    <a href="">+55 48 9999-9999</a>
                </address>
                <div className="contato-redes">
                    <a href="#">
                        <img
                        src="https://www.origamid.com/projetos/bikcraft/img/redes/instagram-p.svg"
                        alt=""  
                     />
                   </a>
                   <a href="#">
                        <img
                            src="https://www.origamid.com/projetos/bikcraft/img/redes/facebook-p.svg"
                            alt=""
                        />
                    </a>
                    <a href="#">
                        <img
                            src="https://www.origamid.com/projetos/bikcraft/img/redes/youtube-p.svg"
                            alt=""
                    />
                 </a> 
                </div>
            </section>
            <ContatoFormulario/>
        </div>
        </>
    )
}

export default Contato