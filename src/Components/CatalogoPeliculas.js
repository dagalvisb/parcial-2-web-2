import { useEffect, useState } from "react"
import Pelicula from "./Pelicula";
import Paginator from "./Paginator";

const CatalogoPeliculas = () => {
    const [peliculas, setPelicula] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {


        fetch(` https://ghibliapi.vercel.app/films/?page=${page}`)
        .then (response => response.json())
        .then (data => 
            {
            setPelicula(data);
            setIsLoading(false);
            }
        )
        },[page])

        return (
            <>   
                <div className="container">
                    <header>
                        <img src="https://images2-megamedia.cdn.mdstrm.com/etcetera/2020/01/24/9698_1_5e2b127995534.jpg?d=1200x500" className="container" alt="img_pelicula"/>
                    </header> 
                    <body>
                    <h1 className = "text-center text-light ">Peliculas Japonesas</h1>
                    <div className= "row row-cols-1 row-cols-md-2 g-4">
                        {isLoading ? `cargando...` : ''}
                        {peliculas.map(peliculas => (
                            <>
                            <Pelicula  
                            key = {peliculas.id} 
                            id = {peliculas.id}
                            image = {peliculas.image}
                            title={peliculas.title} 
                            original_title={peliculas.original_title}
                            director = {peliculas.director}
                            producer = {peliculas.producer}/>
                            </>
                        ))}
                    </div>
                    </body>
                    <footer>
                    <Paginator page = {page} setPage={setPage}/>
                    </footer>
                </div>
                
            </>    
        )
}
export default CatalogoPeliculas;