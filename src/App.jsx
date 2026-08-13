import { Routes, Route } from "react-router-dom";
import PostList from "./PostList";
import PostDetail from "./PostDetail";

function App() {
  return (
    <>
      <header className="flex justify-between items-center bg-gray-800 text-white p-6">
        <h2 className="font-bold text-xl">Blog</h2>
        <h2 className="font-bold text-xl">問い合わせ</h2>
      </header>

      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetail />} />
      </Routes>
    </>
  );
}

export default App;
