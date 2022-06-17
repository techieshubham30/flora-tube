const historyReducer = (state, action) => {
  switch (action.type) {
    case "GET_HISTORY":
      return { ...state, history: action.payload.history };
    default:
      return state;
  }
};

export { historyReducer };
