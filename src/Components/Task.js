const Task = ({ title, id, handler }) => {
  const handleClick = () => handler({ type: "REMOVE", id }, []);

  return (
    <section className="App_tasks_element">
      <p className="App_tasks_element_title">{title}</p>
      <button className="App_tasks_element_btn" onClick={handleClick}>
        done
      </button>
    </section>
  );
};

export default Task;
