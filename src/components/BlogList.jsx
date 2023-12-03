import { posts } from "../data/Posts";
import { Link } from "react-router-dom";

const BlogList = () => {
  return (
    <div className="blog-post">
      <ul className="blog-post-list">
        {posts.map((post) => {
          return (
            <li className="">
              <div className="blog-post-info">
                <div className="blog-date">
                  {new Date(post.createdAt).toLocaleString("ja-JP")}
                </div>
                <div className="blog-category">
                  {post.categories.map((category) => {
                    return (
                      <div className="category" key={category}>
                        {category}
                      </div>
                    );
                  })}
                </div>
              </div>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BlogList;
