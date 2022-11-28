import React from "react";

const Text2 = ({ styles, text }) => {
  return (
    <div>
      <h2
        style={{
          fontWeight: styles.fontWeight,
          fontSize: styles.fontSize,
          margin: styles.margin,
        }}
      >
        {text}
      </h2>
    </div>
  );
};

export default Text2;
