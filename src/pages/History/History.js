import { Sidebar } from "../../components/Sidebar/Sidebar";
import { VideoCard } from "../../components/VideoCard/VideoCard";
import { useHistory } from "../../contexts/HistoryContext";
import "./history.css";

const History = () => {
  const {
    historyState: { history },
  } = useHistory();
  return (
    <section className="main-container">
      <Sidebar />
      <div className="history-video-container">
        {history.length >= 1 ? (
          history.map((video) => <VideoCard video={video} key={video._id} />)
        ) : (
          <div className="empty-container">
            <p>History Empty</p>
          </div>
        )}
      </div>
    </section>
  );
};

export { History };
