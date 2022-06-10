import axios from "axios";
import { createContext,useContext, useEffect, useReducer } from "react";
import { useAuth } from "./AuthContext";
import { watchLaterReducer } from "../reducers/watchLaterReducer";

const WatchLaterContext = createContext();

const WatchLaterProvider = ({ children }) => {
  const [watchLaterState, dispatchWatchLater] = useReducer(watchLaterReducer, {
    watchLaterVideos: [],
  });

  const {
    auth: { isAuthenticated, token },
  } = useAuth();
  useEffect(() => {
    if (isAuthenticated) {
      async () => {
        try {
          const res = await axios.get("/api/user/watchlater", {
            headers: {
              authorization: token,
            },
          });

          if (res.status === 200) {
            dispatchWatchLater({
              type: "GET_WATCHLATER",
              payload: { watchLaterVideos: res.data.watchlater },
            });
          }
        } catch (e) {
          console.log(e);
        }
      };
    }
  }, [token]);
  return (
    <WatchLaterContext.Provider value={{watchLaterState, dispatchWatchLater }}>
      {children}
    </WatchLaterContext.Provider>
  );
};

const useWatchLater = () => useContext(WatchLaterContext);

export { WatchLaterProvider, useWatchLater };
