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