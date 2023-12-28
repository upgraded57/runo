import "./blogcard.css";
import blogImg1 from "../../assets/Blog Image(1).png";
import blogImg2 from "../../assets/Blog Image(2).png";
import blogImg3 from "../../assets/Blog Image(4).png";
import blogImg4 from "../../assets/Blog Image(5).png";
import blogImg5 from "../../assets/Blog Image(6).png";
import blogImg6 from "../../assets/Blog Image(7).png";
import blogImg7 from "../../assets/Blog Image(8).png";
import blogImg8 from "../../assets/Blog Image(9).png";

const blogs = [
  {
    idx: 1,
    tag: "adventure",
    date: "08.08.2021",
    headline: "Dream destinations to visit this year in Paris",
    desc: "Progressively incentivize cooperative systems through technically. Credibly productivate seamless data with flexible schemas.",
    coverImg: blogImg1,
  },
  {
    idx: 2,
    tag: "travel",
    date: "08.08.2021",
    headline: "Breathtaking first-person photos around Europe",
    desc: "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
    coverImg: blogImg2,
  },
  {
    idx: 3,
    tag: "technology",
    date: "08.08.2021",
    headline: "What collectors need to know about authenticity",
    desc: "Progressively incentivize cooperative systems through technically. Credibly productivate seamless data with flexible schemas.",
    coverImg: blogImg3,
  },
  {
    idx: 4,
    tag: "adventure",
    date: "08.08.2021",
    headline: "Instagram artists with great photography skills",
    desc: "Progressively incentivize cooperative systems through technically. Credibly productivate seamless data with flexible schemas.",
    coverImg: blogImg4,
  },
  {
    idx: 5,
    tag: "fashion",
    date: "08.08.2021",
    headline: "Things to know before visiting Cave in Germany",
    desc: "Progressively incentivize cooperative systems through technically. Credibly productivate seamless data with flexible schemas.",
    coverImg: blogImg5,
  },
  {
    idx: 6,
    tag: "technology",
    date: "08.08.2021",
    headline: "Nina Smith vibrant work collab with Nike Dunk",
    desc: "Progressively incentivize cooperative systems through technically. Credibly productivate seamless data with flexible schemas.",
    coverImg: blogImg6,
  },
  {
    idx: 7,
    tag: "fashion",
    date: "08.08.2021",
    headline: "Richard Norton photorealistic rendering as real photos",
    desc: "Progressively incentivize cooperative systems through technically. Credibly productivate seamless data with flexible schemas.",
    coverImg: blogImg7,
  },
  {
    idx: 8,
    tag: "adventure",
    date: "08.08.2021",
    headline: "25 quality collectors toys inspired by famous films",
    desc: "Progressively incentivize cooperative systems through technically. Credibly productivate seamless data with flexible schemas.",
    coverImg: blogImg8,
  },
];

export const BlogCard = ({ type }) => {
  switch (type) {
    case "main":
      return (
        <>
          <div className="blogcard-nav">
            <p className="text-body text-bold active">All</p>
            <p className="text-body text-bold">Adventure</p>
            <p className="text-body text-bold">Travel</p>
            <p className="text-body text-bold">Fashion</p>
            <p className="text-body text-bold">Technology</p>
            <p className="text-body text-bold">Branding</p>
          </div>
          <div className="flex">
            {blogs.map((blog) => (
              <div className="blogCard" key={blog.idx}>
                <div className="cover">
                  <img src={blog.coverImg} alt="" />
                  <div className="shade"></div>
                  <div className="pill">{blog.tag}</div>
                </div>
                <p className="text-body">{blog.date}</p>
                <h2 className="h-200">{blog.headline}</h2>
                <p className="text-body">{blog.desc}</p>
              </div>
            ))}
          </div>
        </>
      );
    case "related-post":
      return (
        <div className="related">
          <div className="container">
            <h2 className="h-200">Related Post</h2>
            <div className="flex">
              {blogs.slice(0, 4).map((blog) => (
                <div className="blogCard" key={blog.idx}>
                  <div className="cover">
                    <img src={blog.coverImg} alt="" />
                    <div className="shade"></div>
                    <div className="pill">{blog.tag}</div>
                  </div>
                  <p className="text-body">{blog.date}</p>
                  <h2 className="h-200">{blog.headline}</h2>
                  <p className="text-body">{blog.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
  }
};
