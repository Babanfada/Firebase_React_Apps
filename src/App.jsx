import { createContext, useState } from "react";
import { HiHashtag } from "react-icons/hi";
import { BsTwitter } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { CgMoreO } from "react-icons/cg";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import PersonIcon from "@mui/icons-material/Person";
import { FcGoogle } from "react-icons/fc";
import AppleIcon from "@mui/icons-material/Apple";
import {
  MdOutlineFileUpload,
  MdOutlineFeaturedPlayList,
  MdNotificationsNone,
} from "react-icons/md";
import { TbMessageCircle2 } from "react-icons/tb";
import { AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai";
import twenty3 from "./images/emile.jpg";
import twenty2 from "./images/horticulturist.jpg";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
// import video from "./images/**/*video.wmv";
import audio from "./images/audio.mp3";

import styles from "../src/assets/Components/TweetDisplay.module.css";

import Home from "./Home";
// import TrendNotice from "./assets/Components/TrendNotice";
import ScrollToTop from "./assets/Components/ScrollToTop";
import Homes from "./Homes";
import Relevant from "./assets/Components/Relevant";
import HomeActual from "./HomeActual";
import Settings from "./Pages/Settings";
import Notifications from "./Pages/Notifications";
import Messages from "./Pages/Messages";
import Books from "./Pages/Books";
import Lists from "./Pages/Lists";
import Profile from "./Pages/Profile";

import { provider } from "./Firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  // OAuthProvider,
} from "firebase/auth";
import { auth } from "./Firebase";
import useLocalStorage from "./assets/Components/useLocalStorage";
import BasicModal from "./assets/Components/BasicModal";
// import { useNavigate } from "react-router-dom";

export const dataContext = createContext("");
function App() {
  const [audio, setaudio] = useState(true);
  const [video, setvideo] = useState(true);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const navigate = useNavigate()

  const [currentUser, setcurrentUser] = useLocalStorage("currentUser", false);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to={"/"} />;
  };

  const signInWithGoogle = (navigate) => {
    // const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        setcurrentUser(true);
        console.log("signed in");

        navigate("/HomeActual");
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const handleSignOut = () => {
    // const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("signed out");
        setcurrentUser(false);

        //  navigate("/Home");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const openModal = () => {
    return (
      <div>
        {" "}
        <BasicModal />{" "}
      </div>
    );
  };

  // const signInWithApple = () => {
  //   // const auth = getAuth();
  //   signInWithPopup(auth, providerApple)
  //     .then((result) => {
  //       // The signed-in user info.
  //       const user = result.user;

  //       // Apple credential
  //       const credential = OAuthProvider.credentialFromResult(result);
  //       const accessToken = credential.accessToken;
  //       const idToken = credential.idToken;

  //       // ...
  //     })
  //     .catch((error) => {
  //       // Handle Errors here.
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // The email of the user's account used.
  //       const email = error.customData.email;
  //       // The credential that was used.
  //       const credential = OAuthProvider.credentialFromError(error);

  //       // ...
  //     });
  // };

  const contents = [
    {
      component: <BsTwitter />,
      text: "",
      weight: "",
      Size: "20px",
      link: "/",
    },
    {
      component: <HiHashtag />,
      text: "Explore",
      weight: "bold",
      Size: "20px",
      link: "/",
    },

    {
      component: <FiSettings />,
      text: "Settings",
      weight: "",
      Size: "20px",
      link: "Settings",
    },
    {
      component: <NotificationsOutlinedIcon />,
      text: "Notifications",
      weight: "",
      Size: "20px",
      link: "Notifications",
    },
    {
      component: <EmailOutlinedIcon />,
      text: "Messages",
      weight: "",
      Size: "20px",
      link: "Messages",
    },
    {
      component: <BookmarkBorderOutlinedIcon />,
      text: "Books",
      weight: "",
      Size: "20px",
      link: "BookMarks",
    },
    {
      component: <MdOutlineFeaturedPlayList />,
      text: "Lists",
      weight: "",
      Size: "20px",
      link: "Lists",
    },
    {
      component: <PersonIcon />,
      text: "Profile",
      weight: "",
      Size: "20px",
      link: "Profile",
    },
    {
      component: <CgMoreO />,
      text: "More",
      weight: "",
      Size: "20px",
      link: "More",
    },
  ];

  const infos = [
    {
      icon: <FcGoogle />,
      text: "Sign up with Google",
      auth: signInWithGoogle,
    },
    {
      icon: <AppleIcon />,
      text: "Sign up with Apple",
      auth: "",
    },
    {
      icon: "",
      text: "Sign up with Email and Password",
      auth: openModal,
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
      id: "0",
      USERNAME1: "Fabrizio Romano",
      username: "@fabrizio",
      image: twenty3,
      time: "16h",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet delectus!",
      bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet delectus!",
      media: [twenty2, twenty3],
      // video:video,
      audi: audio,
    },
    {
      id: "1",
      USERNAME1: "Ibrahim muhammed",
      username: "@tolani",
      image: twenty2,
      time: "20h",
      text: " dolor sit amet consectetur adipisicing elit. Eveniet delectus Lorem ipsum,!",
      bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet delectus!",
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
        handleOpen,
        handleClose,
        open,
        setOpen,
        signInWithGoogle,
        handleSignOut,
      }}
    >
      <Router>
        <ScrollToTop />
        <Routes>
          <Route index exact element={<Home />}>
            {/* <Route path="Relevant" element={<Relevant />} /> */}
          </Route>
          <Route path="/Homes/:id" element={<Homes />}>
            <Route path="Relevant/:id" element={<Relevant />} />
          </Route>
          <Route
            path="/HomeActual"
            element={
              <RequireAuth>
                <HomeActual />
              </RequireAuth>
            }
          >
            <Route path="Settings" exact element={<Settings />} />
            <Route path="Notifications" exact element={<Notifications />} />
            <Route path="Messages" exact element={<Messages />} />
            <Route path="Bookmarks" exact element={<Books />} />
            <Route path="Lists" exact element={<Lists />} />
            <Route path="Profile" exact element={<Profile />} />
          </Route>
        </Routes>
      </Router>
    </dataContext.Provider>
  );
}

export default App;
