import React, { useContext } from "react";
import { BiSearch } from "react-icons/bi";
import styles from "./Search.module.css";
import { dataContext } from "../../App";

const Search = () => {
  const { typing, settyping } = useContext(dataContext);

  return (
    <div
      className={`${typing ? styles.border : ""}`}
      style={{
        display: "flex",
        alignItems: "center",
        //  border: "1px solid white",
        height: "40px",
        borderRadius: "25px 25px 25px 25px",
        padding: "0 2vw",
        gap: "1vw",
        backgroundColor: "rgba(255, 255, 255, 0.119)",
        width: "90%",
      }}
    >
      <BiSearch
        className={`${typing ? styles.font : ""}`}
        style={{ fontSize: "larger" }}
      />
      <input
        className={styles.search}
        style={{
          width: "100%",
          backgroundColor: "transparent",
          border: "none",
          color: "white",
        }}
        type="text"
        name="search"
        id="search"
        placeholder="Search Twitter"
        onClick={() => settyping((prev) => !prev)}
      />
    </div>
  );
};

export default Search;
