import React, { useContext } from "react";
import { FiSettings } from "react-icons/fi";
import Pages from "./assets/Components/Pages";
import styles from "./Home.module.css";
import Search from "./assets/Components/Search";
import { dataContext } from "./App";
import Auth from "./assets/Auth";
import Dashboard from "./assets/Components/Dashboard";
const Home = () => {
  const { contents } = useContext(dataContext);
  return (
    <div style={{ height: "100vh", position: "relative" }}>
      {/* Top Section */}
      <div className={styles.Home}>
        <div
          style={{
            padding: "2vh 0 5vh 4vw",
          }}
        >
          {contents.map((content, index) => (
            <div
              key={index}
              style={{
                cursor: "pointer",
              }}
            >
              <Pages contents={content} />
            </div>
          ))}
        </div>
        <div
          style={{
            borderLeft: "1px solid  rgba(255, 255, 255, 0.379)",
            borderRight: "1px solid  rgba(255, 255, 255, 0.379)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "3vw",
              // border: "1px solid red",
              padding: " 0 1.5vw",
              
            }}
          >
            <Search />
            <div
              style={{
                color: "white",
                // border: "1px solid red",
                padding: "5px",
                width: "fit-content",
                textAlign: "center",
              }}
              className={styles.setting}
            >
              <FiSettings />
            </div>
          </div>
        </div>
        <div style={{ padding: "1vw 3vw 0 2vw" }}>
          <Auth />
        </div>
      </div>
      {/* Bottom Section */}
      <div
        style={{
          position: "fixed",
          bottom: "0",
          left: "0",
          // border: "1px solid red",
          width: "100%",
          backgroundColor: "#1D9BF0",
          height: "60px",
          paddingTop:"7px"
          
        }}
      >
        <Dashboard />
      </div>
    </div>
  );
};

export default Home;
