import { Routes, Route } from "react-router-dom";
import GeneralBlogs from "../pages/GeneralBlogs";
import Seeblogs from "../pages/Seeblogs";
import EditBlog from "../pages/EditBlog";
import CreateNewBlog from "../pages/CreateNewBlog";
import SeeBlogs from "../pages/SeeBlog";

const BlogsRoutes = () => {
    return (
        <Routes>
            <Route path="/myblogs" element={<Seeblogs />} />

            <Route path="/editblog" element={<EditBlog />} />

            <Route path="/createblog" element={<CreateNewBlog />} />

            <Route path="/seeblog" element={<SeeBlogs />} />

            <Route path="/" element={<GeneralBlogs />} />
        </Routes>
    );
};

export default BlogsRoutes;
