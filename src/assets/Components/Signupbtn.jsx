import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[500]),
  backgroundColor: grey[500],
  "&:hover": {
    backgroundColor: grey[700],
  },
}));

const Signupbtn = ({ info }) => {
  const { icon, text } = info;
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
          textTransform:"capitalize",
          color:"black"
        }}
        variant="contained"
        startIcon={icon}
      >
        {text}
      </ColorButton>
    </>
  );
};

export default Signupbtn;
