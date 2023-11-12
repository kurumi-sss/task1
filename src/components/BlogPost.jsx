const posts = [
  {
    id: 1,
    title: '記事タイトル１',
    thumbnailUrl: 'https://placehold.jp/800x400.png',
    createdAt: '2023-09-11T09:00:00.000Z',
    categories: ['React', 'TypeScript'],
    content: `
      本文です。本文です。本文です。本文です。本文です。本文です。<br/>本文です。本文です。本文です。本文です。本文です。<br/><br/>本文です。本文です。本文です。本文です。本文です。本文です。本文です。本文です。本文です。<br/><br/><br/>本文です。本文です。本文です。本文です。本文です。本文です。<br/>`,
  },
  {
    id: 2,
    title: '記事タイトル２',
    thumbnailUrl: 'https://placehold.jp/800x400.png',
    createdAt: '2023-09-10T09:00:00.000Z',
    categories: ['HTML', 'CSS'],
    content: `
      本文です。本文です。本文です。本文です。本文です。本文です。<br/>本文です。本文です。本文です。本文です。本文です。<br/><br/>本文です。本文です。本文です。本文です。本文です。本文です。本文です。本文です。本文です。<br/><br/><br/>本文です。本文です。本文です。本文です。本文です。本文です。<br/>`,
  },
  {
    id: 3,
    title: '記事タイトル３',
    thumbnailUrl: 'https://placehold.jp/800x400.png',
    createdAt: '2023-09-09T09:00:00.000Z',
    categories: ['JavaScript'],
    content: `
      本文です。本文です。本文です。本文です。本文です。本文です。<br/>本文です。本文です。本文です。本文です。本文です。<br/><br/>本文です。本文です。本文です。本文です。本文です。本文です。本文です。本文です。本文です。<br/><br/><br/>本文です。本文です。本文です。本文です。本文です。本文です。<br/>`,
  },
]

const BlogPost = () => {
  return (
    <div className="blog-post">
      <ul className="blog-post-list">
        {/* <li>
          <div className="blog-post-info">
            <p>日付</p>
            <p>カテゴリ</p>
          </div>
          <a href="../data/Posts.js">{posts[0].title}</a>
          <p>{posts[0].content}</p>
        </li>
        <li>
          <div className="blog-post-info">
            <p>日付</p>
            <p>カテゴリ</p>
          </div>
          <a href="../data/Posts.js">記事タイトル１</a>
          <p>本文です。本文です。本文です。本文です。本文です。</p>
        </li> */}
        {posts.map((post) => {
          return (
            <li className="">
              <div className="blog-post-info">
                <p>日付</p>
                <div>
                          {post.categories.map((category) => {
                            return (
                              <div
                                key={category}
                              >
                                {category}
                              </div>
                          )
                          })}
                        </div>
                        </div>

              <a href="../data/Posts.js">{post.title}</a>
              {/* <p>{post.content}</p> */}
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default BlogPost
