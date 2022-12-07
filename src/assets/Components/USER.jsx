import React from "react";
import "./init";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { IoIosMore } from "react-icons/io";
import twenty3 from "../../images/emile.jpg";
import { dataContext } from "../../App";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import style1 from "./Pages.module.css";
import styles from "./TweetDisplay.module.css";
import Radium from "radium";
import { StyleRoot } from "radium";
import BasicModal from "./BasicModal";
const USER = () => {
  const { TweetDetails, handleOpen } = useContext(dataContext);
  const { id } = useParams();
  const user = TweetDetails.find((data) => {
    return data.id == id;
  });

  return (
    <div
      className={style1.user}
      style={{
        // border: "1px solid rgba(255, 255, 255, 0.379)",
        marign: "1vw",
        borderRadius: "30px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "space-evenly",
        gap: "5px",
        cursor: "pointer",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", gap: "5px" }}>
            <Avatar
              alt="Remy Sharp"
              src={twenty3}
            //   sx={{ width: 36, height: 36 }}
            />
            <div>
              <h3
                style={{
                  fontWeight: "bold",
                  fontSize: "medium",
                  margin: "0",
                }}
              >
                Ibrahim
              </h3>
              <small style={{ color: "rgba(255, 255, 255, 0.379)" }}>
                @muhammed
              </small>
              {/* <p
                style={{
                  fontSize: "small",
                }}
              >
                {user.bio}
              </p> */}
            </div>
          </div>
          <div>
            <div
              style={{
                color: "rgba(255, 255, 255, 0.379)",
                padding: "7px",
                borderRadius: "50%",
              }}
              title={"More"}
            //   className={styles.upload}
            >
              <IoIosMore />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Radium(USER);
