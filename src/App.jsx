import { createContext, useState } from "react";
import { HiHashtag } from "react-icons/hi";
import { BsTwitter } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import AppleIcon from "@mui/icons-material/Apple";
//import reactLogo from './assets/react.svg'
//import "./App.css";
import Home from "./Home";

export const dataContext = createContext(null);
function App() {
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
  const [typing, settyping] = useState(false);
  return (
    <dataContext.Provider value={{ contents, infos, typing, settyping }}>
      <div
        // onClick={() => settyping(false)}
        style={{
          color: "white",
          backgroundColor: "black",
          // border: "1px solid red",
          height: "100vh",
        }}
      >
        <Home />
        
      </div>
    </dataContext.Provider>
  );
}

export default App;
