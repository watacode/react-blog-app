import { Link } from "react-router-dom";
// import { posts } from "./data/posts";
import { useState, useEffect } from "react";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // APIでpostsを取得する処理をuseEffectで実行します。
  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch(
        "https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts",
      );
      const data = await res.json();
      setPosts(data.posts);
      setLoading(false);
    };

    fetcher();
  }, []);

  if (loading) {
    return <p className="py-6 px-4 text-xl">読み込み中</p>;
  }

  if (posts.length === 0) {
    return <p className="py-6 px-4 text-xl">記事が見つかりませんでした</p>;
  }

  return (
    <>
      <div className="px-6 py-2">
        <h2 className="text-2xl font-bold my-6">記事一覧</h2>

        {posts.map((post) => (
          <Link to={`/posts/${post.id}`}>
            <div
              key={post.id}
              className="flex border-b border-gray-300 pb-6 mb-6"
            >
              <img
                src={post.thumbnailUrl}
                className="w-64 h-40 object-cover shrink-0"
              />
              <div className="ml-6 flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <p className="text-gray-500 text-xl">
                    {new Date(post.createdAt).toLocaleDateString("ja-JP", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  {post.categories.map((c) => (
                    <span
                      key={c}
                      className="bg-gray-100 text-gray-600 text-base px-3 py-1 rounded-full"
                    >
                      {c}
                    </span>
                  ))}
                </div>
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <div
                  className="line-clamp-2 text-gray-600 text-xl"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default PostList;
