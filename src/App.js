import { useReducer } from "react";
import "./App.css";

import Form from "./Components/Form";
import Task from "./Components/Task";

const tasks = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.newTask];
    case "REMOVE":
      return (state = state.filter((task) => task.id !== action.id));
    default:
      throw Error("Oooops, something going wrong ;(");
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, tasks);

  const tasksList = state.map((task) => (
    <Task key={task.id} id={task.id} title={task.title} handler={dispatch} />
  ));

  return (
    <div className="App">
      <Form handler={dispatch} />
      {tasksList}
    </div>
  );
};

export default App;
