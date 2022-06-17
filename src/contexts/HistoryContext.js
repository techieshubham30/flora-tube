import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";
import { useAuth } from "./AuthContext";
import { historyReducer } from "../reducers/historyReducer";

const HistoryContext = createContext();
const HistoryProvider = ({ children }) => {
  const [historyState, dispatchHistory] = useReducer(historyReducer, {
    history: [],
  });
  const {
    auth: { isAuthenticated, token },
  } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      async () => {
        try {
          const res = await axios.get("/api/user/history", {
            headers: { authorization: token },
          });
          if (res.status === 200) {
            dispatchHistory({
              type: "GET_HISTORY",
              payload: { history: data.history },
            });
          }
        } catch (e) {
          console.log(e);
        }
      };
    }
  },[token]);

  return (
    <HistoryContext.Provider value={{ historyState, dispatchHistory }}>
      {children}
    </HistoryContext.Provider>
  );
};

const useHistory =()=> useContext(HistoryContext);

export { HistoryProvider, useHistory };
