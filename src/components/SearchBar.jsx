import React from "react";
import styles from "./SearchBar.module.css"




export default function SearchBar (props){

   return (

      <div>
         <form >
            <input 
            className={styles.Search} 
            type='search' 
            name="search"
            placeholder="Encuentra tu personaje"
           />

            <button className={styles.button} >Agregar</button>
         </form>
         
      </div>
   );
}



// // const [personaje, setPersonaje] = useState ([])
// // const [searchId, setSearchId] = useState('');

// // const datos = event => {
// //    event.preventDefault()
// //    fetch(`https://rickandmortyapi.com/api/character/${searchId}`)
// //    .then(response => response.json())
// //    .then(data => {
// //       setPersonaje(data)
// //    })
// // }   

// // useEffect(()=> {
// // datos();
// // },[])



 
// // }
// // const handleSubmit = (event) => {
// //    event.preventDefault()
// //    const filtrar = (terminoBusqueda)=>{
// //       let resultadosBusqueda=personaje.filter((elemento)=>(
// //          if(elemento.id.include(terminodeBusqueda))
// //       ))
// //    }
// // }

