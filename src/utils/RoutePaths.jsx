import Home from "./../pages/home/Home";
import Articles from "./../pages/articles/Articles";
import About from "./../pages/about/About";
import Contact from "./../pages/contact/Contact";
import Categories from "./../pages/categories/Categories";
import Blog from "./../pages/blog/Blog";
import Search from "./../pages/search/Search";

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
];
