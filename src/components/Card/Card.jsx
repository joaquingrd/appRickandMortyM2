import styles from "./Card.module.css";
import { useDispatch } from "react-redux"
import { deleteCharacter } from "../../redux/actions"

const Card = ({ name, species, gender, image, id}) => {

   const dispatch=useDispatch();

   const handleClick=()=>{
      dispatch(deleteCharacter(id))
   }

   return (
      
      <div className={styles.divCard}>
         
         {/* <div>
            <button className={styles.button} onClick={handleClick}>X</button>
         </div> */}
       
         <img className={styles.img} src={image} alt={name} />
      {/*        
         <div className={styles.name}>
            <h2>{name}</h2>
         </div> */}
         <button className={styles.boton}>{name}</button>

         {/* <div className={styles.characters}>
            <h2>{species}</h2>
            <h2>{gender}</h2>
         </div> */}
         
      </div>
   );
}

export default Card
