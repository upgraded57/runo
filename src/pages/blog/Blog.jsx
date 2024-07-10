import "./blog.css";
import Header from "./../../components/header/Header";
import { Hero } from "./../../components/hero/Hero";
import Footer from "./../../components/footer/Footer";
import bar from "../../assets/bar.png";
import { Author } from "./../../components/author/Author";
import { BlogCard } from "./../../components/blogCard/BlogCard";
import { useParams } from "react-router-dom";
import UseFetchNews from "../../Hooks/Fetches/UseFetchNews";
import { useQueryClient } from "@tanstack/react-query";

import { useEffect } from "react";
import moment from "moment";

export default function Blog() {
  const { id } = useParams();

  // Get QueryClient from the context
  const queryClient = useQueryClient();
  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ["News", id] });
    window.scrollTo(0, 0);
  }, [id]);
  const { data: article, isLoading } = UseFetchNews(id);

  return (
    <>
      {isLoading && <p>Loading ...</p>}
      <Hero type="single" article={article} />
      <Header />
      <div className="container blog">
        <aside>
          <p className="text-body text-bold">
            {moment(article?.createdAt).format("MM Do YYYY")}
          </p>
          <img src={bar} alt="" />
          <p className="text-body text-bold">4 mininutes</p>
        </aside>

        <main>
          <p className="text-body">{article?.desc}</p>
          <p className="text-body">{article?.desc}</p>
          <h1 className="h-300">{article?.title}</h1>
          <p className="text-body">{article?.desc}</p>
          <div className="tags">
            <span>{article?.categories}</span>
            <span>{article?.categories}</span>
            <span>{article?.categories}</span>
          </div>
          <Author article={article} />
        </main>
      </div>
      <BlogCard type="related-post" />
      <Footer />
    </>
  );
}
