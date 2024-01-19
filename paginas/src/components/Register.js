import React from "react";
import Botones from "./Botones";
import '../styles/Register.css';
function Register({funClick, text}){
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
export default Register;