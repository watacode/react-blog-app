import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import PostList from "./PostList";
import PostDetail from "./PostDetail";
import Form from "./Form";

function App() {
  return (
    <>
      <header className="flex justify-between items-center bg-gray-800 text-white p-6">
        <Link to="/">
          <h2 className="font-bold text-xl">Blog</h2>
        </Link>
        <Link to="/form">
          <h2 className="font-bold text-xl">問い合わせ</h2>
        </Link>
      </header>

      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
