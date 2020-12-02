const Task = ({ title, id, handler }) => {
  const handleClick = () => handler({ type: "REMOVE", id }, []);

  return (
    <div>
      <p>{title}</p>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
};

export default Task;
