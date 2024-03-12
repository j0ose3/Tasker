const ShowTask = ({ tasklist, setTasklist, setTask }) => {
  const handleEdit = (taskId) => {
    const selectedTask = tasklist.find(todo => todo.id === taskId);
    setTask(selectedTask);
  };
  const handleDelete = (taskId) => {
    const updatedTaskList = tasklist.filter(todo => todo.id !== taskId);
    setTasklist(updatedTaskList);
  };

  return (
    <>
      <section className="showTask">
        <div className="head">
          <div>
            <span className="title">Todo</span>
            <span className="count">{tasklist.length}</span>
          </div>
          <button className="clearAll" onClick={() => setTasklist([])}>
            Clear All
          </button>
        </div>
        <ul>
          {tasklist.map((todo) => (
            <li key={todo.id}>
              <p>
                <span className="name">{todo.name}</span>
                <span className="time">{todo.time}</span>
              </p>
              <i
                className="bi bi-pencil-square"
                onClick={() => handleEdit(todo.id)}
              ></i>
              <i
                className="bi bi-trash"
                onClick={() => handleDelete(todo.id)}
              ></i>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default ShowTask;
