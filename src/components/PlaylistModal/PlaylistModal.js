import "./playlist-modal.css";
import { useState } from "react";
import { PlaylistForm } from "../PlaylistForm/PlaylistForm";
import { usePlaylist } from "../../contexts/PlaylistContext";
import {
  addVideoToPlaylistService,
  deleteVideoFromPlaylistService,
} from "../../services/playlistService";
import { useAuth } from "../../contexts/AuthContext";
const PlaylistModal = ({ video, setPlaylistModal }) => {
  const [showPlaylistModalForm, setPlaylistModalForm] = useState(false);
  const {
    playlistState: { playlists },
    playlistDispatch,
  } = usePlaylist();
  const {
    auth: { token },
  } = useAuth();

  const addVideoToPlaylistHandler = async ({ playlist, video }) => {
    try {
      const { status, data } = await addVideoToPlaylistService({
        token,
        playlist,
        video,
      });

      if (status === 201) {
        playlistDispatch({
          type: "ADD_VIDEO_TO_PLAYLIST",
          payload: { playlist: data.playlist },
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const deleteVideoFromPlayListHandler = async ({
    videoInPlaylist,
    playlist,
  }) => {
    try {
      const { data, status } = await deleteVideoFromPlaylistService({
        token,
        playlist,
        videoInPlaylist,
      });

      if (status === 200) {
        playlistDispatch({
          type: "REMOVE_VIDEO_FROM_PLAYLIST",
          payload: { playlist: data.playlist },
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="modal-container">
      <div className="text-only-card shadow-box">
        <div className="card-text-container">
          <div className="card-header">
            <h3>Save to…</h3>
            <i
              className="fas fa-times"
              onClick={() => setPlaylistModal(false)}
            ></i>
          </div>

          {playlists.map((playlist) => {
            const videoInPlaylist = playlist.videos.find(
              (playlistVideo) => playlistVideo._id === video._id
            );

            return (
              <label key={playlist._id} className="playlist-options">
                <input
                  type="checkbox"
                  checked={videoInPlaylist ? true : false}
                  onChange={() =>
                    videoInPlaylist
                      ? deleteVideoFromPlayListHandler({
                          videoInPlaylist,
                          playlist,
                        })
                      : addVideoToPlaylistHandler({ playlist, video })
                  }
                />
                {playlist.title}
              </label>
            );
          })}

          <div className="card-action-container">
            {!showPlaylistModalForm ? (
              <button
                type="button"
                className="create-playlist-btn"
                onClick={() => setPlaylistModalForm(true)}
              >
                <i className="fas fa-plus"></i> Create New Playlist
              </button>
            ) : null}

            {showPlaylistModalForm ? (
              <PlaylistForm
                setPlaylistModalForm={setPlaylistModalForm}
                video={video}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export { PlaylistModal };
