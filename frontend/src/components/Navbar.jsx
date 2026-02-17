import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/" className="logo">
                StyleAI
            </NavLink>

            <div className="nav-links">
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? "active" : ""}
                >
                    Home
                </NavLink>

                <NavLink
                    to="/occasion"
                    className={({ isActive }) => isActive ? "active" : ""}
                >
                    Occasion
                </NavLink>

                {/*<NavLink to="#">Upload</NavLink>
                <NavLink to="#">Recommendations</NavLink>
                <NavLink to="#">History</NavLink>*/}
            </div>
        </nav>
    );
}

export default Navbar;
