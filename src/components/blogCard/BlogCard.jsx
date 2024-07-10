import "./blogcard.css";
import UseFetchUserNews from "../../Hooks/Fetches/usefetchUserNews";

export const BlogCard = ({ type }) => {
  const { data: blogs, isLoading } = UseFetchUserNews();
  switch (type) {
    case "main":
      return (
        <>
          <div className="flex">
            {blogs?.map((blog, idx) => (
              <div key={idx} className="blogCard">
                <div className="cover">
                  <img src={blog.photo} alt="" loading="lazy" />
                  <div className="shade"></div>
                  <div className="pill">{blog.categories}</div>
                </div>
                <p className="text-body">{blog.createdAt}</p>
                <h2 className="h-200">{blog.title}</h2>
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
            <h2 className="h-200">Related Posts</h2>
            <div className="flex">
              {blogs?.slice(0, 4).map((blog, idx) => (
                <div className="blogCard" key={idx}>
                  <div className="cover">
                    <img src={blog.photo} alt="" loading="lazy" />
                    <div className="shade"></div>
                    <div className="pill">{blog.categories}</div>
                  </div>
                  <p className="text-body">{blog.createdAt}</p>
                  <h2 className="h-200">{blog.title}</h2>
                  <p className="text-body">{blog.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    case "recent-post":
      return (
        <div className="related">
          <div className="container">
            <h2 className="h-200">Recent Posts</h2>
            <div className="flex">
              {blogs.slice(0, 6)?.map((blog, idx) => (
                <div className="blogCard" key={idx}>
                  <div className="cover">
                    <img src={blog.photo} alt="" loading="lazy" />
                    <div className="shade"></div>
                    <div className="pill">{blog.categories}</div>
                  </div>
                  <p className="text-body">{blog.createdAt}</p>
                  <h2 className="h-200">{blog.title}</h2>
                  <p className="text-body">{blog.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
  }
};
