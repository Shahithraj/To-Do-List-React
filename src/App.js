import logo from "./logo.svg";

import InputArea from "./components/InputArea";
import React, { useState } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [items, setItems] = useState([]);

  const additems = (inputText) => {
    setItems((prev) => {
      return [...prev, inputText];
    });
  };

  const deleteitem = (id) => {
    setItems((prev) => {
      return prev.filter((data, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div>
        <InputArea additems={additems} />
      </div>

      {items.map((data, index) => {
        return (
          <TodoList
            key={index}
            deleteitem={deleteitem}
            id={index}
            text={data}
          ></TodoList>
        );
      })}
    </div>
  );
}

export default App;
