import "./sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar-container shadow-box">
      <ul className="sidebar-item-list">
        <li className="sidebar-item">
          <Link to="/">
            <i className="fas fa-compass"></i>
          </Link>
          <span>Explore</span>
        </li>
        <li className="sidebar-item">
          <Link to="/">
            <i className="fas fa-folder"></i>
          </Link>
          <sapn>Playlists</sapn>
        </li>
        <li className="sidebar-item">
          <Link to="/">
            <i className="fas fa-thumbs-up"></i>
          </Link>
          <sapn>Liked Videos</sapn>
        </li>
        <li className="sidebar-item">
          <Link to="/">
            <i className="fas fa-clock"></i>
          </Link>
          <sapn>Watch Later</sapn>
        </li>
        <li className="sidebar-item">
          <Link to="/">
            <i className="fas fa-history"></i>
          </Link>
          <sapn>History</sapn>
        </li>
      </ul>
    </aside>
  );
};

export { Sidebar };
