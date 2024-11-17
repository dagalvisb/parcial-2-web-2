import { useEffect } from "react";

const Vehiculos = () => {
    useEffect(() => {
        fetch(`https://ghibliapi.vercel.app/vehicles`)
        .then((response) => response.json())
        .then(data => {
            const vehiContainer = document.getElementById("vehiculo")
            let vehicle = '';

            data.forEach(function(info) {
                vehicle += `  <div class="col-sm-6 mb-3 mb-sm-0">

                            <div class="card text-bg-secondary mb-3" style="max-width: 18rem;">
                            <div class="card-header"><strong>Vehiculo</strong></div>

                            <div className="card-body">
                            <h5 className="card-title">Nombre: ${info.name}</h5>
                            <p className="card-text">Clasificación: ${info.description}</p>
                            <p className="card-text"> ojos: ${info.vehicle_class}</p>
                            <p className="card-text">Cabello: ${info.length}</p>
                            </div>
                            </div>
                            </div>
                            </div>`
                
            });
            vehiContainer.innerHTML = vehicle;
        })
    })

    return(
        <div className = "row" id="vehiculo">
           

        </div>
    );
}
export default Vehiculos;