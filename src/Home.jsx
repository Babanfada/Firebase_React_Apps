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
import { Link, Outlet } from "react-router-dom";
import Terms from "./assets/Terms";
import Relevant from "./assets/Components/Relevant";
import BasicModal from "./assets/Components/BasicModal";

const Home = () => {
  const { contents, TweetDetails } = useContext(dataContext);
  const content1 = contents.slice(0, 3);

 

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
          {content1.map((content, index) => (
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
          {/* contents under the search bar component */}
          {/* <Outlet /> */}
          <First />
          <div
            style={
              {
                // padding: " 0 1vw",
                // border: "1px solid  rgba(255, 255, 255, 0.379)",
                // height: "auto",
              }
            }
          >
            <div style={{ padding: "2vh 0 0 1vw" }}>
              <Text2
                text={"Trends for you"}
                styles={{ fontWeight: "bolder", fontSize: "1.2rem" }}
              />
            </div>
            {/* {TweetDetails.map((TweetDetail, index) => {
              return <TweetDisplay key={index} TweetDetail={TweetDetail} />;
            })} */}
            {/* <div> */}
            {Trends.map((trend, index) => {
              return (
                <div
                  style={{ padding: "5px 1vw", cursor: "pointer" }}
                  className={styles.trend}
                  key={index}
                >
                  {
                    <div
                      style={{
                        // border: "1px solid red",
                        cursor: "pointer",
                        // ":hover": { backgroundColor: "red" },
                      }}
                    >
                      <Text
                        text={{
                          text1: trend.category,
                          text2: trend.trending,
                        }}
                        styles={{
                          fontWeight: "normal",
                          fontSize: "0.8rem",
                          color: "rgba(255, 255, 255, 0.379)",
                        }}
                      />
                      <Text2
                        styles={{
                          fontWeight: "bolder",
                          fontSize: "1rem",
                          margin: "0",
                        }}
                        text={trend.topic}
                      />
                      <p
                        style={{
                          fontWeight: "normal",
                          fontSize: "0.6rem",
                          color: "rgba(255, 255, 255, 0.379)",
                          //  border:"1px solid red",
                          marginBottom: "0",
                        }}
                      >
                        {trend.tweets}
                      </p>
                    </div>
                  }
                </div>
              );
            })}
            {/* </div> */}
          </div>
          <Link
            style={{ textDecoration: "none" }}
            // to="/Homes"
            to={`/Homes/${categoryData[0].id}`}
          >
            <Category categoryData={categoryData} index={0} />
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            // to="/Homes"
            to={`/Homes/${categoryData[1].id}`}
          >
            <Category categoryData={categoryData} index={1} />
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            // to="/Homes"
            to={`/Homes/${categoryData[2].id}`}
          >
            <Category categoryData={categoryData} index={2} />
          </Link>

          {/* <Category categoryData={categoryData} index={1} /> */}
          {/* <TrendNotice /> */}
          {TweetDetails.map((TweetDetail, index) => {
            return (
              <Link
                // to="Relevant"
                to={`/Homes/${TweetDetail.id}/Relevant/${TweetDetail.id}`}
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <TweetDisplay key={index} TweetDetail={TweetDetail} />
              </Link>
            );
          })}
        </div>

        {/* Authorization Section */}
        <div
          style={{
            padding: "1vw 3vw 0 2vw",
            position: "sticky",
            top: "0vh",
            height: "fit-content",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            // border:"1px solid red"
          }}
        >
          <Auth />

          {/* <Outlet /> */}

          <Terms />
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

export default Home;
