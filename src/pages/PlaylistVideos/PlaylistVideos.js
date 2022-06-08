import { useParams } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { usePlaylist } from "../../contexts/PlaylistContext";
import "./playlist-videos.css";
import { HorizontalVideoCard } from "../../components/HorizontalVideoCard/HorizontalVideoCard";
const PlaylistVideos = () => {
  const { playlistId } = useParams();
  const {
    playlistState: { playlists },
  } = usePlaylist();

  const playlist = playlists.find((playlist) => playlist._id === playlistId);
  return (
    <section className="main-container">
      <Sidebar />
      <div className="playlist-wrapper">
        <div className="playlist-videos-container">
          <div className="about-playlist">
            <h2>{playlist.title}</h2>
            <h3>{playlist.videos.length} videos</h3>
          </div>
          <div className="playlist-videos-list">
            {playlist.videos.length
              ? playlist.videos.map((video) => (
                  <HorizontalVideoCard
                    video={video}
                    key={video._id}
                    playlist={playlist}
                  />
                ))
              : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export { PlaylistVideos };
