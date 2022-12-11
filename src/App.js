import './App.css'
import NavBar from './components/NavBar.jsx'
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home.jsx"
import Form from "./components/Form.jsx"
import SearchBar from './components/SearchBar';
import SearchHome from './components/SearchHome'

// import {useState} from "react"

function App () {



  return (
    <div className='App' style={{ padding: '25px' }}>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/form' element={<Form />} />
        <Route exact path='/search' element={<><SearchBar/> <SearchHome/> </>} />
         </Routes>
     
    </div>
  )
}

export default App




 


