// import styles from './SearchBar.module.css';
// import { useState } from 'react';

// const SearchBar = (props) => {

//    const [id, setId] = useState('')

//    const handleChange = (event) => {
//       setId(event.target.value)
//    }

//    const handleSubmit = (event) => {
//          event.preventDefault()
         
//       }

     
//    return (
//       <div>
//          <form onSubmit={handleSubmit}>
//             <input 
//                className={styles.InputSearch} 
//                type='search' 
//                id=''   
//                onChange={handleChange}/>
//             <button 
//             type="submit"
//             className={styles.ButtonSearch} 
//             onClick={() => props.onSearch(id)}>Buscar Personaje</button>
//          </form>
//       </div>
//    );
// }

// export default SearchBar;