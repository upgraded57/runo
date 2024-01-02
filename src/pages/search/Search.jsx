import { useParams } from "react-router-dom";
import "./search.css";
import Header from "./../../components/header/Header";
import { BlogCard } from "../../components/blogCard/BlogCard";
import { Subhero } from "./../../components/subhero/Subhero";
import List from "./../../components/list/List";
import Footer from "./../../components/footer/Footer";

export default function Search() {
  const { query } = useParams();
  return (
    <>
      <Header withPadding />
      <div className="query">
        <h2 className="h-200">Your search: {query}</h2>
        <Subhero small />
        <div className="query_lists">
          <List />
          <List />
          <List />
          <List />
        </div>
        <Subhero small />
        <div className="query_lists">
          <List />
          <List />
          <List />
          <List />
        </div>
        <Subhero small />
        <div className="query_lists">
          <List />
          <List />
          <List />
        </div>
      </div>
      <BlogCard type="recent-post" />
      <Footer />
    </>
  );
}
