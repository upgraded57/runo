import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import Search from "./pages/search/Search";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles/:id/" element={<Blog />} />
          <Route path="/search/:query/" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
