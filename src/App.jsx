import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import Search from "./pages/search/Search";
import Articles from "./pages/articles/Articles";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Categories from "./pages/categories/Categories";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/articles/category/:article_category"
            element={<Categories />}
          />
          <Route path="/articles/:id/" element={<Blog />} />
          <Route path="/search/:query/" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
