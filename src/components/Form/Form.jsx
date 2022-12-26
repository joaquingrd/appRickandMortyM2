import { connect } from "react-redux";
import React, {useState} from "react";
import { createCharacter } from "../../redux/actions.jsx";
import NavBar from "../NavBar/NavBar.jsx";
import Crear from "../../imagenes/crear3.jpg"
import styles from "./Form.module.css"
import Card from "../Card/Card.jsx"



const Form = (props) => {
    const [form, setForm] = useState ({
        name: '',
        species: '',
        status: '',
        gender: '',
    })

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setForm ({
            ...form,
            [property]:value
        })
    
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.createCharacter({
            ...form,
            id: Date.now(),
            image: (Crear),
            
        })


    }

    return (
        <div className={styles.body}>
            <NavBar />
            <form className={styles.form} onSubmit={(event) => handleSubmit(event)}>
                <input className={styles.input} placeholder="NOMBRE" name='name' value={form.name} onChange={(event) => handleChange(event)}/>
                <select className={styles.input1} placeholder="ESPECIE" name="species" value={form.species} onChange={(event) => handleChange(event)}>
                    "PRUEBA"
                    <option hidden selected>ESPECIE</option>
                    <option >HUMANO</option>
                    <option>HUMANOIDE</option>
                    <option>ALIEN</option>
                    <option>CRIATURA MITOLOGICA</option>
                </select>
                <select className={styles.input1} placeholder="STATUS" name="status" value={form.status} onChange={(event) => handleChange(event)}>
                    <option hidden selected>STATUS</option>
                    <option>VIVO</option>
                    <option>MUERTO</option>
                </select> 
               
            </form>
            <button className={styles.boton} onClick={handleSubmit} type="submit">CREAR</button>

            <div className={styles.cards}>
            {[...props.myCharacters].map(character => {
              return (
                <Card
                  name={character.name}
                  image={character.image}
                  specie={character.specie}
                  status={character.status}
                />
            )
          })
          }
            </div>

        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        myCharacters: state.myCharacters
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createCharacter: (character) => {dispatch(createCharacter(character))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Form);