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
        <div className="container">
          <h1 className="h-300">Your search: {query}</h1>
        </div>
        <Subhero small />
        <div className="container">
          <div className="query_lists">
            <List />
            <List />
            <List />
            <List />
          </div>
        </div>
        <Subhero small />
        <div className="container">
          <div className="query_lists">
            <List />
            <List />
            <List />
            <List />
          </div>
        </div>
        <Subhero small />
        <div className="container">
          <div className="query_lists">
            <List />
            <List />
            <List />
          </div>
        </div>
      </div>
      <BlogCard type="recent-post" />
      <Footer />
    </>
  );
}
