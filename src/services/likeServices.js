import axios from "axios";

const addLikedVideoService = ({ token, video }) => {
  return axios.post(
    "/api/user/likes",
    { video },
    { headers: { authorization: token } }
  );
};

const removeLikedVideoService = ({ token, video }) => {
  return axios.delete(`/api/user/likes/${video._id}`, {
    headers: { authorization: token },
  });
};

export { addLikedVideoService, removeLikedVideoService };
