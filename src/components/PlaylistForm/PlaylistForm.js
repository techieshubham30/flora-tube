import "./playlist-form.css";
import { useState } from "react";
import { usePlaylist } from "../../contexts/PlaylistContext";
import { useAuth } from "../../contexts/AuthContext";
import {
  addNewPlaylistService,
  addVideoToPlaylistService,
} from "../../services/playlistService";

const PlaylistForm = ({ setPlaylistModalForm, video }) => {
  const [playlistTitle, setPlaylistTitle] = useState("");
  const {
    auth: { token },
  } = useAuth();
  const { playlistDispatch } = usePlaylist();
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
  const createPlaylistHandler = async ({ playlistTitle, video }) => {
    try {
      const {status, data} = await addNewPlaylistService({
        token,
        playlistTitle,
      });

      if (status === 201) {
        playlistDispatch({
          type: "PLAYLIST_UPDATE",
          payload: { playlists: data.playlists },
        });
      }

      if (video) {
        addVideoToPlaylistHandler({
          playlist: data.playlists[data.playlists.length - 1],
          video,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (playlistTitle) {
      setPlaylistModalForm(false);
      setPlaylistTitle("");
      createPlaylistHandler({ playlistTitle, video });
    }
  };

  return (
    <form className="playlist-form">
      <input
        type="text"
        className="playlist-input"
        placeholder="Enter playlist name..."
        value={playlistTitle}
        onChange={(e) => setPlaylistTitle(e.target.value)}
      />
      <div className="playlist-action">
        <button
          className="btn btn-primary"
          type="submit"
          onClick={onSubmitHandler}
        >
          Create
        </button>
      </div>
    </form>
  );
};

export { PlaylistForm };
