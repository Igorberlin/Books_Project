import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand bg-dark">
            <div className="container">
                <div className="navbar-nav">
                    <NavLink className="nav-link active text-white h2" to="/">
                        Home
                    </NavLink>
                    <NavLink className="nav-link text-white h2" to="/books">
                        Books
                    </NavLink>
                    <NavLink className="nav-link text-white h2" to="/add_book">
                        Add book
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
