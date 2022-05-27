import { Link } from "react-router-dom";
import "./video-card.css";
const VideoCard = ({ video }) => {
  const { _id, title, creator } = video;
  return (
    <div className="video-card-container">
      <Link to={`/videos/${_id}`}>
        <div className="card-image">
          <img
            src={`https://img.youtube.com/vi/${_id}/maxresdefault.jpg`}
            alt={title}
          />
        </div>
        <div className="card-content">
          <div className="card-text">
            <div className="card-title">{title}</div>
            <div className="card-creator">{creator}</div>
          </div>

          <div className="more-option">
            <i className="fas fa-ellipsis-v "></i>
          </div>
        </div>
      </Link>
    </div>
  );
};

export { VideoCard };
