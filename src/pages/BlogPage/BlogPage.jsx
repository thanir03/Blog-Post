import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import BlogList from "../../components/BlogList/BlogList";
import ErrorFetch from "../../components/UI/ErrorFetch/ErrorFetch";
import Loading from "../../components/UI/Loading/Loading";
import { useHTTP } from "../../hooks/useHTTP";
import { blogActions } from "../../store/blogSlice";
import { getAllBlogPost } from "../../utils/api";
import styles from "./BlogPage.module.css";

function BlogPage() {
  const navigate = useNavigate();
  const handleNavigateToNewBlogPage = () => {
    navigate("new");
  };
  const dispatch = useDispatch();

  const { isLoading, isSuccess, apiRequest, error } = useHTTP(getAllBlogPost);

  const getRequest = useCallback(async () => {
    const data = await apiRequest();
    dispatch(blogActions.setBlogList({ blogList: data }));
  }, [apiRequest, dispatch]);

  useEffect(() => {
    getRequest();
  }, [getRequest]);

  return (
    <>
      <div className={styles["blog-container"]}>
        <button
          className={styles["button"]}
          onClick={handleNavigateToNewBlogPage}
        >
          Add Post
        </button>
        {isSuccess && <BlogList />}
        {isLoading && <Loading />}
        {error.hasError && (
          <ErrorFetch message={error.errorMessage} apiRequest={getRequest} />
        )}
      </div>
    </>
  );
}

export default BlogPage;
