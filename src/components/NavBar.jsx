import React from "react";
import SearchBar from "./SearchBar";
import styles from './NavBar.module.css'
// import characters from "../data";
import { Link } from 'react-router-dom'
 

class NavBar extends React.Component{
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className={styles.NavBar}>
        <div>
          <Link to={'/'}><button className={styles.button}>Principal</button></Link>
          <Link to={'/form'}><button className={styles.button}>Crea tu personaje</button></Link>
          <Link to={'/search'}><button className={styles.button}>Buscar</button></Link>
        </div>
      </div>
    )
  }
}

export default NavBar;