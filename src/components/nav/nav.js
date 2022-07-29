import { NavLink } from "react-router-dom";
import "./nav.css";
const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav nav-item">
        <NavLink className="nav-item" to={"/"}>
          My TODO App
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
