import styles from "./Card.module.css";
import { useDispatch } from "react-redux"
import { deleteCharacter } from "../../redux/actions"
import { Link } from "react-router-dom";

const Card = ({ name, image, id, species}) => {

   const dispatch=useDispatch();

   const handleClick=()=>{
      dispatch(deleteCharacter(id))
   }

   return (
      
      <div className={styles.divCard}>
         
   
         <img className={styles.img} src={image} alt={name} />
           
         <button  className={styles.boton}  >
            <Link to={`/details/${id}`} className={styles.link}>
               {name}
               </Link>
         </button>

         </div>
   );
}

export default Card
