import React from "react";
import style1 from "./Pages.module.css";

const Pages = ({ contents }) => {
  const { component, text, weight, Size } = contents;

  const styles = {
    display: "flex",
    color: "white",
    gap: "15px",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "15px",
    textAlign: "center",
    width: "fit-content",
    height: "50px",
  };
  return (
    <div className={style1.hover} style={styles}>
      <div  className={style1.size}>{component}</div>
      <div style={{ fontWeight: weight, fontSize: Size }}>{text}</div>
    </div>
  );
};

export default Pages;
