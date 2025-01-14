import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav className="navbar navbar-dark bg-Balck navbar-expand-md">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand" href="/">Peliculas Japonesas</a>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/especies">Especies</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/ubicaciones">Ubicaciones</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/vehiculos">Vehiculos</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            <div className="container mt-4">
                <Outlet/>
            </div>

        </>
    )
}
export default Layout;