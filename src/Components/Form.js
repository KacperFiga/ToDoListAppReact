import React, { useState } from "react";

const Form = ({ handler }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => setInputValue(() => e.target.value);

  const handleClickButton = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 1000);
    const newTask = { title: inputValue, id };
    setInputValue("");
    handler({ type: "ADD", id, newTask }, []);
  };

  return (
    <div>
      <form onSubmit={handleClickButton}>
        <input
          type="text"
          placeholder="title task"
          value={inputValue}
          onChange={handleChange}
        ></input>
        <button>add</button>
      </form>
    </div>
  );
};

export default Form;
