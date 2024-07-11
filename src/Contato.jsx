import "./Contato.css";  
import ContatoFormulario from "./ContatoFormulario.jsx";  

function Contato() {
    return (
        <div className="contato container">
            <section className="contato-dados">
                <h2>Loja OnLine</h2>
                <div className="contato-endereco">
                    <p>Rua Sem saída, 80</p>
                    <p>Florianópolis</p>
                    <p>Santa Catarina-Brasil</p>
                </div>
                <address className="contato-meios">
                    <a href="mailto:contato@bikecraft.com">contato@bikecraft.com</a>
                    <a href="mailto:assistencia@bikecraft.com">assistencia@bikecraft.com</a>
                    <a href="tel:+554899999999">+55 48 9999-9999</a>
                </address>
                <div className="contato-redes">
                    <a href="#">
                        <img src="https://www.origamid.com/projetos/bikcraft/img/redes/instagram-p.svg" alt="Instagram" />
                    </a>
                    <a href="#">
                        <img src="https://www.origamid.com/projetos/bikcraft/img/redes/facebook-p.svg" alt="Facebook" />
                    </a>
                    <a href="#">
                        <img src="https://www.origamid.com/projetos/bikcraft/img/redes/youtube-p.svg" alt="YouTube" />
                    </a>
                </div>
            </section>
            <section className="contato-formulario">
                <ContatoFormulario />
            </section>
        </div>
    );
}

export default Contato;