import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import twenty3 from "../../images/emile.jpg";
import { dataContext } from "../../App";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import BasicModal from "./BasicModal";
const Relevant = () => {
  const { TweetDetails, handleOpen } = useContext(dataContext);
  const { id } = useParams();
  const user = TweetDetails.find((data) => {
    return data.id == id;
  });

  return (
    <div
      style={{
        border: "1px solid rgba(255, 255, 255, 0.379)",
        marign: "1vw",
        borderRadius: "15px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "space-evenly",
        gap: "5px",
        cursor: "pointer",
      }}
    >
      <h5 style={{ fontWeight: "bold", fontSize: "large" }}>Relevant people</h5>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          <div style={{ display: "flex", gap: "5px" }}>
            <Avatar
              alt="Remy Sharp"
              src={user.image}
              sx={{ width: 56, height: 56 }}
            />
            <div>
              <h3
                style={{
                  fontWeight: "bold",
                  fontSize: "medium",
                  margin: "0",
                }}
              >
                {user.USERNAME1}
              </h3>
              <small style={{ color: "rgba(255, 255, 255, 0.379)" }}>
                {user.username}
              </small>
              <p
                style={{
                  fontSize: "small",
                }}
              >
                {user.bio}
              </p>
            </div>
          </div>
          <div>
            <Button>
              <BasicModal />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Relevant;
