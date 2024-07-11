import "./home.css";
import Header from "./../../components/header/Header";
import { Hero } from "./../../components/hero/Hero";
import Footer from "./../../components/footer/Footer";
import { BlogCard } from "../../components/blogCard/BlogCard";
import { Subhero } from "../../components/subhero/Subhero";
import { EditorCard } from "./../../components/editorCard/EditorCard";
import UseFetchUserNews from "../../Hooks/Fetches/usefetchUserNews";

export default function Home() {
  const { data: heroData, isLoading } = UseFetchUserNews();
  return (
    <div className="home">
      <Hero type="main" heroData={heroData} isLoading={isLoading} />
      <Header isLoading={isLoading} />
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
