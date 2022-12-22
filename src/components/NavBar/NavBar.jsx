import styles from "./NavBar.module.css";

function NavBar() {
  return(
    <div className={styles.body}>
      <div className={styles.nav}>
       <nav>
        <a href="#">INICIO</a>
        <a href="#">FAVORITOS</a>
        <a href="#">CREAR</a>
       </nav>

      </div>
    </div>
  )
}

export default NavBar;


