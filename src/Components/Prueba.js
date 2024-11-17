const Prueba = () => {
        fetch(` https://ghibliapi.vercel.app/films`)
        .then (Response => Response.json())
        .then (data => console.log(data))
       
}
export default Prueba;