import React from "react";
import Botones from "./Botones";
import { useRef } from 'react';
import '../styles/Register.css';
function Perfil(){
    const funClick=(a)=>{
        console.log(a);
    }
    return(
        <div className="main">
            <div className="padre">
                <form>
                    <div className="Nombre">
                        <label>Nombre: </label>
                        <input placeholder="Ingresar Nombre"></input>
                        </div>
                        <div className="Apellido">
                            <label>Apellido: </label>
                            <input placeholder="Ingresar Apellido"></input>
                        </div>
                        <div className="contraseña">
                            <label>contraseña: </label>
                            <input placeholder="Ingresar usuario"></input>
                        </div>
                        <div className="Buttons">
                            <Botones funClick={()=>funClick("Registrar")} text={"Registrarse"}/>
                            </div>
                </form>
            </div>
            </div>
    );
}
export default Perfil;