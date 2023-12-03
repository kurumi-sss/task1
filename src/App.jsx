import Header from "./components/Header";
import BlogList from "./components/BlogList";
import BlogDetail from "./components/BlogDetail";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/posts/:id" element={<BlogDetail />} />
      </Routes>
    </div>
  );
}

export default App;
