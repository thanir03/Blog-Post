import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import BlogDetails from "../../components/BlogDetails/BlogDetails";
import ErrorFetch from "../../components/UI/ErrorFetch/ErrorFetch";
import Loading from "../../components/UI/Loading/Loading";
import { useHTTP } from "../../hooks/useHTTP";
import { blogActions } from "../../store/blogSlice";
import { getBlogDetails } from "../../utils/api";
import styles from "./BlogDetailsPage.module.css";

function BlogDetailsPage() {
  const parameters = useParams();
  const { blogId } = parameters;
  const dispatch = useDispatch();

  const getBlogDetailsCallback = useCallback(() => {
    return getBlogDetails(blogId);
  }, [blogId]);
  
  const { isLoading, isSuccess, error, apiRequest } = useHTTP(
    getBlogDetailsCallback
  );

  const getRequest = useCallback(async () => {
    const data = await apiRequest();
    dispatch(blogActions.setBlogDetails({ blogDetails: data }));
  }, [apiRequest, dispatch]);


  useEffect(() => {
    getRequest();
  }, [getRequest]);

  return (
    <div className={styles["details-container"]}>
      {isSuccess && <BlogDetails />}
      {isLoading && <Loading />}
      {error.hasError && (
        <ErrorFetch apiRequest={getRequest} message={error.errorMessage} />
      )}

    </div>
  );
}

export default BlogDetailsPage;
