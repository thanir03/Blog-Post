import React from "react";
import styles from "./ErrorFetch.module.css";

function ErrorFetch({ apiRequest, message }) {
  return (
    <div className={styles["error-container"]}>
      <p>{message}</p>
      <button
        className={`${styles["button"]} ${styles["error"]}`}
        onClick={apiRequest}
      >
        Reload
      </button>
    </div>
  );
}

export default ErrorFetch;
