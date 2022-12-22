import React, { Fragment, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../redux/actions";
import styles from "./Details.module.css"

export default function Details() {
  const dispatch = useDispatch();
  const {id} = useParams()

  useEffect(() => {
    dispatch(getDetails(id));

  }, [dispatch, id]);

  const personaje = useSelector((state) => state.details);

  return (
    <Fragment>
      {personaje ? (
        <div key={personaje.id} className={styles.body}>
          <div className={styles.conteiner}>
            <img className={styles.img}  src={personaje.image} alt={personaje.name} />
            <div className={styles.info}>
              <p className={styles.title}>{personaje.name}</p>
                <div className={styles.containerBox}>
                  <div className={styles.data}>
                    <p> <a className={styles.a}>SPECIES</a> {personaje.species} </p>
                  </div>
                  <div className={styles.data}>
                    <p> <a className={styles.a}> STATUS </a> {personaje.status} </p>
                  </div>
                  <div className={styles.data}>
                    <p> <a className={styles.a}> GENDER </a>{personaje.gender} </p>
                  </div>
                </div>

            </div>

          </div>
            <br />
            <Link to="/home">
              <button className={styles.boton}>VOLVER</button>
            </Link>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </Fragment>
  );
}
