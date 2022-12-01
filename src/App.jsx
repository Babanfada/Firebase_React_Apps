import { createContext, useState } from "react";
import { HiHashtag } from "react-icons/hi";
import { BsTwitter } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import AppleIcon from "@mui/icons-material/Apple";
import { MdOutlineFileUpload } from "react-icons/md";
import { TbMessageCircle2 } from "react-icons/tb";
import { AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai";
import twenty3 from "./images/emile.jpg";
import twenty2 from "./images/horticulturist.jpg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import video from "./images/**/*video.wmv";
import audio from "./images/audio.mp3";

import styles from "../src/assets/Components/TweetDisplay.module.css";

import Home from "./Home";
// import TrendNotice from "./assets/Components/TrendNotice";
import ScrollToTop from "./assets/Components/ScrollToTop";
import Homes from "./Homes";

export const dataContext = createContext(null);
function App() {
  const [audio, setaudio] = useState(true);
  const [video, setvideo] = useState(true);
  const contents = [
    {
      component: <BsTwitter />,
      text: "",
      weight: "",
      Size: "20px",
    },
    {
      component: <HiHashtag />,
      text: "Explore",
      weight: "bold",
      Size: "20px",
    },
    {
      component: <FiSettings />,
      text: "Settings",
      weight: "",
      Size: "20px",
    },
  ];
  const infos = [
    {
      icon: <FcGoogle />,
      text: "Sign up with Google",
    },
    {
      icon: <AppleIcon />,
      text: "Sign up with Apple",
    },
    {
      icon: "",
      text: "Sign up with Email and Password",
    },
  ];

  const icons = [
    {
      icon: <TbMessageCircle2 />,
      number: "2,203",
      styling: styles.comment,
      styleText: styles.commentT,
      title: "Reply",
    },
    {
      icon: <AiOutlineRetweet />,
      number: "17K",
      styling: styles.retweet,
      styleText: styles.retweetT,
      title: "Retweet",
    },
    {
      icon: <AiOutlineHeart />,
      number: "10K",
      styling: styles.like,
      styleText: styles.likeT,
      title: "Like",
    },
    {
      icon: <MdOutlineFileUpload />,
      number: "",
      styling: styles.upload,
      styleText: styles.uploadT,
      title: "Share",
    },
  ];
  const TweetDetails = [
    {
      USERNAME1: "Fabrizio Romano",
      username: "@fabrizio",
      image: twenty3,
      time: "16h",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet delectus!",
      media: [twenty2, twenty3],
      // video:video,
      audi: audio,
    },
    {
      USERNAME1: "Fabrizio Romano",
      username: "@fabrizio",
      image: twenty2,
      time: "16h",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet delectus!",
      media: [twenty2, twenty3],
      // video:video,
      audi: audio,
    },
  ];

  const [typing, settyping] = useState(false);

  return (
    <dataContext.Provider
      value={{
        contents,
        infos,
        typing,
        settyping,
        icons,
        TweetDetails,
        video,
        audio,
        setvideo,
        setaudio,
      }}
    >
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/Home" exact element={<Home />} />
          <Route path="/Homes" element={<Homes />} />
        </Routes>
      </Router>
    </dataContext.Provider>
  );
}

export default App;
