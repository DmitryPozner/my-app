import React from "react";
import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/nav";
import Todo from "./components/todo";
import Header from "./components/header";
import SearchPanel from "./components/search-panel";

const App = () => {
  const todoData = [
    { label: "task 1", important: false },
    { label: "Make App", important: true },
    { label: "task 3", important: false },
  ];
  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <Header />

        <Nav />
        <SearchPanel />
        <Routes>
          <Route path="/todo" element={<Todo todos={todoData} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
