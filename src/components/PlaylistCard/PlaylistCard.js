import "./playlist-card.css";
import { getVideoImage } from "../../utils/getVideoImage";
import { deletePlaylistService } from "../../services/playlistService";
import { useAuth } from "../../contexts/AuthContext";
import { usePlaylist } from "../../contexts/PlaylistContext";
import { Link } from "react-router-dom";
const PlaylistCard = ({ playlist }) => {
  const { title, _id, videos } = playlist;
  const { playlistDispatch } = usePlaylist();
  const {
    auth: { token },
  } = useAuth();

  const deletePlaylistHandler = async (playlistId) => {
    try {
      const res = await deletePlaylistService({
        token,
        playlistId,
      });

      if (res.status === 200) {
        playlistDispatch({
          type: "PLAYLIST_UPDATE",
          payload: { playlists: res.data.playlists },
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="playlist-card-container">
      <Link to={`/playlists/${_id}`}>
        <img
          src={videos[0] ? getVideoImage(videos[0]._id) : "/assets/play.svg"}
          alt={title}
        />
        <div className="playlist-card-overlay">{videos.length}</div>
      </Link>
      <div className="about-playlist-card">
        <div className="playlist-title">{title}</div>

        <div
          className="playlist-action"
          onClick={() => deletePlaylistHandler(_id)}
        >
          <i className="fas fa-trash"></i>
        </div>
      </div>
    </div>
  );
};

export { PlaylistCard };
