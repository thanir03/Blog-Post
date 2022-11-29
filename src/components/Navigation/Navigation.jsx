import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

function Navigation({ children }) {
  const handleActiveClassName = ({ isActive }) => {
    return isActive ? styles["active"] : "";
  };
  return (
    <>
      <nav className={styles["navbar-container"]}>
        <ul>
          <li>
            <NavLink className={handleActiveClassName} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={handleActiveClassName} end to="blog">
              Blog
            </NavLink>
          </li>
        </ul>
      </nav>
      <main className={styles["main-container"]}>{children}</main>
    </>
  );
}

export default Navigation;
