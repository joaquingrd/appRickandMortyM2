import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";

export default function LandingPage() {
    return (
        <div className={styles.LandingPage}>
            <Link to="/home">
                <button className={styles.Ingresar}> 
                    <h1>INGRESAR!</h1>
                </button>            
            </Link>
        </div>
    );
}