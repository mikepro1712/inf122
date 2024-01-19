import React from "react";
import Botones from "./Botones";
import '../styles/Login.css';
function Login({funClick, text}){
    return(
        <div className="main">
            <div className="padre">
                <form>
                    <div className="usuario">
                        <label>usuario: </label>
                        <input placeholder="Ingresar usuario"></input>
                        </div>
                        <div className="contraseña">
                            <label>contraseña: </label>
                            <input placeholder="Ingresar usuario"></input>
                        </div>
                        <div className="Buttons">
                            <Botones funClick={()=>funClick("Login")} text={"Login"}/>
                            <Botones funClick={()=>funClick("Ingresar")} text={"Ingresar"}/>
                            </div>
                </form>
            </div>
            </div>
    );
}
export default Login;