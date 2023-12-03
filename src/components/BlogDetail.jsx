import * as React from "react";
import { posts } from "../data/Posts";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const pageId = parseInt(useParams().id, 10);

  const post = posts.find((post) => {
    return post.id === pageId;
  });

  if (!post) {
    return <p>該当する記事が見つかりません。</p>;
  }

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
