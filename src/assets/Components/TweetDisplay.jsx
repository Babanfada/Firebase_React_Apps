import React from "react";
//import { Link } from "react-router-dom";
import styles from "./TweetDisplay.module.css";
import Avatar from "@mui/material/Avatar";
// import { FcApproval } from "react-icons/fc";
import { IoIosMore } from "react-icons/io";
import { dataContext } from "../../App";
import { useContext } from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import MediaDisplay from "../Components/MediaDisplay";
const TweetDisplay = ({ TweetDetail }) => {
  const { icons } = useContext(dataContext);
  return (
    <div
      style={{
        borderTop: "1px solid rgba(255, 255, 255, 0.379)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.379)",
        display: "flex",
        padding: "1vw 1vw 0vw 1vw",
        gap: "10px",
        cursor: "pointer",
      }}
    >
      <div>
        <Avatar
          alt="Remy Sharp"
          src={TweetDetail.image}
          sx={{ width: 56, height: 56 }}
        />
      </div>

      <div
        style={
          {
            //   border: "1px solid blue",
            //   flexBasis: "1",
          }
        }
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            // border: "1px solid blue",
            gap: "3px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "15px",
                fontWeight: "bold",
                gap: "2px",
                // border: "1px solid red",
              }}
            >
              <a
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
                href="#"
              >
                <span className={styles.name}>{TweetDetail.USERNAME1} </span>
              </a>
              <span>
                <VerifiedIcon sx={{ color: "#1D9BF0", fontSize: "small" }} />
              </span>
            </div>
            <div
              style={{
                fontSize: "12px",
                // border: "1px solid red",
                color: "rgba(255, 255, 255, 0.379)",
              }}
            >
              {TweetDetail.username}
            </div>
            <div
              style={{
                fontSize: "12px",
                // border: "1px solid red",
                color: "rgba(255, 255, 255, 0.379)",
              }}
              className={styles.name}
            >
              {TweetDetail.time}
            </div>
          </div>
          <div
            style={{
              color: "rgba(255, 255, 255, 0.379)",
              padding: "7px",
              borderRadius: "50%",
            }}
            title={"More"}
            className={styles.upload}
          >
            <IoIosMore />
          </div>
          {/* <span>15h</span> */}
        </div>
        <MediaDisplay TweetDetail={TweetDetail} />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            gap: "6vw",
            // border: "1px solid red",
            padding: "2px 0 ",
          }}
        >
          {icons.map((icon) => (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                color: "rgba(255, 255, 255, 0.379)",
                // border: "3px solid red",
              }}
              title={icon.title}
            >
              <span
                className={icon.styling}
                style={{
                  //   border: "1px solid blue",
                  padding: "7px",
                  borderRadius: "50%",
                }}
              >
                {icon.icon}
              </span>
              <span className={icon.styleText} style={{ fontSize: "small" }}>
                {icon.number}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TweetDisplay;
