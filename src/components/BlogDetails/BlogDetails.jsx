import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { useHTTP } from "../../hooks/useHTTP";
import { deleteBlogDetails } from "../../utils/api";
import styles from "./BlogDetails.module.css";

function BlogDetails() {
  const blogDetails = useSelector((state) => state.blog.blogDetails);
  const navigate = useNavigate();
  const deleteRequestCallback = () => deleteBlogDetails(blogDetails.id);
  const { apiRequest } = useHTTP(deleteRequestCallback);

  const handleDelete = async () => {
    await apiRequest();
    navigate("/blog");
  };

  return (
    <>
      {!blogDetails && <Navigate to="/error" />}
      {blogDetails && (
        <div id={`${blogDetails.id}`} className={styles["container"]}>
          <h1 className={styles["title"]}>{blogDetails.title}</h1>
          <div className={styles["micro-details"]}>
            <p>{new Date(blogDetails.time).toLocaleDateString("en-GB")}</p>
            <p>By : {blogDetails.author}</p>
          </div>
          <p className={styles["article"]}> {blogDetails.article}</p>
          <button
            onClick={handleDelete}
            className={`${styles["delete"]} button`}
          >
            DELETE
          </button>
        </div>
      )}
    </>
  );
}

export default BlogDetails;
