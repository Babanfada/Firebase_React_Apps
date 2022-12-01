import Button from "@mui/material/Button";
import React from "react";
import Text2 from "./Text2";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import Avatar from "@mui/material/Avatar";

const Category = ({ categoryData, index }) => {
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
        <Avatar sx={{ width: 24, height: 24, bgcolor: "#1D9BF0" }}>
          <ContactSupportIcon sx={{ fontSize: "small" }} />
        </Avatar>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          //   border: "1px solid red",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          <Text2
            text={categoryData[index].heading}
            styles={{
              fontWeight: "bolder",
              fontSize: "1rem",
              margin: "0",
            }}
          />
          <p style={{ color: "rgba(255, 255, 255, 0.379)", fontSize: "small" }}>
            {categoryData[index].sub}
          </p>
        </div>
        <div>
          <Button
            style={{
              backgroundColor: "white",
              color: "black",
              borderRadius: "15px",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
            variant={"outlined"}
            color={"secondary"}
            size={"small"}
          >
            Follow
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Category;
