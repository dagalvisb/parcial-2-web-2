import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Pelicula2 from "./Pelicula2";
import Personajes from "./Personajes";


const DetallesPelicula = () => {

    const {id} = useParams();
    const [pelicula, setPelicula] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`https://ghibliapi.vercel.app/films/${id}`)
        .then (Response => Response.json())
        .then (data => {
            setPelicula(data)
            setIsLoading(false);
        })


    }, [id])

    return(
        <>
            {isLoading ? `cargando...` : ''}
            {! isLoading && <>
                <Pelicula2  
                key = {pelicula.id} 
                id = {pelicula.id}
                image= {pelicula.movie_banner}
                title={pelicula.title} 
                original_title={pelicula.original_title}
                director = {pelicula.director}
                producer = {pelicula.producer}
                description = {pelicula.description}/>
                <Personajes 
                key = {pelicula.id}
                id = {pelicula.id}/>
                </>
            }

        </>
    )
}
export default DetallesPelicula;