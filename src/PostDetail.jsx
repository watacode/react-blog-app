import { Link, useParams } from "react-router-dom";
// import { posts } from "./data/posts";
import { useState, useEffect } from "react";

function PostDetail() {
  const { id } = useParams();

  const [post, setPosts] = useState(null);

  // APIでpostsを取得する処理をuseEffectで実行します。
  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch(
        `https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${id}`,
      );
      const data = await res.json();
      setPosts(data.post);
    };

    fetcher();
  }, []);

  if (!post) {
    return <p className="py-6 px-4 text-xl">記事が見つかりませんでした</p>;
  }

  return (
    <div className="py-6 px-4">
      <img src={post.thumbnailUrl} />
      <div>
        <div className="flex items-center gap-3 py-4">
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
        <h1 className="font-bold text-3xl mb-4">{post.title}</h1>
        <div
          className=" text-gray-600 text-xl"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
      <Link to="/">
        <h2 className="text-xl py-12">記事一覧へ戻る</h2>
      </Link>
    </div>
  );
}

export default PostDetail;
