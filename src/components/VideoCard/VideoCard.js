import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./video-card.css";
import { PlaylistModal } from "../PlaylistModal/PlaylistModal";
import { useAuth } from "../../contexts/AuthContext";
import { useWatchLater } from "../../contexts/WatchLaterContext";
import {
  addToWatchLaterService,
  removeFromWatchLaterService,
} from "../../services/watchLaterService";
const VideoCard = ({ video }) => {
  const navigate = useNavigate();
  const { _id, title, creator } = video;
  const [moreOptionModal, setMoreOptionModal] = useState(false);
  const [playlistModal, setPlaylistModal] = useState(false);
  const {
    auth: { isAuthenticated, token },
  } = useAuth();

  const {
    watchLaterState: { watchLaterVideos },
    dispatchWatchLater,
  } = useWatchLater();
  const videoInWatchLater = watchLaterVideos.find(
    (item) => item._id === video._id
  );

  const removeFromWatchLaterHandler = async ({ video }) => {
    try {
      const res = await removeFromWatchLaterService({
        token,
        video,
      });
      if (res.status === 200) {
        dispatchWatchLater({
          type: "GET_WATCHLATER",
          payload: { watchLaterVideos: res.data.watchlater },
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const addToWatchLaterHandler = async ({ video }) => {
    try {
      const res = await addToWatchLaterService({ token, video });
      if (res.status === 201) {
        dispatchWatchLater({
          type: "GET_WATCHLATER",
          payload: { watchLaterVideos: res.data.watchlater },
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="video-card-container">
      <Link to={`/videos/${_id}`}>
        <div className="card-image">
          <img
            src={`https://img.youtube.com/vi/${_id}/maxresdefault.jpg`}
            alt={title}
          />
        </div>
      </Link>
      <div className="card-content">
        <Link to={`/videos/${_id}`}>
          <div className="card-text">
            <div className="card-title">{title}</div>
            <div className="card-creator">{creator}</div>
          </div>
        </Link>

        <div
          className="more-option"
          onClick={() => setMoreOptionModal((show) => !show)}
        >
          <i className="fas fa-ellipsis-v "></i>
        </div>
      </div>
      <div>
        {moreOptionModal ? (
          <div className="more-option-modal">
            <span
              className="more-option-modal-item"
              onClick={() => {
                isAuthenticated
                  ? videoInWatchLater
                    ? removeFromWatchLaterHandler({ video })
                    : addToWatchLaterHandler({ video })
                  : navigate("/signin");
                setMoreOptionModal(false);
              }}
            >
              {" "}
              <i className="fas fa-clock more-option-modal-icon"></i>
              {isAuthenticated
                ? videoInWatchLater
                  ? "Remove from watch later"
                  : "Save to watch later"
                : "Save to watch later"}
            </span>
            <span
              className="more-option-modal-item"
              onClick={() => {
                isAuthenticated ? setPlaylistModal(true) : navigate("/signin");
                setMoreOptionModal(false);
              }}
            >
              {" "}
              <i className="fas fa-folder-plus  more-option-modal-icon"></i>{" "}
              Save to Playlist
            </span>
          </div>
        ) : null}

        {playlistModal ? (
          <PlaylistModal video={video} setPlaylistModal={setPlaylistModal} />
        ) : null}
      </div>
    </div>
  );
};

export { VideoCard };
