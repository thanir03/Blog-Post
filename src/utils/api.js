import axios from "axios";
const API_URL = `https://react-http-1d04c-default-rtdb.asia-southeast1.firebasedatabase.app`;

const handleRequest = async ({
  method,
  url,
  data,
  transformDataFn,
  defaultValue,
}) => {
  try {
    const response = await axios({
      method,
      url,
      data: method === "GET" ? null : data,
    });
    console.log(response);
    const requestedData = response.data ?? defaultValue;
    return transformDataFn(requestedData);
  } catch (error) {
    throw error;
  }
};

const transformAllBlogPostFromFirebase = (data) => {
  const dataArray = [];
  for (let [key, value] of Object.entries(data)) {
    const transformData = {
      ...value,
      id: key,
    };
    dataArray.push(transformData);
  }
  return dataArray;
};

const transformBlogPostFromFirebase = (blogId, data) => {
  if (!data) return;
  return { ...data, id: blogId };
};

const getAllBlogPost = () => ({
  method: "GET",
  url: `${API_URL}/blog.json`,
  transformDataFn: transformAllBlogPostFromFirebase,
  defaultValue: {},
});

const postBlogPost = (blogPostData) => ({
  method: "POST",
  url: `${API_URL}/blog.json`,
  data: blogPostData,
  transformDataFn: (data) => data,
  defaultValue: null,
});

const getBlogDetails = (blogId) => ({
  method: "GET",
  url: `${API_URL}/blog/${blogId}.json`,
  transformDataFn: transformBlogPostFromFirebase.bind(null, blogId),
  defaultValue: null,
});

const deleteBlogDetails = (blogId) => ({
  method: "DELETE",
  url: `${API_URL}/blog/${blogId}.json`,
  transformDataFn: (data) => data,
  defaultValue: null,
});

export {
  getAllBlogPost,
  postBlogPost,
  getBlogDetails,
  deleteBlogDetails,
  handleRequest,
};
