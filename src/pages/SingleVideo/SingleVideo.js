import "./single-video.css";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { useVideos } from "../../contexts/VideosContext";
import { getVideoLink } from "../../utils/getVideoLink";
const SingleVideo = () => {
  const { videoId } = useParams();
  const { videos } = useVideos();
  const video = videos.find((v) => v._id === videoId);
  return (
    <section className="main-container">
      <Sidebar />
      <div className="single-video">
        <div className="single-video-container">
          <ReactPlayer url={getVideoLink(videoId)} width="100%" height="100%" />
          <div className="video-details">
            <div className="video-title">{video.title}</div>
            <div className="video-wrapper">
              <div className="video-count">
                <div className="video-views">{video.views} views</div>
                <div className="video-release-date">{video.releaseDate}</div>
              </div>
              <div className="video-buttons">
                <i class="fas fa-thumbs-up"></i>

                <i class="fas fa-clock"></i>

                <i class="fas fa-folder-plus"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { SingleVideo };
