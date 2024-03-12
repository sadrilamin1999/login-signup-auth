import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/login">Log in</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/signup">Sign up</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
