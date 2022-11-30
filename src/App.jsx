import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import Navigation from "./components/Navigation/Navigation";
import Loading from "./components/UI/Loading/Loading";

const BlogDetailsPage = lazy(() =>
  import("./pages/BlogDetailsPage/BlogDetailsPage")
);
const BlogPage = lazy(() => import("./pages/BlogPage/BlogPage"));
const NewBlogPage = lazy(() => import("./pages/NewBlogPage/NewBlogPage"));

function App() {
  return (
    <>
      <Navigation>
        <Suspense
          fallback={
            <div className="loading">
              <Loading />
            </div>
          }
        >
          <Routes>
            <Route index element={<WelcomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:blogId" element={<BlogDetailsPage />} />
            <Route path="/blog/new" element={<NewBlogPage />} />
            <Route path="/error" element={<h1>404</h1>} />
          </Routes>
        </Suspense>
      </Navigation>
    </>
  );
}

export default App;

// server need to ignore the url parameter and just send the index.html or / resources 
