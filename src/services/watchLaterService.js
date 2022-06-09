import axios from "axios";

const addToWatchLaterService = ({ token, video }) => {
  return axios.post(
    "/api/user/watchlater",
    { video },
    {
      headers: { authorization: token },
    }
  );
};

const removeFromWatchLaterService = ({ token, video }) => {
  return axios.delete(`/api/user/watchlater/${video._id}`, {
    headers: { authorization: token },
  });
};

export { addToWatchLaterService, removeFromWatchLaterService };
