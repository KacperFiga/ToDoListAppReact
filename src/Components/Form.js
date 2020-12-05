import React, { useState } from "react";

const Form = ({ handler }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => setInputValue(() => e.target.value);

  const handleClickButton = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    const id = Math.floor(Math.random() * 1000);
    const newTask = { title: inputValue, id };
    handler({ type: "ADD", id, newTask }, []);
    setInputValue("");
  };

  return (
    <div className="App_form">
      <form onSubmit={handleClickButton}>
        <input
          className="App_form_input"
          type="text"
          placeholder="title task"
          value={inputValue}
          onChange={handleChange}
        ></input>
        <button className="App_form_button">add</button>
      </form>
    </div>
  );
};

export default Form;
