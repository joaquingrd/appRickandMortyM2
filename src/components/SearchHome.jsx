// import SearchCards from "./SearchCards";
// import { useState } from 'react';
// import character from '../data';
// import SearchBar from "./SearchBar";


// const SearchHome = (props)=>{
    
//     const [characters, setCharacters] = useState(character)

//     const onSearch = (characterId) => {
//       fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
//         .then((response) => response.json())
//         .then((data) => {
//            if (data.name) {
//               setCharacters((oldChars) => [...oldChars, data]);
//            } else {
//               window.alert('No hay personajes con ese ID');
//            }
//         });
//     }



//     return(
//         <>
//             <SearchBar onSearch={onSearch}/>
//             <SearchCards characters={characters} />
//         </>
//     )
// }

// export default SearchHome;