import React from 'react'


const styles1 = {
  fontSize: "12px",
  marginRight: "5px",
  color: "rgba(255, 255, 255, 0.379)",
  textDecoration: "none",
  // whiteSpace:"nowrap",
  flexWrap: "wrap",
};
const Terms = () => {
  return (
    <div >
      <p>
        <a style={styles1} href="#">
          Terms of Service
        </a>
        <a style={styles1} href="#">
          Privacy Policy
        </a>
        <a style={styles1} href="#">
          Cookie Policy
        </a>
        <a style={styles1} href="#">
          Accessibility
        </a>
        <a style={styles1} href="#">
          Ads info
        </a>
        <a style={styles1} href="#">
          more...
        </a>
        <small style={styles1} href="#">
          © 2022 Twitter Inc.
        </small>
      </p>
    </div>
  );
}

export default Terms