import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Post from "../pages/Post";

import Navbar from "../components/Navbar";

const Router = () => {
  return (
    <BrowserRouter basename="">
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/post/:postId" element={<Post />} />
        <Route path="*" element={<h1>404 error!</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
