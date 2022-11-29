import React from "react";
import { Link } from "react-router-dom";
import styles from "./BlogItem.module.css";

function BlogItem({ data }) {
  return (
    <Link to={`${data.id}`}>
      <li className={styles["blog-item-container"]} id={`${data.id}_blog_item`}>
        <p>{data.title}</p>
      </li>
    </Link>
  );
}

export default BlogItem;
