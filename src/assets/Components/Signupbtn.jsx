import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import { provider } from "../../Firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  // OAuthProvider,
} from "firebase/auth";
import { auth } from "../../Firebase";
import { useNavigate } from "react-router-dom";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[500]),
  backgroundColor: grey[500],
  "&:hover": {
    backgroundColor: grey[700],
  },
}));

 

const Signupbtn = ({ info }) => {
  const { icon, text, auth } = info;

  return (
    <>
      <ColorButton
        style={{
          fontSize: "12px",
          fontWeight: "bold",
          whiteSpace: "nowrap",
          textAlign: "left",
          borderRadius: "15px",
          // height:"30px"
          textTransform: "capitalize",
          color: "black",
        }}
        variant="contained"
        startIcon={icon}
        onClick={auth}
      >
        {text}
      </ColorButton>
    </>
  );
};

export default Signupbtn;
