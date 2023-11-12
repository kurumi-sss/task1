const BlogPost = () => {
  return (
    <div className="blog-post">
      <ul className="blog-post-list">
        <li>
          <div className="blog-post-info">
            <p>日付</p>
            <p>カテゴリ</p>
          </div>
          <a href="../data/Posts.js">記事タイトル１</a>
          <p>本文です。本文です。本文です。本文です。本文です。</p>
        </li>
      </ul>
    </div>
  );
};

export default BlogPost;
