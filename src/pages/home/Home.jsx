import "./home.css";
import Header from "./../../components/header/Header";
import { Hero } from "./../../components/hero/Hero";
import Footer from "./../../components/footer/Footer";
import { BlogCard } from "../../components/blogCard/BlogCard";
import { Subhero } from "../../components/subhero/Subhero";
import { EditorCard } from "./../../components/editorCard/EditorCard";

export default function Home() {
  return (
    <div className="home">
      <Hero type="main" />
      <Header />
      <div className="container">
        <h1 className="h-300">Popular topics</h1>
        <BlogCard type="main" />
      </div>
      <Subhero />
      <div className="container">
        <h1 className="h-300">Editors' Pick</h1>
        <EditorCard />
      </div>
      <Footer />
    </div>
  );
}
