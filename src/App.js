import './App.css'
import NavBar from './components/NavBar.jsx'
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home"
import Form from "./components/Form.jsx"
import SearchHome from './components/SearchHome'
import LandingPage from './components/LandingPage/LandingPage';
import Details from './components/Details/Details';


function App (props) {
  

  return (
    <div className='App'>
         <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/details/:id' element={<Details />} />
        {/* <Route exact path='/search' element={<SearchHome onSearch={props.onSearch}/> } /> */}
         </Routes>
     
    </div>
  )
}

export default App



  // const [characters, setCharacters] = useState(character)

  // const onSearch = (characterId) => {
  //   fetch(`"https://rickandmortyapi.com/api/${characterId}"`)
  //   .then(results => results.json())
  //   .then(data =>{
  //     if(data.name){
  //       setCharacters(prevState => [...prevState, data])
  //     } else {
  //       window.alert("No se encontró tu personaje!!!")
  //     }
  //   })
  // }
 


