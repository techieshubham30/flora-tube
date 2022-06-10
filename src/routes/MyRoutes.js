import { Routes, Route } from "react-router-dom";
import { Explore } from "../pages/Explore/Explore";
import { Signin } from "../pages/Signin/Signin";
import { Signup } from "../pages/Signup/Signup";
import { PrivateRoutes } from "./PrivateRoutes";
import mockmanEs from "mockman-js";
import { SingleVideo } from "../pages/SingleVideo/SingleVideo";
import { Playlist } from "../pages/Playlist/Playlist";
import { PlaylistVideos } from "../pages/PlaylistVideos/PlaylistVideos";
import { WatchLater } from "../pages/WatchLater/WatchLater";
import { LikeVideos } from "../pages/LikedVideos/LikeVideos";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Explore />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/videos/:videoId" element={<SingleVideo />} />
      <Route
        path="watchlater"
        element={
          <PrivateRoutes>
            <WatchLater />
          </PrivateRoutes>
        }
      />
      <Route
        path="likes"
        element={
          <PrivateRoutes>
            <LikeVideos />
          </PrivateRoutes>
        }
      />
      <Route
        path="/playlists"
        element={
          <PrivateRoutes>
            <Playlist />
          </PrivateRoutes>
        }
      />

      <Route
        path="/playlists/:playlistId"
        element={
          <PrivateRoutes>
            <PlaylistVideos />
          </PrivateRoutes>
        }
      />
      <Route path="/mockman" element={mockmanEs} />
    </Routes>
  );
};

export { MyRoutes };
