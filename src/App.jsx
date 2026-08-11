// import { useState } from "react";
import { posts } from "./data/posts";


function App() {
  return (
    <>
      <header className="flex justify-between items-center bg-gray-800 text-white p-6">
        <h2 className="font-bold text-xl">Blog</h2>
        <h2 className="font-bold text-xl">問い合わせ</h2>
      </header>

      <div className="px-6 py-2">
        <h2 className="text-2xl font-bold my-6">記事一覧</h2>

        {posts.map((post) => (
          <div key={post.id} className="flex border-b border-gray-300 pb-6 mb-6">
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
                  <span key={c} className="bg-gray-100 text-gray-600 text-base px-3 py-1 rounded-full">
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
        ))}
      </div>
    </>
  );
}

export default App;