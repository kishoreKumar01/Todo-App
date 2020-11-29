import React from "react";

const Todo = ({ text, setTasks, Tasks, task, setCompleted, Completed }) => {
  const completeTaskHandler = () => {
    setTasks(
      Tasks.map((item) => {
        if (task.id === item.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const deleteTaskHandler = () => {
    setTasks(Tasks.filter((item) => item.id !== task.id));
  };

  return (
    <div className="list-view">
      <h4 className={`task-content ${task.completed ? "strick-line" : ""}`}>
        {text}
      </h4>
      <button onClick={completeTaskHandler} className="tickBtn">
        <i id="tick" className="fas fa-check"></i>
      </button>
      <button onClick={deleteTaskHandler} className="trashBtn">
        <i id="trash" className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
