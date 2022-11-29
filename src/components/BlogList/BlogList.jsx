import React from "react";
import { useSelector } from "react-redux";
import BlogItem from "../BlogItem/BlogItem";
import styles from "./BlogList.module.css";

function BlogList() {
  const blogList = useSelector((state) => state.blog.blogList);
  const hasBlogs = blogList.length > 0;
  return (
    <div className={styles["blog-list-container"]}>
      <h2 className={styles["text"]}>Our Blog Post</h2>
      {!hasBlogs && <p className={styles["no-blogs"]}>No Blogs</p>}
      {hasBlogs && (
        <ul className={styles["list"]}>
          {blogList.map((item) => (
            <BlogItem key={item.id} data={item} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default BlogList;
