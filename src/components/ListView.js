import React from "react";
// import InputField from './InputField';
import Todo from "./Todo";

const ListView = ({ Tasks, setTasks, setCompleted, Completed, Status }) => {
  console.log(Tasks);
  return (
    <div className="list-wrapper">
      <ul>
        {Completed.map((task) => (
          <Todo
            key={task.id}
            text={task.text}
            setTasks={setTasks}
            Tasks={Tasks}
            task={task}
            setCompleted={setCompleted}
            Completed={Completed}
          />
        ))}
      </ul>
    </div>
  );
};

export default ListView;
