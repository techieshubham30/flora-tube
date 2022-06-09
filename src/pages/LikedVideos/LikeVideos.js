import { Sidebar } from "../../components/Sidebar/Sidebar";
import { VideoCard } from "../../components/VideoCard/VideoCard";
import { useLike } from "../../contexts/LikeContext";
import "./liked-videos.css";
const LikeVideos = () => {
  const {
    likeState: { likedVideos },
  } = useLike();
  return (
    <section className="main-container">
      <Sidebar />
      <div className="liked-video-container">
        {likedVideos.length >= 1 ? (
          likedVideos.map((video) => (
            <VideoCard video={video} key={video._id} />
          ))
        ) : (
          <div className="empty-container">
            {" "}
            <p>Empty liked videos list</p>
          </div>
        )}
      </div>
    </section>
  );
};

export { LikeVideos };
