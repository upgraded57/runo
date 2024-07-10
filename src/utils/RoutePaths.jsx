import Home from "./../pages/home/Home";
import Articles from "./../pages/articles/Articles";
import About from "./../pages/about/About";
import Contact from "./../pages/contact/Contact";
import Categories from "./../pages/categories/Categories";
import Blog from "./../pages/blog/Blog";
import Search from "./../pages/search/Search";
import Auth from "../pages/auth/Auth";
import ProtectedRoutes from "./ProtectedRoutes";
import User from "./../pages/user/User";
import CreateArticle from "../pages/create-article/CreateArticle";
import UpdateArticle from "../pages/update-article/UpdateArticle";

export const RoutePaths = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/articles",
    element: <Articles />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/articles/category/:article_category",
    element: <Categories />,
  },
  {
    path: "/articles/:id",
    element: <Blog />,
  },
  {
    path: "/search/:query",
    element: <Search />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/user",
    element: (
      <ProtectedRoutes>
        <User />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/articles/new",
    element: (
      <ProtectedRoutes>
        <CreateArticle />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/articles/:id/update",
    element: (
      <ProtectedRoutes>
        <UpdateArticle />
      </ProtectedRoutes>
    ),
  },
];
