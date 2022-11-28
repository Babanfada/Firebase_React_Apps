import React from "react";
import { Link } from "react-router-dom";
import twenty3 from "../../images/emile.jpg";
import twenty2 from "../../images/horticulturist.jpg";
import { FcApproval } from "react-icons/fc";
import { MdOutlineFileUpload } from "react-icons/md";
import { TbMessageCircle2 } from "react-icons/tb";
import { AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai";
import { IoIosMore } from "react-icons/io";

const TweetDisplay = () => {
  return (
    <div
      style={{
        border: "1px solid red",
        display: "flex",
        gap: "10px",
        cursor: "pointer",
      }}
    >
      <div>
        <img
          style={{
            border: "1px solid red",
            borderRadius: "50%",
            width: "70px",
          }}
          src={twenty3}
          alt={"draft"}
        />
      </div>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            border: "1px solid blue",
            gap: "3px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "15px",
                fontWeight: "bold",
                gap: "2px",
                border: "1px solid red",
              }}
            >
              <a
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
                href="#"
              >
                <span>Fabrizio Romano </span>
              </a>
              <span>
                <FcApproval />
              </span>
            </div>
            <div
              style={{
                fontSize: "12px",
                border: "1px solid red",
                color: "rgba(255, 255, 255, 0.379)",
              }}
            >
              @UserName.15h
            </div>
          </div>
          <div
            style={{
              color: "rgba(255, 255, 255, 0.379)",
            }}
          >
            <IoIosMore />
          </div>
          {/* <span>15h</span> */}
        </div>
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet,
            delectus!
          </p>

          <img style={{ borderRadius: "10px" }} src={twenty2} alt="drafts" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent:"flex-start",
            gap:"8vw",
            border: "1px solid red",
            padding: "10px 0 ",
          }}
        >
          <TbMessageCircle2 />
          <AiOutlineRetweet />
          <AiOutlineHeart />
          <MdOutlineFileUpload />
        </div>
      </div>
    </div>
  );
};

export default TweetDisplay;
