

const Pelicula2 = ({image, title, original_title, director, producer, description}) => {

    return(   
    <div className="card mb-3">
        <img src={image} class="card-img-top" alt={title}/>
        <div className="card-body">
        <h1 className="card-title link-offset-2 link-underline link-underline-opacity-0" ><strong>{title}</strong></h1>
        <span>
            Título Original:
            <br></br>
            <h3 className="card-title" ><strong>{original_title}</strong></h3>
        </span>
        <span>
            Director:
            <br></br>
            <h5><strong>{director}</strong></h5>
        </span>
        <span>
            Productor:
            <br></br>
            <h5><strong>{producer}</strong></h5>
        </span>
        <span>
            <strong>Descripción:</strong>
            <br></br>
            <p>{description}</p>
        </span>
        </div>
      </div>

    );
}

export default Pelicula2;