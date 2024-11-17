import { useEffect } from "react";


const Especies = () => {
    useEffect(() => {
        fetch(`https://ghibliapi.vercel.app/species`)
        .then((response) => response.json())
        .then(data => {
            const specContainer = document.getElementById("especie")
            let specie = '';

            data.forEach(function(info) {
                specie += `  <div class="col-sm-6 mb-3 mb-sm-0">

                            <div class="card text-bg-secondary mb-3" style="max-width: 18rem;">
                            <div class="card-header">Especie</div>

                            <div className="card-body">
                            <h5 className="card-title">Nombre: ${info.name}</h5>
                            <p className="card-text">Clasificación: ${info.classification}</p>
                            <p className="card-text"> ojos: ${info.eye_colors}</p>
                            <p className="card-text">Cabello: ${info.hair_colors}</p>
                            </div>
                            </div>
                            </div>
                            </div>`

                
            });
            specContainer.innerHTML = specie;
        })
    })

    return(
        <div className = "row" id="especie">
           

        </div>
    );
};
export default Especies;