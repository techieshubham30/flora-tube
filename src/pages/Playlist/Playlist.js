import { PlaylistCard } from "../../components/PlaylistCard/PlaylistCard";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { usePlaylist } from "../../contexts/PlaylistContext";
import "./playlist.css";

const Playlist = () => {
  const {
    playlistState: { playlists },
  } = usePlaylist();

  return (
    <section className="main-container">
      <Sidebar />
      <section className="playlist-container">
        {playlists.length ? (
          playlists.map((playlist) => (
            <PlaylistCard playlist={playlist} key={playlist._id} />
          ))
        ) : (
          <div className="empty-container">
            <p>Empty playlist</p>
          </div>
        )}
      </section>
    </section>
  );
};

export { Playlist };
