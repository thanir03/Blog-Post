import React from "react";
import { Route, Routes } from "react-router-dom";
import BlogPage from "./pages/BlogPage/BlogPage";
import NewBlogPage from "./pages/NewBlogPage/NewBlogPage";
import BlogDetailsPage from "./pages/BlogDetailsPage/BlogDetailsPage";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <>
      <Navigation>
        <Routes>
          <Route index element={<WelcomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:blogId" element={<BlogDetailsPage />} />
          <Route path="/blog/new" element={<NewBlogPage />} />
          <Route path="/error" element={<h1>404</h1>} />
        </Routes>
      </Navigation>
    </>
  );
}

export default App;
