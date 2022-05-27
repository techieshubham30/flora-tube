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

        <NavLink to="/playlist" className={active}>
          <i className="fas fa-folder"></i>
          <sapn>Playlists</sapn>
        </NavLink>

        <NavLink to="/liked" className={active}>
          <i className="fas fa-thumbs-up"></i>
          <sapn>Liked Videos</sapn>
        </NavLink>

        <NavLink to="/watchlater" className={active}>
          <i className="fas fa-clock"></i>
          <sapn>Watch Later</sapn>
        </NavLink>

        <NavLink to="/history" className={active}>
          <i className="fas fa-history"></i>
          <sapn>History</sapn>
        </NavLink>
      </ul>
    </aside>
  );
};

export { Sidebar };
