import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "./navbar.css";
const Navbar = () => {
  const {
    logoutHandler,
    auth: { isAuthenticated },
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
          {isAuthenticated ? (
            <Link to="/signin" onClick={logoutHandler}>
            <i>logout</i>
            </Link>
          ) : (
            <Link to="/signin">
              <i>login</i>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export { Navbar };
