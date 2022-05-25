import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "./navbar.css";
const Navbar = () => {
  const {
    auth: { loginHandler },
  } = useAuth();
  return (
    <header className="header shadow-box">
      <nav className="navbar">
        <div className="nav-left">
          <i className="fas fa-seedling logo-icon"></i>
          <Link to="/" className="logo">
            FloraTube
          </Link>
        </div>

        <div className="nav-center">
          <form className="search-bar-container">
            <label htmlFor="search-bar" className="fas fa-search" />
            <input
              type="text"
              className="search-bar"
              placeholder="Search Videos"
            />
          </form>
        </div>
        <div className="nav-right">
          <Link to="/signin" onClick={loginHandler}>
            <i className="fas fa-sign-in-alt "></i>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export { Navbar };
