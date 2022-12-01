import React from "react";
import { useContext } from "react";
import { dataContext } from "../../App";

const MediaDisplay = ({ TweetDetail }) => {
  const { video, audio, setvideo, setaudio } = useContext(dataContext);
  setaudio(true);
  setaudio(TweetDetail.audi);
  return (
    <div>
      <p>{TweetDetail.text}</p>
      <div
        style={{
          borderRadius: "20px",
          border: "1px solid rgba(255, 255, 255, 0.379)",
          // display: "grid",
          // gridTemplateColumns: "1fr 1fr",
          // width: "fit-content",
        }}
      >
        <img
          style={{
            borderRadius: "20px",
            width: "fit-content",
          }}
          src={TweetDetail.media[0]}
          alt="drafts"
        />
        {/* <img
          style={{
            borderRadius: "20px",
          }}
          src={TweetDetail.media[0]}
          alt="drafts"
        /> */}
        {/* {audio ? (
          <audio controls>
            <source src={TweetDetail.audi} />
            Your browser does not support the audio tag.
          </audio>
        ) : (
          ""
        )} */}
        {/* {video ? (
          <video width="320" height="240" controls>
            <source src="movie.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          ""
        )} */}

        {/* there is need for some conditional rendering of videos and images here depending on wht the user uploads */}
      </div>
    </div>
  );
};

export default MediaDisplay;
