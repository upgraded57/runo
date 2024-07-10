import { useParams } from "react-router-dom";
import "./search.css";
import Header from "./../../components/header/Header";
import { BlogCard } from "../../components/blogCard/BlogCard";
import { Subhero } from "./../../components/subhero/Subhero";
import List from "./../../components/list/List";
import Footer from "./../../components/footer/Footer";
import UseFetchUserNews from "../../Hooks/Fetches/usefetchUserNews";

export default function Search() {
  const { data: articles, isLoading } = UseFetchUserNews();
  const { query } = useParams();
  return (
    <>
      <Header withPadding />
      <div className="query">
        <div className="container">
          <h1 className="h-300">Your search: {query}</h1>
        </div>
        <Subhero small />
        <div className="container">
          <div className="query_lists">
            {articles?.map((news, idx) => (
              <List key={idx} news={news} />
            ))}
          </div>
        </div>
        <Subhero small />
        <div className="container">
          <div className="query_lists">
            {articles?.map((news, idx) => (
              <List key={idx} news={news} />
            ))}
          </div>
        </div>
        <Subhero small />
        <div className="container">
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
