import React from "react";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { MdOutlineFileUpload } from "react-icons/md";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import styles from "./TweetDisplay.module.css";
import { Link } from "react-router-dom";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[500]),
  backgroundColor: grey[100],
  "&:hover": {
    backgroundColor: grey[700],
  },
}));

const TrendNoticeComp = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1vw",
        backgroundColor: "black",
        alignItems: "center",
        // border: "1px solid red",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "2vw",
        }}
      >
        <div
          className={styles.upload}
          style={{ padding: "3px", borderRadius: "50%" }}
          title="Back"
        >
          <Link to="/Home">
            <HiOutlineArrowSmLeft />
          </Link>
        </div>

        <h4 style={{ fontWeight: "bold", fontSize: "20px" }}>Football</h4>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "1vh" }}>
        <ColorButton
          style={{
            fontSize: "12px",
            fontWeight: "bold",
            whiteSpace: "nowrap",
            textAlign: "left",
            borderRadius: "15px",
            // height:"30px"
            textTransform: "capitalize",
            width: "10vw",
          }}
          variant="contained"
        >
          Follow Topic
        </ColorButton>

        <div
          className={styles.upload}
          style={{ padding: "3px", borderRadius: "50%" }}
          title="Share"
        >
          <MdOutlineFileUpload />
        </div>
      </div>
    </div>
  );
};

export default TrendNoticeComp;
