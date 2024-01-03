import { useNavigate, useParams } from "react-router-dom";
import "./categories.css";
import "../search/search.css";
import Header from "./../../components/header/Header";
import { useEffect } from "react";
import { Subhero } from "./../../components/subhero/Subhero";
import List from "./../../components/list/List";
import Footer from "./../../components/footer/Footer";
import { BlogCard } from "./../../components/blogCard/BlogCard";

export default function Categories() {
  const navigate = useNavigate();
  const { article_category: category } = useParams();
  const headers = [
    "Popular",
    "Sport",
    "Politics",
    "Entertainment",
    "Technology",
  ];
  const validCategory = headers.filter(
    (header) => header.toLowerCase() === category
  );

  // Navigate back to articles page if user alters URL to invalid article category
  useEffect(() => {
    if (validCategory.length < 1) {
      return navigate("/articles");
    }
  }, []);
  return (
    <>
      <Header withPadding />
      <div className="category">
        <div className="container">
          <h3 className="h-300">{`Most viewed in ${validCategory}`}</h3>
        </div>
        <Subhero small />
        <div className="container">
          <h3 className="h-300">{`Newest in ${validCategory}`}</h3>
          <div className="query_lists">
            <List />
            <List />
            <List />
            <List />
            <List />
          </div>
        </div>
        <div className="container">
          <h3 className="h-300">Viewers choice</h3>
          <div className="query_lists">
            <List />
            <List />
            <List />
            <List />
            <List />
          </div>
        </div>
        <div className="container">
          <h3 className="h-300">{`Longer ${validCategory} Articles`}</h3>
          <div className="query_lists">
            <List />
            <List />
            <List />
            <List />
            <List />
          </div>
        </div>
        <div className="container">
          <h3 className="h-300">{`Daily Highlight in ${validCategory}`}</h3>
        </div>
        <Subhero small />
        <div className="container">
          <h3 className="h-300">Save for later</h3>
          <div className="query_lists">
            <List />
            <List />
            <List />
            <List />
          </div>
        </div>
        <div className="container">
          <h3 className="h-300">Other Sections of Runo</h3>
          <div className="query_lists">
            <List />
            <List />
            <List />
            <List />
            <List />
          </div>
        </div>
      </div>
      <BlogCard type="related-post" />
      <Footer />
    </>
  );
}
