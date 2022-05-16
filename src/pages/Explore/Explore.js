import "./explore.css";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { useVideos } from "../../contexts/VideosContext";
import { VideoCard } from "../../components/VideoCard/VideoCard";
const Explore = () => {
    const {videos} = useVideos();
  return (
    <div className="wrapper">
      <section className="main-container">
        <Sidebar />
        <div className="video-container">
            {
              videos.map(video=>(
                  <VideoCard video={video} key={video._id}/>
              ))
            }
        </div>
      </section>
    </div>
  );
};

export { Explore };
