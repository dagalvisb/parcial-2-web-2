const Paginator = ({page, setPage}) => {
    const goNext = () => {
        if (page >= 1){
        setPage (actual => actual + 1);
        }
    }

    const goBack = () => {
        if (page > 1){
        setPage (actual => actual -1);
        }
    }

    return (
        <nav className="d-flex justify-content-center">
            <ul className="pagination">
                <li className="page-item"><a className="page-link" onClick={goBack}>Previous</a></li>
                <li className="page-item"><a className="page-link" onClick={goNext}>Next</a></li>
            </ul>
        </nav>
    )
}
export default Paginator;