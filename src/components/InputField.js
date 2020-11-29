import React from "react";

const InputField = ({
  setInputText,
  InputText,
  setTasks,
  Tasks,
  Status,
  setStatus,
}) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  // adding each task in tasks state as a array after pressing the add button
  const addTodo = (e) => {
    e.preventDefault();
    console.log(InputText);
    setTasks([
      ...Tasks,
      { text: InputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };
  // after pressing the completed filter change the status of completed state to true
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form action="" className="input-wrapper">
      <input
        placeholder = "Enter the task"
        value={InputText}
        onChange={inputTextHandler}
        type="text"
        className="input-field"
      />
      <button onClick={addTodo} type="submit" className="addBtn">
        <i id="plus" className="fas fa-plus-square"></i>
      </button>

      <select onChange={statusHandler} name="status" id="status">
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Uncompleted">Uncompleted</option>
      </select>
    </form>
  );
};

export default InputField;
