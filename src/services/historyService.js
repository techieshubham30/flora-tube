import axios from "axios";

const addToHistoryService = ({ token, video }) => {
  return axios.post(
    "/api/user/history",
    { video },
    { headers: { authorization: token } }
  );
};

const removeFromHistoryService = ({ token, video }) => {
  return axios.delete(`/api/user/history/${video._id}`, {
    headers: { authorization: token },
  });
};

export { removeFromHistoryService, addToHistoryService };
