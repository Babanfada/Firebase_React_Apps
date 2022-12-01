import React, { useContext } from "react";
import { dataContext } from "../App";
import Signupbtn from "./Components/Signupbtn";
import Terms from "./Terms";

const Auth = () => {
  const { infos } = useContext(dataContext);
  const styles = {
    fontSize: "12px",
    marginBottom: "15px",
    color: "rgba(255, 255, 255, 0.379)",
    lineHeight: "0",
  };

  console.log(infos);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // position: "fixed",
        // border: "1px solid red",
      }}
    >
      <div
        style={{
          border: "1px solid rgba(255, 255, 255, 0.379)",
          borderRadius: "20px",
          padding: "1vh 2vw 0 1vw",
          height: "40vh",
        }}
      >
        <h3 style={{ fontWeight: "bold", fontSize: "large" }}>
          New to Twitter?
        </h3>
        <small style={styles}>
          Sign up to get your own personalized timeline!
        </small>
        <div
          style={{
            // border: "1px solid red",
            height: "auto",
            backgroundColor: "transparent",
            marginTop: "10px",
          }}
        >
          {infos.map((info, index) => (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "5px",
                // border: "1px solid red",
              }}
              key={index}
            >
              <Signupbtn info={info} />
            </div>
          ))}
        </div>
        <small style={styles}>
          By signing up, you agree to the{" "}
          <a style={{ textDecoration: "none" }} href="#">
            Terms of Service{" "}
          </a>
          and{" "}
          <a style={{ textDecoration: "none" }} href="#">
            Privacy Policy
          </a>
          ,{" "}
          <a style={{ textDecoration: "none" }} href="#">
            including Cookie Use
          </a>
          .
        </small>
      </div>
    </div>
  );
};

export default Auth;
