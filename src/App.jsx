import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import PostList from "./PostList";
import PostDetail from "./PostDetail";
import Contact from "./Contact";

function App() {
  return (
    <>
      <header className="flex justify-between items-center bg-gray-800 text-white p-6">
        <Link to="/">
          <h2 className="font-bold text-xl">Blog</h2>
        </Link>
        <Link to="/contact">
          <h2 className="font-bold text-xl">問い合わせ</h2>
        </Link>
      </header>

      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
