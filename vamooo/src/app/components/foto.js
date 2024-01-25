"use client"
import Image from "next/image";
import style from "./foto.module.css";
import { useEffect,useState } from "react";
function Foto(){
    //declaro el estado
    const [perrito,setPerrito]=useState("/vercel.svg");
    const [estado,setEstado]=useState("esperando");
    const [Habilidad,setHabilidad]=useState("Habilidad");
    //como ire a una URL, el link de donde sacare
    const url = "https://pokeapi.co/api/v2/pokemon/ditto";
    //Ahora hago el request, ejecuta algo y devuelve nada, estructura del use effect
    useEffect(()=>{
        //fetch url hace un get,then recuoera la repuesta del request en un json , luego lo setea el message
        fetch(url)
        .then(res=>res.json())
        .then(data=>
            {setPerrito(data.sprites.front_default)
            ,setEstado(data.species.name)
            ,setHabilidad(data.abilities[1].ability.name)
        })
    }, []);
    return (
        <div className={style.Container}>
            <h1>{estado}</h1>
            <Image src={perrito}width={500} height={500}/>
            <h1> {Habilidad}</h1>
        </div>
    );
}
export default Foto;
