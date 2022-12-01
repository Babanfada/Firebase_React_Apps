import React from "react";
// import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    neutral: {
      // main: "white",
       main: "#64748B",
      contrastText: "#fff",
    },
  },
});

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[500]),
  backgroundColor: grey[100],
  "&:hover": {
    backgroundColor: grey[700],
  },
}));
const TrendNotice = () => {
  return (
    <div style={{ padding: "1vw" }}>
      <h1
        style={{
          fontSize: "30px",
          fontWeight: "bold",
          // border: "1px solid blue",
          margin: "0",
        }}
      >
        Sport
      </h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <small
          style={{
            // border: "1px solid blue",
            fontSize: "12px",
            color: "rgba(255, 255, 255, 0.379)",
          }}
        >
          All about sport
        </small>
        <small
          style={{
            // border: "1px solid blue",
            fontSize: "12px",
            color: "rgba(255, 255, 255, 0.379)",
          }}
        >
          Tweets about the Topics you follow show up in your Home Timeline
        </small>
      </div>

      <div>
        <Stack style={{ marginTop:"2vh" }} spacing={5} direction="row">
          <ThemeProvider theme={theme}>
            <Button
              style={{
                fontSize: "12px",
                fontWeight: "bold",
                whiteSpace: "nowrap",
                textAlign: "left",
                borderRadius: "15px",
                //  height:"30px",
                textTransform: "capitalize",
                width: "20vw",
              }}
              color="neutral"
              variant="outlined"
            >
              Not interested
            </Button>
          </ThemeProvider>
          <ColorButton
            style={{
              fontSize: "12px",
              fontWeight: "bold",
              whiteSpace: "nowrap",
              textAlign: "left",
              borderRadius: "15px",
              // height:"30px"
              textTransform: "capitalize",
              width: "20vw",
            }}
            variant="contained"
          >
            Follow
          </ColorButton>
        </Stack>
      </div>
    </div>
  );
};

export default TrendNotice;
