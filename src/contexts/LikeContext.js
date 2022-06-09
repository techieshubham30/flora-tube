import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";
import { likeReducer } from "../reducers/likeReducer";
import { useAuth } from "./AuthContext";

const LikeContext = createContext();

const LikeProvider = ({ children }) => {
  const {
    auth: { isAuthenticated, token },
  } = useAuth();

  const [likeState, dispatchLike] = useReducer(likeReducer, {
    likedVideos: [],
  });

  useEffect(() => {
    if (isAuthenticated) {
      async () => {
        try {
          const res = await axios.get("/api/user/likes", {
            headers: {
              authorization: token,
            },
          });

          if (res.status === 200) {
            dispatchLike({
              type: "GET_LIKE",
              payload: { likedVideos: res.data.likes },
            });
          }
        } catch (e) {
          console.log(e);
        }
      };
    }
  }, [token]);
  return (
    <LikeContext.Provider value={{ likeState, dispatchLike }}>
      {children}
    </LikeContext.Provider>
  );
};

const useLike = () => useContext(LikeContext);

export { LikeProvider, useLike };
