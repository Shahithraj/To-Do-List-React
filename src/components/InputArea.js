import React, { useState } from "react";

const InputArea = (props) => {
  const [inputText, setInputText] = useState("");

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleClick = () => {
    if (inputText) props.additems(inputText);
    setInputText("");
  };
  return (
    <div className="form">
      <input type="text" onChange={handleChange} value={inputText}></input>
      <button onClick={handleClick}>
        <span>Add</span>
      </button>
    </div>
  );
};

export default InputArea;
