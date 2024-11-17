import { useEffect } from "react";

const Ubicasiones = () => {
    useEffect(() => {
        fetch(`https://ghibliapi.vercel.app/locations`)
        .then((response) => response.json())
        .then(data => {
            const locContainer = document.getElementById("locacion")
            let location = '';

            data.forEach(function(info) {
                location += `  <div class="col-sm-6 mb-3 mb-sm-0">

                            <div class="card text-bg-secondary mb-3" style="max-width: 18rem;">
                            <div class="card-header"><strong>Ubicación</strong></div>

                            <div className="card-body">
                            <h5 className="card-title">Nombre: ${info.name}</h5>
                            <p className="card-text">Clasificación: ${info.climate}</p>
                            <p className="card-text"> ojos: ${info.terrain}</p>
                            <p className="card-text">Cabello: ${info.surface_water}</p>
                            </div>
                            </div>
                            </div>
                            </div>`

                
            });
            locContainer.innerHTML = location;
        })
    })

    return(
        <div className = "row" id="locacion">
           

        </div>
    );
}
export default Ubicasiones;