
import '../App.css';
import '../index.css'

function Pagination(props) {
    const { pagination } = props
    return (
        <div className="Pagination">
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item"><p onClick={() => pagination(1)} className="page-link">Previous</p></li>
                    <li className="page-item"><p onClick={() => pagination(1)} className="page-link">1</p></li>
                    <li className="page-item"><p onClick={() => pagination(2)} className="page-link">2</p></li>
                    <li className="page-item"><p onClick={() => pagination(3)} className="page-link">3</p></li>
                    <li className="page-item"><p onClick={() => pagination(3)} className="page-link">Next</p></li>
                </ul>
            </nav>
        </div>
    );
}

export default Pagination;
