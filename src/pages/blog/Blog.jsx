import "./blog.css";
import Header from "./../../components/header/Header";
import { Hero } from "./../../components/hero/Hero";
import Footer from "./../../components/footer/Footer";
import bar from "../../assets/bar.png";
import { Author } from "./../../components/author/Author";
import { BlogCard } from "./../../components/blogCard/BlogCard";

export default function Blog() {
  return (
    <>
      <Hero type="single" />
      <Header />
      <div className="container blog">
        <aside>
          <p className="text-body text-bold">08.02.2021</p>
          <img src={bar} alt="" />
          <p className="text-body text-bold">4 mininutes</p>
        </aside>

        <main>
          <p className="text-body">
            Seamlessly syndicate cutting-edge architectures rather than
            collaborative collaboration and idea-sharing. Proactively incubate
            visionary interfaces whereas premium benefits. Seamlessly negotiate
            ubiquitous leadership skills rather than parallel ideas.
            Dramatically visualize superior interfaces for best-of-breed
            alignments. Synergistically formulate performance based users
            through customized relationships. Interactively deliver
            cross-platform ROI via granular systems. Intrinsicly enhance
            effective initiatives vis-a-vis orthogonal outsourcing. Rapidiously
            monetize market-driven opportunities with multifunctional users.
            Collaboratively enhance visionary opportunities through
            revolutionary schemas. Progressively network just in time customer
            service without real-time scenarios.
          </p>
          <p className="text-body">
            Seamlessly syndicate cutting-edge architectures rather than
            collaborative collaboration and idea-sharing. Proactively incubate
            visionary interfaces whereas premium benefits. Seamlessly negotiate
            ubiquitous leadership skills rather than parallel ideas.
            Dramatically visualize superior interfaces for best-of-breed
            alignments. Synergistically formulate performance based users
            through customized relationships. Interactively deliver
            cross-platform ROI via granular systems. Intrinsicly enhance
            effective initiatives vis-a-vis orthogonal outsourcing. Rapidiously
            monetize market-driven opportunities with multifunctional users.
            Collaboratively enhance visionary opportunities through
            revolutionary schemas. Progressively network just in time customer
            service without real-time scenarios.
          </p>
          <h1 className="h-300">
            “Monotonectally seize superior mindshare rather than efficient
            technology.”
          </h1>
          <p className="text-body">
            Compellingly enhance seamless resources through competitive content.
            Continually actualize 24/365 alignments for resource-leveling
            platforms. Energistically enhance high standards in models and
            professional expertise. Intrinsicly iterate extensible metrics for
            prospective opportunities. Continually develop leading-edge
            experiences through quality e-services.
          </p>
          <div className="tags">
            <span>adventure</span>
            <span>photo</span>
            <span>design</span>
          </div>
          <Author />
        </main>
      </div>
      <BlogCard type="related-post" />
      <Footer />
    </>
  );
}
