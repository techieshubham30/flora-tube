import axios from "axios";
import { createContext, useState, useContext, useEffect } from "react";

const VideosContext = createContext();

const VideosProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("api/videos");
        setVideos(data.videos);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);



  return (
    <VideosContext.Provider value={{ videos, setVideos }}>
      {children}
    </VideosContext.Provider>
  );
};

const useVideos = () => useContext(VideosContext)


export {VideosProvider, useVideos};
