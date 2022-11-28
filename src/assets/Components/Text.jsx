import React from "react";

const Text = ({ styles, text }) => {
  return (
    <div>
      <p
        style={{
          fontSize: styles.fontSize,
          fontWeight: styles.fontWeight,
          margin: "0",
          color: styles.color,
        }}
      >
        <span>{text.text1}</span> .{" "}
        <span style={{ fontWeight: styles.fontWeight }}>{text.text2}</span>
      </p>
    </div>
  );
};

export default Text;
