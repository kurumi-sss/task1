import { posts } from "../data/Posts";

const BlogPost = () => {
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
              <a href="../data/Posts.jsx">{post.title}</a>
              {/* <p>{post.content}</p> */}
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BlogPost;
