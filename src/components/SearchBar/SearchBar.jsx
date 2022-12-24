import styles from "./SearchBar.module.css"
import React, {useState} from "react"
import { useDispatch } from "react-redux"
import { getDetails } from "../../redux/actions"
import { useNavigate } from "react-router-dom"

export default function Search () {
 const dispatch = useDispatch();
 const [searchId, setSearchId] = useState('');
 const navigate = useNavigate();


 const handleChange = (event) => {
    setSearchId(event.target.value)
 }

 const handleSubmit = (event) => {
    event.preventDefault();
    if(searchId && searchId < 827){
    dispatch(getDetails(searchId))
    setSearchId('')
    navigate(`/details/${searchId}`)
    }else{
        window.alert("El ID es inexistente!")
    }        
}

return(
    <div>
        <input 
                className={styles.input} 
                type= "number" 
                onChange={event => handleChange(event)} 
                value={searchId} 
                placeholder={"Buscar..."} 
        />
                
        <button 
                className={styles.boton} 
                type= "submit" 
                onClick={event => handleSubmit(event)} > 
                 🔍︎
        </button>
    </div>
)
}
