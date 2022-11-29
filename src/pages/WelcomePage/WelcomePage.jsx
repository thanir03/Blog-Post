import React from "react";
import styles from "./WelcomePage.module.css"

function WelcomePage() {
  return (
    <div className={styles["welcome-container"]}>
      <h2>Welcome Page</h2>
      <p>Learn more by reading blog post</p>
    </div>
  );
}

export default WelcomePage;
