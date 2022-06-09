import "./sidebar.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const active = ({ isActive }) =>
    isActive ? "sidebar-item active" : "sidebar-item";
  return (
    <aside className="sidebar-container shadow-box">
      <ul className="sidebar-item-list">
        <NavLink to="/" className={active}>
          <i className="fas fa-compass"></i>
          <span>Explore</span>
        </NavLink>

        <NavLink to="/playlists" className={active}>
        <i className="fas fa-folder-plus"></i>
          <span>Playlists</span>
        </NavLink>

        <NavLink to="/likes" className={active}>
          <i className="fas fa-thumbs-up"></i>
          <span>Liked Videos</span>
        </NavLink>

        <NavLink to="/watchlater" className={active}>
          <i className="fas fa-clock"></i>
          <span>Watch Later</span>
        </NavLink>

        <NavLink to="/history" className={active}>
          <i className="fas fa-history"></i>
          <span>History</span>
        </NavLink>
      </ul>
    </aside>
  );
};

export { Sidebar };
