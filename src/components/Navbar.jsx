import { NavLink } from 'react-router-dom';
import '../Navbar.css';
function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/home" exact activeClassName="active">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin" activeClassName="active">
                        Admin
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;