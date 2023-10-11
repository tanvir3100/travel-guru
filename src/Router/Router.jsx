import { Root } from "postcss";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import News from "../Pages/News/News";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path:"/",
                element:<Home></Home> 
            },
            {
                path:"/news",
                element:<News></News>
            },
            {
                path:"/blog",
                element: <Blog></Blog>
            },
            {
                path:"/contact",
                element: <Contact></Contact>
            },
        ]
    },
]);

export default router;