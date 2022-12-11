import React from "react";
import styles from "./SearchBar.module.css"
import { useState, useEffect } from "react"


export default function SearchBar(props) {
   const [search, setSearch] = useState('');


   const handleInputchange = (event) => {
      setSearch(event.target.value)
      console.log(event.target.value)
    
   }

   const handleSubmit = (event) => {
      event.preventDefault()
      console.log(search);
   }

   return (

      <div>
         <form onSubmit={handleSubmit}>
            <input className={styles.Search} value={search} type='search' search="" onChange={handleInputchange}/>
            <button className={styles.button} onClick={()=> props.onSearch(search)} >Agregar</button>
         </form>
      </div>
   );
}
