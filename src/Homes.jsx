import React, { useContext } from "react";
// import Radium from "radium";
import { FiSettings } from "react-icons/fi";
import Pages from "./assets/Components/Pages";
import styles from "./Home.module.css";
import Search from "./assets/Components/Search";
import { dataContext } from "./App";
import Auth from "./assets/Auth";
import Dashboard from "./assets/Components/Dashboard";
import First from "./assets/Components/First";
import Text2 from "../src/assets/Components/Text2";
import Text from "../src/assets/Components/Text";
import { Trends } from "./assets/Components/Data";
import TweetDisplay from "./assets/Components/TweetDisplay";
import Category from "./assets/Components/Category";
import { categoryData } from "./assets/Components/Data";
import TrendNotice from "./assets/Components/TrendNotice";
import TrendNoticeComp from "./assets/Components/TrendNoticeComp";
// import { Link, Outlet } from "react-router-dom";
const Homes = () => {
  const { contents, TweetDetails } = useContext(dataContext);
  return (
    <div
      style={{
        height: "auto",
        position: "relative",
        color: "white",
        backgroundColor: "black",
      }}
    >
      {/* Top Section */}
      <div className={styles.Home} style={{ position: "relative" }}>
        <div
          style={{
            padding: "2vh 0 5vh 4vw",
            // border: "1px solid red",
            height: "fit-content",
            position: "sticky",
            top: "0vh",
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
          <TrendNoticeComp />
          <TrendNotice />

          {TweetDetails.map((TweetDetail, index) => {
            return <TweetDisplay key={index} TweetDetail={TweetDetail} />;
          })}
        </div>

        {/* Authorization Section */}

        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "3vw",
              //   border: "1px solid red",
              padding: " 0 1.5vw",
              height: "fit-content",
              position: "sticky",
              top: "0vh",
              zIndex: "1",
              backgroundColor: "black",
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
          <div
            style={{
              padding: "1vw 3vw 0 2vw",
              position: "sticky",
              top: "0vh",
              height: "fit-content",
              // border:"1px solid red"
            }}
          >
            <Auth />
          </div>
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
          paddingTop: "7px",
        }}
      >
        <Dashboard />
      </div>
    </div>
  );
};

export default Homes;
