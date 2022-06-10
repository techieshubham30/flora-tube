const likeReducer = (state, action) => {
  switch (action.type) {
    case "GET_LIKE":
      return { ...state, likedVideos: action.payload.likedVideos };
    default:
      state;
  }
};

export { likeReducer };
