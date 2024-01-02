import "./articles.css";
import "../search/search.css";

import Header from "./../../components/header/Header";
import { Subhero } from "./../../components/subhero/Subhero";
import List from "../../components/list/List";
import Footer from "./../../components/footer/Footer";
import { BlogCard } from "../../components/blogCard/BlogCard";

export default function Articles() {
  return (
    <>
      <Header withPadding />
      <div className="articles">
        <div className="container">
          <h1 className="h-100">Most Viewed Today</h1>
        </div>
        <Subhero small />

        <div className="container">
          <h1 className="h-100">Popular</h1>
          <div className="query_lists">
            <List />
            <List />
            <List />
            <List />
          </div>
        </div>
        <div className="container">
          <h1 className="h-100">Sport</h1>
          <div className="query_lists">
            <List />
            <List />
            <List />
            <List />
          </div>
        </div>
        <Subhero small />
        <div className="container">
          <h1 className="h-100">Politics</h1>
          <div className="query_lists">
            <List />
            <List />
            <List />
            <List />
          </div>
        </div>
        <div className="container">
          <h1 className="h-100">Entertainment</h1>
          <div className="query_lists">
            <List />
            <List />
            <List />
            <List />
          </div>
        </div>
        <div className="container">
          <h1 className="h-100">Technology</h1>
          <div className="query_lists">
            <List />
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
