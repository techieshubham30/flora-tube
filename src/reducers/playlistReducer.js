const playlistReducer = (state, { type, payload }) => {
  switch (type) {
    case "PLAYLIST_UPDATE":
      return { ...state, playlists: payload.playlists };

    case "ADD_VIDEO_TO_PLAYLIST":
      return {
        ...state,
        playlists: state.playlists.map((item) =>
          item._id === payload.playlist._id ? payload.playlist : item
        ),
      };

    case "REMOVE_VIDEO_FROM_PLAYLIST":
      return {
        ...state,
        playlists: state.playlists.map((item) =>
          item._id === payload.playlist._id ? payload.playlist : item
        ),
      };

    default:
      return state;
  }
};

export { playlistReducer };
