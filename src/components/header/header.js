import React from "react";
import "./header.css";

const Header = ({ toDo, done }) => {
  return (
    <header className="header">
      <h1 className="header h1">TODO list</h1>
      <h5>
        {toDo} more to do, {done} done
      </h5>
    </header>
  );
};

export default Header;
