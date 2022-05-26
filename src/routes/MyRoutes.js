import { Routes, Route } from "react-router-dom";
import { Explore } from "../pages/Explore/Explore";
import { Signin } from "../pages/Signin/Signin";
import { Signup } from "../pages/Signup/Signup";
import mockmanEs from "mockman-js";
import { SingleVideo } from "../pages/SingleVideo/SingleVideo";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Explore />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/videos/:videoId" element={<SingleVideo />} />
      <Route path="/mockman" element={mockmanEs} />
    </Routes>
  );
};

export { MyRoutes };
