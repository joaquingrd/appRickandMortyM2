import NavBar from "../NavBar/NavBar";
import styles from "./Home.module.css"
import Cards from "../Cards/Cards.jsx"

function Home() {
  return(
  <div className={styles.body}>
    <NavBar />
    <Cards />
    
    </div>
  )
}

export default Home;


