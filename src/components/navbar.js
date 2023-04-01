
import '../App.css';
import '../index.css'


function NavBar(props) {
    const { onChange, onFilterChange } = props
    return (
        <div className='Navbar'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="formsdd">
                        <input onChange={onChange} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <div className='butttonss'>
                            <button onClick={() => onFilterChange("jewelery")} type="button" className="btn btn-secondary">Jewellery</button>
                            <button onClick={() => onFilterChange("clothing")} type="button" className="btn btn-warning">Cloths</button>
                            <button onClick={() => onFilterChange("electronics")} type="button" className="btn btn-info">Eletronics</button>
                        </div>
                    </form>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
