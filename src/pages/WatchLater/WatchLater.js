import { Sidebar } from "../../components/Sidebar/Sidebar";
import { useWatchLater } from "../../contexts/WatchLaterContext";
import { VideoCard } from "../../components/VideoCard/VideoCard";
import "./watch-later.css";

const WatchLater = () => {
  const {
    watchLaterState: { watchLaterVideos },
  } = useWatchLater();
  return (
    <section className="main-container">
      <Sidebar />
      <div className="watch-later-container">
        {watchLaterVideos.length >= 1 ? (
          watchLaterVideos.map((video) => (
            <VideoCard video={video} key={video._id} />
          ))
        ) : (
          <div className="empty-container">
            {" "}
            <p>Empty watch later</p>
          </div>
        )}
      </div>
    </section>
  );
};

export { WatchLater };
