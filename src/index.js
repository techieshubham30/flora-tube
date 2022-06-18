import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { VideosProvider } from "./contexts/VideosContext";
import { BrowserRouter as Router } from "react-router-dom";
import { makeServer } from "./server";
import { AuthProvider } from "./contexts/AuthContext";
import { PlaylistProvider } from "./contexts/PlaylistContext";
import { WatchLaterProvider } from "./contexts/WatchLaterContext";
import { LikeProvider } from "./contexts/LikeContext";
import { HistoryProvider } from "./contexts/HistoryContext";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <VideosProvider>
          <PlaylistProvider>
            <WatchLaterProvider>
              <LikeProvider>
                <HistoryProvider>
                  <App />
                </HistoryProvider>
              </LikeProvider>
            </WatchLaterProvider>
          </PlaylistProvider>
        </VideosProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
