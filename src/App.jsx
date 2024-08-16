import { Routes, Route } from "react-router-dom";

import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

import "./App.css";

const App = () => (
  <Routes>
    <Route path="/" element={<BookList />} />
    <Route path="/create-book" element={<AddBook />} />
  </Routes>
);

export default App;
