import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useHTTP } from "../../hooks/useHTTP";
import { validation } from "../../schemas";
import { postBlogPost } from "../../utils/api";
import Loading from "../UI/Loading/Loading";
import styles from "./BlogForm.module.css";

function BlogForm() {
  const { isLoading, isSuccess, apiRequest, error } = useHTTP(postBlogPost);
  const navigate = useNavigate();
  const handleSubmitForm = async (values, action) => {
    const blogData = {
      ...values,
      time: new Date().toISOString(),
    };
    await apiRequest(blogData);
    action.resetForm();
    setTimeout(() => navigate("/blog"), 1000);
  };
  const {
    values: { title, author, article },
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
  } = useFormik({
    initialValues: {
      title: "",
      author: "",
      article: "",
    },
    validationSchema: validation,
    onSubmit: handleSubmitForm,
  });

  return (
    <>
      {!isLoading && !isSuccess && (
        <form onSubmit={handleSubmit} className={styles["form-container"]}>
          <div className={styles["input-container"]}>
            <label htmlFor="title">Title :</label>
            <input
              name="title"
              value={title}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
            />
            {errors.title && touched.title && (
              <p className={styles["error"]}>{errors.title}</p>
            )}
          </div>
          <div className={styles["input-container"]}>
            <label htmlFor="author">Author :</label>
            <input
              name="author"
              value={author}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
            />
            {errors.author && touched.author && (
              <p className={styles["error"]}>{errors.author}</p>
            )}
          </div>
          <div className={styles["input-container"]}>
            <label htmlFor="article">Article Details :</label>
            <textarea
              name="article"
              value={article}
              onChange={handleChange}
              onBlur={handleBlur}
              cols="20"
              rows="2"
            ></textarea>
            {errors.article && touched.article && (
              <p className={styles["error"]}>{errors.article}</p>
            )}
          </div>
          <button type="submit" className="button">
            Submit
          </button>
        </form>
      )}
      {isSuccess && <p className={styles["success"]}>Uploaded successfully</p>}
      {isLoading && (
        <div className={styles["loading-container"]}>
          <Loading />
        </div>
      )}
      {error.hasError && <p className={styles["error"]}></p>}
    </>
  );
}

// Blog title
// Blog author
// Blog article
//

export default BlogForm;
