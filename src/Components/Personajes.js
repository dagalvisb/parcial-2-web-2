import { useEffect } from "react";

const Personajes = ({id}) => {

    useEffect(() => {
        
        fetch(`https://ghibliapi.vercel.app/people`)
        .then((response) => response.json())
        .then(data => {
            const charContainer = document.getElementById("character");
            let character = '';
            data.forEach(function(informacion) {
                if (informacion.films[0] === `https://ghibliapi.vercel.app/films/${id}`){
                        character += `<tr>
                            <td>${informacion.name}</th>
                            <td>${informacion.gender}</td>
                            <td>${informacion.age}</td>
                            <td>${informacion.eye_color}</td>
                            <td>${informacion.hair_color}</td>
                        </tr>`
            }});
            charContainer.innerHTML= character;
        })
    }, [id])
  
    return (
        <div class="container ">
            <h3 class="text-center text-light">Personajes</h3>
            <div>
                <table  class="table">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Genero</th>
                            <th scope="col">Edad</th>
                            <th scope="col">Color de ojos</th>
                            <th scope="col">Color de cabello</th>
                        </tr>
                    </thead>
                    <tbody id="character">
                    </tbody>
                    </table>
            </div>
        </div>
    )
}
export default Personajes;