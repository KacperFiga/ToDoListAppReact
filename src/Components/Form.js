import React, { useState } from "react";

const Form = ({ handler }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => setInputValue(() => e.target.value);

  const handleClickButton = (e) => {
    e.preventDefault();
    if (!inputValue) {
      alert("Give me task title please");
      return;
    }
    const id = Math.floor(Math.random() * 1000);
    const newTask = { title: inputValue, id };
    handler({ type: "ADD", id, newTask }, []);
    setInputValue("");
  };

  return (
    <section className="App_form">
      <form onSubmit={handleClickButton}>
        <input
          className="App_form_input"
          type="text"
          placeholder="task title"
          value={inputValue}
          onChange={handleChange}
        ></input>
        <button className="App_form_button">add</button>
      </form>
    </section>
  );
};

export default Form;
