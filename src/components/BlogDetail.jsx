import * as React from "react";
import { posts } from "../data/Posts";
import { useParams } from "react-router-dom";

const pageId = useParams();

const post = posts.find((post) => {
  return post.id === pageId;
});

const BlogDetail = () => {
  return (
    <div className="blog-detail">
      <img src="https://placehold.jp/800x400.png" />
      <div className="blog-detail-info">
        <div className="blog-post-info">
          <div className="blog-date">
            {pageId}
            {post.createdAt}
            {/* 日付 */}
          </div>
          <div className="category">
            <p>カテゴリー</p>
          </div>
        </div>
        <div className="blog-title">
          <p>記事タイトル</p>
        </div>
        <div className="blog-text">
          <p>本文です。本文です。本文です。本文です。本文です。</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
