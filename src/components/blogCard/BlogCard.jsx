import "./blogcard.css";
import UseFetchUserNews from "../../Hooks/Fetches/usefetchUserNews";
import Card from "./Card";
import Skeleton from "../skeleton/Skeleton";

export const BlogCard = ({ type }) => {
  const { data: blogs, isLoading } = UseFetchUserNews();

  if (isLoading) return <Skeleton type="blogcards" />;
  switch (type) {
    case "main":
      return (
        <>
          <div className="flex">
            {blogs?.map((blog, idx) => (
              <Card key={idx} blog={blog} />
            ))}
          </div>
        </>
      );
    case "related-post":
      return (
        <>
          <div className="related">
            <div className="container">
              <h2 className="h-200">Related Posts</h2>
              <div className="flex">
                {blogs?.slice(0, 4).map((blog, idx) => (
                  <Card key={idx} blog={blog} />
                ))}
              </div>
            </div>
          </div>
        </>
      );
    case "recent-post":
      return (
        <>
          <div className="related">
            <div className="container">
              <h2 className="h-200">Recent Posts</h2>
              <div className="flex">
                {blogs?.slice(0, 6)?.map((blog, idx) => (
                  <Card key={idx} blog={blog} />
                ))}
              </div>
            </div>
          </div>
        </>
      );
  }
};
