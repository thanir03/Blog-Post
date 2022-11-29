import React from "react";
import BlogForm from "../../components/Blog Form/BlogForm";

function NewBlogPage() {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          marginTop: "30px",
        }}
      >
        Blog Form
      </h1>
      <BlogForm />
    </>
  );
}

export default NewBlogPage;
