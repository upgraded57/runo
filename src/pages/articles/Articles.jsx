import "./articles.css";
import "../search/search.css";

import Header from "./../../components/header/Header";
import { Subhero } from "./../../components/subhero/Subhero";
import List from "../../components/list/List";
import Footer from "./../../components/footer/Footer";
import { BlogCard } from "../../components/blogCard/BlogCard";
import { useNavigate } from "react-router-dom";
import UseFetchUserNews from "../../Hooks/Fetches/usefetchUserNews";
import Skeleton from "../../components/skeleton/Skeleton";

export default function Articles() {
  const { data: articles, isLoading } = UseFetchUserNews();
  const navigate = useNavigate();

  return (
    <>
      <Header withPadding />
      {isLoading && <Skeleton type="blogcards" />}
      <div className="articles">
        <div className="container">
          <h1 className="h-100">Most Viewed Today</h1>
        </div>
        <Subhero small />

        <div className="container">
          <div className="articles_header">
            <h1 className="h-100">Popular</h1>
            <button
              type="button"
              value="popular"
              onClick={(e) => navigate(`/articles/category/${e.target.value}`)}
            >
              Load More
            </button>
          </div>
          <div className="query_lists">
            {articles?.map((news, idx) => (
              <List key={idx} news={news} />
            ))}
          </div>
        </div>
        <div className="container">
          <div className="articles_header">
            <h1 className="h-100">Sport</h1>
            <button
              type="button"
              value="sport"
              onClick={(e) => navigate(`/articles/category/${e.target.value}`)}
            >
              Load More
            </button>
          </div>
          <div className="query_lists">
            {articles?.map((news, idx) => (
              <List key={idx} news={news} />
            ))}
          </div>
        </div>
        <Subhero small />
        <div className="container">
          <div className="articles_header">
            <h1 className="h-100">Politics</h1>
            <button
              type="button"
              value="politics"
              onClick={(e) => navigate(`/articles/category/${e.target.value}`)}
            >
              Load More
            </button>
          </div>
          <div className="query_lists">
            {articles?.map((news, idx) => (
              <List key={idx} news={news} />
            ))}
          </div>
        </div>
        <div className="container">
          <div className="articles_header">
            <h1 className="h-100">Entertainment</h1>
            <button
              type="button"
              value="entertainment"
              onClick={(e) => navigate(`/articles/category/${e.target.value}`)}
            >
              Load More
            </button>
          </div>
          <div className="query_lists">
            {articles?.map((news, idx) => (
              <List key={idx} news={news} />
            ))}
          </div>
        </div>
        <div className="container">
          <div className="articles_header">
            <h1 className="h-100">Technology</h1>
            <button
              type="button"
              value="technology"
              onClick={(e) => navigate(`/articles/category/${e.target.value}`)}
            >
              Load More
            </button>
          </div>
          <div className="query_lists">
            {articles?.map((news, idx) => (
              <List key={idx} news={news} />
            ))}
          </div>
        </div>
      </div>
      <BlogCard type="recent-post" />
      <Footer />
    </>
  );
}
