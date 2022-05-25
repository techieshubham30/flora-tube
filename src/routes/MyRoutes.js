
import { Routes, Route} from "react-router-dom";
import { Explore } from "../pages/Explore/Explore";
import { Signin } from "../pages/Signin/Signin";
import { Signup } from "../pages/Signup/Signup";

const MyRoutes=()=>{
  return (
      <Routes>
          <Route path="/" element={<Explore/>}/>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
      </Routes>
  );
}

export {MyRoutes};