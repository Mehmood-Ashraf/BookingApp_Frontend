import { Link } from "react-router-dom";
import "./navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">My Booking App</span>
        </Link>
        {user ? user.userName : (<div className="navItems">
          <button className="navButton">Register</button>
          <Link to={"/login"}>
          <button className="navButton">Login</button>
          </Link>
        </div>)}
      </div>
    </div>
  );
};

export default Navbar;
