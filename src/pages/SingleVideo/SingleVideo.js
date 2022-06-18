import "./single-video.css";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import ReactPlayer from "react-player";
import { useNavigate, useParams } from "react-router-dom";
import { useVideos } from "../../contexts/VideosContext";
import { getVideoLink } from "../../utils/getVideoLink";
import { useWatchLater } from "../../contexts/WatchLaterContext";
import {
  removeFromWatchLaterService,
  addToWatchLaterService,
} from "../../services/watchLaterService";
import { useAuth } from "../../contexts/AuthContext";
import { useLike } from "../../contexts/LikeContext";
import { useHistory } from "../../contexts/HistoryContext";
import { useEffect, useState } from "react";
import { PlaylistModal } from "../../components/PlaylistModal/PlaylistModal";
import {
  addLikedVideoService,
  removeLikedVideoService,
} from "../../services/likeServices";
import { addToHistoryService } from "../../services/historyService";

const SingleVideo = () => {
  const { videoId } = useParams();
  const { videos } = useVideos();
  const navigate = useNavigate();
  const [playlistModal, setPlaylistModal] = useState(false);

  const video = videos.find((v) => v._id === videoId);
  const {
    watchLaterState: { watchLaterVideos },
    dispatchWatchLater,
  } = useWatchLater();

  const {
    likeState: { likedVideos },
    dispatchLike,
  } = useLike();

  const videoInWatchLater = watchLaterVideos.find(
    (item) => item._id === video._id
  );

  const videoInLike = likedVideos.find((v) => v._id === video._id);

  const {
    auth: { isAuthenticated, token },
  } = useAuth();

  const {
    historyState: { history },
    dispatchHistory,
  } = useHistory();

  const videoInHistory = history.find((item) => item._id === video._id);

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

  const removeVideoFromLikeHandler = async ({ video }) => {
    try {
      const res = await removeLikedVideoService({ token, video });
      if (res.status === 200) {
        dispatchLike({
          type: "GET_LIKE",
          payload: { likedVideos: res.data.likes },
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const addVideoToLikeHandler = async ({ video }) => {
    try {
      const res = await addLikedVideoService({ token, video });
      if (res.status === 201) {
        dispatchLike({
          type: "GET_LIKE",
          payload: { likedVideos: res.data.likes },
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const addVideoToHistory = async ({ video }) => {
    if (video) {
      try {
        const res = await addToHistoryService({ token, video });
        if (res.status === 201) {
          dispatchHistory({
            type: "GET_HISTORY",
            payload: { history: res.data.history },
          });
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      if (!videoInHistory) {
        addVideoToHistory({ video: video });
      }
    }
  }, []);

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
                <i
                  class={`fas fa-thumbs-up ${
                    videoInLike ? "clicked" : "gray-color"
                  }`}
                  onClick={() =>
                    isAuthenticated
                      ? videoInLike
                        ? removeVideoFromLikeHandler({ video: video })
                        : addVideoToLikeHandler({ video: video })
                      : navigate("/signin")
                  }
                ></i>

                <i
                  className={`fas fa-clock ${
                    videoInWatchLater ? "clicked" : "gray-color"
                  }`}
                  onClick={() =>
                    isAuthenticated
                      ? videoInWatchLater
                        ? removeFromWatchLaterHandler({ video: video })
                        : addToWatchLaterHandler({ video: video })
                      : null
                  }
                ></i>

                <i
                  className="fas fa-folder-plus gray-color"
                  onClick={() =>
                    isAuthenticated
                      ? setPlaylistModal(true)
                      : navigate("/signin")
                  }
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      {playlistModal ? (
        <PlaylistModal video={video} setPlaylistModal={setPlaylistModal} />
      ) : null}
    </section>
  );
};

export { SingleVideo };
