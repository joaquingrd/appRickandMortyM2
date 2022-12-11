import Cards from "./Cards.jsx";


const NavHome = ()=>{

const [characters, setCharacters] = useState(character)

const onSearch = (characterId) => {
  fetch(`"https://rickandmortyapi.com/api/${characterId}"`)
  .then(results => results.json())
  .then(data =>{
    if(data.name){
      setCharacters(prevState => [...prevState, data])
    } else {
      window.alert("No se encontró tu personaje!!!")
    }
  })
}

    
    return(
        <>
            <Cards />
        </>
    )
}

export default NavHome;