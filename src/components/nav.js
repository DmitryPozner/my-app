import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <div>
        <NavLink to={"/todo"}>My ToDO list</NavLink>
      </div>
    </nav>
  );
};

export default Nav;
