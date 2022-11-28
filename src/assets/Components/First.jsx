import React from "react";
import HoneyComb from "../../images/honeycomb.png";
import Text from "./Text";
import Text2 from "./Text2";

const First = () => {
  return (
    <div style={{ position: "relative", cursor:"pointer" }}>
      <div style={{ borderBottom: "1px solid  rgba(255, 255, 255, 0.379)" }}>
        <img src={HoneyComb} alt={"drafts"} />
      </div>
      <div style={{ position: "absolute", bottom: "0", left: "1vw" }}>
        <Text
          text={{ text1: "Sport", text2: "Live" }}
          styles={{ fontWeight: "bold", fontSize: "0.9rem" }}
        />
        <Text2
          text={"2022 FIFA World Cup"}
          styles={{ fontWeight: "bolder", fontSize: "1.2rem" }}
        />
      </div>
    </div>
  );
};

export default First;
