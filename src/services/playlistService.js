import axios from "axios";

const getPlaylistsService = (token) => {
  return axios.get("/api/user/playlists", {
    headers: { authorization: token },
  });
};

const addVideoToPlaylistService = ({ token, playlist, video }) => {
  return axios.post(
    `/api/user/playlists/${playlist._id}`,
    { video },
    {
      headers: { authorization: token },
    }
  );
};

const deletePlaylistService = ({ token, playlistId }) => {
  return axios.delete(`/api/user/playlists/${playlistId}`, {
    headers: { authorization: token },
  });
};

const deleteVideoFromPlaylistService = ({
  token,
  videoInPlaylist,
  playlist,
}) => {
  return axios.delete(
    `/api/user/playlists/${playlist._id}/${videoInPlaylist._id}`,
    {
      headers: { authorization: token },
    }
  );
};

const addNewPlaylistService = ({ token, playlistTitle }) => {
  return axios.post(
    "/api/user/playlists",
    { playlist: { title: playlistTitle } },
    {
      headers: { authorization: token },
    }
  );
};

export {
  getPlaylistsService,
  addVideoToPlaylistService,
  addNewPlaylistService,
  deletePlaylistService,
  deleteVideoFromPlaylistService,
};
