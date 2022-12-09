import React from "react";
import styles from "./SearchBar.module.css"
import { useState } from "react"

export default function SearchBar(props) {
   const [characterId, setCharacterId] = useState('');

   const handleInputchange = ({target}) => {
      setCharacterId(target.value)
   }

   const handleSubmit = (event) => {
      event.preventDefault()
      console.log(characterId);
   }

   return (

      <div>
         <form onSubmit={handleSubmit}>
            <input className={styles.Search} type='search' characterId="" onChange={handleInputchange}/>
            <button className={styles.button} onClick={()=> props.onSearch(characterId)} >Agregar</button>
         </form>
      </div>
   );
}
