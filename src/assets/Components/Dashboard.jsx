import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Dashboard = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: "23vw",
        paddingRight: "5vw",
      }}
    >
      <div style={{ lineHeight: "15px" }}>
        <h5
          style={{
            fontSize: "21px",
            fontweight: "bold",
            // border: "1px solid red",
            margin: "0",
          }}
        >
          Don't miss what's happening
        </h5>
        <small
          style={{ fontweight: "bold",  margin: "0" }}
        >
          People on Twitter are the first to know.
        </small>
      </div>
      <div
        style={{
          //   border: "1px solid red",
          width: "30vw",
          display: "flex",
          justifyContent: "flex-end",
          gap: "1.5vw",
        }}
      >
        <Button
          style={{
            color: "white",
            borderRadius: "15px",
            borderColor: "white",
            fontWeight: "bold",
          }}
          variant="outlined"
          size="small"
        >
          Login
        </Button>
        <Button
          style={{
            backgroundColor: "white",
            color: "black",
            borderRadius: "15px",
            fontWeight: "bold",
          }}
          variant="contained"
          size="small"
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
