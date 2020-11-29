import React, { useState, useEffect } from "react";
//importing components
import "./App.css";
import InputField from "./components/InputField";
import ListView from "./components/ListView";

function App() {
  const [InputText, setInputText] = useState("");
  const [Tasks, setTasks] = useState([]);
  const [Completed, setCompleted] = useState([]);
  const [Status, setStatus] = useState("All");

  useEffect(() => {
    filterTasks();
  }, [Tasks, Status]);

  const filterTasks = () => {
    switch (Status) {
      case "Completed":
        setCompleted(Tasks.filter((item) => item.completed === true));
        break;
      case "Uncompleted":
        setCompleted(Tasks.filter((item) => item.completed === false));
        break;
      default:
        setCompleted(Tasks);
    }
  };

  return (
    <div className="wrapper">
      <h1>Kishore's ToDoList</h1>
      <InputField
        setInputText={setInputText}
        InputText={InputText}
        setTasks={setTasks}
        Tasks={Tasks}
        Status={Status}
        setStatus={setStatus}
      />
      <ListView
        InputText={InputText}
        Tasks={Tasks}
        setTasks={setTasks}
        setCompleted={setCompleted}
        Completed={Completed}
        Status={Status}
        setStatus={setStatus}
      />
    </div>
  );
}

export default App;
