import "./horizontal-video-card.css";
import { Link} from "react-router-dom";
import { deleteVideoFromPlaylistService } from "../../services/playlistService";
import { useAuth } from "../../contexts/AuthContext";
import { usePlaylist } from "../../contexts/PlaylistContext";
const HorizontalVideoCard = ({ video, playlist }) => {
  const { _id, title, creator } = video;
  const {
    auth: { token },
  } = useAuth();

  const { playlistDispatch } = usePlaylist();

  const deleteVideoFromPlaylist = async ({ videoInPlaylist, playlist }) => {
    try {
      const res = await deleteVideoFromPlaylistService({
        token,
        playlist,
        videoInPlaylist,
      });

      if (res.status === 200) {
        playlistDispatch({
          type: "REMOVE_VIDEO_FROM_PLAYLIST",
          payload: { playlist: res.data.playlist },
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="horizontal-card">
      <Link to={`/videos/${_id}`}>
        <div className="card-image-container">
          <img
            src={`https://img.youtube.com/vi/${_id}/maxresdefault.jpg`}
            alt={title}
          />
        </div>
      </Link>
      <div className="card-text-container">
        <Link to={`/videos/${_id}`}>
          <div className="card-text">
            <div className="card-title">{title}</div>
            <div className="card-creator">{creator}</div>
          </div>
        </Link>
      </div>
      <div
        className="trash-btn"
        onClick={()=>deleteVideoFromPlaylist({ videoInPlaylist: video, playlist })}
      >
        <i class="fas fa-trash"></i>
      </div>
    </div>
  );
};

export { HorizontalVideoCard };
