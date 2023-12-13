import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

const BlogDetail = () => {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(
        `https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${id}`
      );
      const data = await response.json();
      setPost(data.post);
    };
    fetchPost();
  }, [id]);
  // もし記事がまだ読み込まれていない場合、ローディングメッセージを表示

  if (!post) {
    return <div>Loading...</div>;
  }

  // データが取得されたら記事の内容を表示
  return (
    <div className="blog-detail">
      <img src={post.thumbnailUrl} alt="" />
      <div className="blog-detail-info">
        <div className="blog-post-info">
          <div className="blog-date">
            {new Date(post.createdAt).toLocaleString()}
            {/* 日付 */}
          </div>
          <div className="blog-category">
            {post.categories.map((category) => {
              return (
                <div className="category" key={category}>
                  {category}
                </div>
              );
            })}
            {/* カテゴリー */}
          </div>
        </div>
        <div className="blog-title">
          <h1>{post.title}</h1>
          {/* 記事タイトル */}
        </div>
        <div className="blog-text">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
          {/* 本文です。 */}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
