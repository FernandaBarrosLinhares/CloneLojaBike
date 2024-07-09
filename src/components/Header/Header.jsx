// import './Header.css'

// function Header(){
//     return(
//         <>
//         <header className="header-bg">
//             <div className="header-container">
//             <img src="https://www.origamid.com/projetos/bikcraft/img/bikcraft.svg" width="136" height="32" alt="Bikcraft"></img>
//                 <nav aria-label="primaria">
//                     <ul className="header-menu">
//                     <li>Bicicletas</li>
//                     <li>Seguros</li>
//                     <li>Contato</li>
//                     </ul>
                   
//                 </nav>

//             </div>

//         </header>
//         </>
//     )
// }

// export default Header

import styles from "./styles.module.css";

export default function Header(props) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img className={styles.logo} src={props.logo} alt="" />
        <nav>
          <ul className={styles.menu}>
            <li>
              <a href="#">Bicicletas</a>
            </li>
            <li>
              <a href="#">Seguros</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}