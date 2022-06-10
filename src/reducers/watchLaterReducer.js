const watchLaterReducer = (state, action) => {
  switch (action.type) {
    case "GET_WATCHLATER":
      return { ...state, watchLaterVideos: action.payload.watchLaterVideos };
    default:
      return state;
  }
};

export { watchLaterReducer };
