import styles from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

function NavBar() {
  return(
    <div className={styles.body}>
      <div className={styles.nav}>
       <nav>
        <Link to={'/home'} > INICIO </Link>
        <Link to={'/form'} > CREAR </Link>
        <SearchBar />
       </nav>
       <Link to={'/'} className={styles.invisible}></Link>

      </div>
    </div>
  )
}

export default NavBar;


