import { Link } from "react-router-dom";

const Pelicula = ({id,image, title, original_title, director, producer}) => {

    return(   
        
    <div className = "col">
        <div className="card mb-3">
            <div className="row g-0 text-bg-dark">
                <div className="col-md-5">
                <img src={image} className="img-fluid rounded-start" alt={title}/>
                </div>
                <div className="col-md-7">
                    <div className="card-body">
                        <h1 className="card-title link-offset-2 link-underline link-underline-opacity-0" ><Link to = {`pelicula/${id}`}><strong>{title}</strong></Link></h1>
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
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Pelicula;