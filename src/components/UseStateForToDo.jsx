import React, { useState } from "react";

const UseStateForToDo = () => {
  const [task, setTask] = useState([]);
  const [tname, setTname] = useState("");
  const formsubmit = (e) => {
    e.preventDefault();
  };
  const changeVlue = (e) => {
    setTname(e.target.value);
  };
  const addTask = () => {
    task.push(tname);

    setTask((addTask) => [...addTask]);
    setTname(""); // clear input field after adding task
  };
  return (
    <div>
      <form onSubmit={formsubmit}>
        <input onChange={changeVlue} value={tname} type="text" />
        <button onClick={addTask} type="submit">
          submit
        </button>
      </form>
      <p>{tname}</p>
      <ul>
        {task.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button
              onClick={() => {
                task.splice(index, 1);
                setTask((addTask) => [...addTask]);
              }}
            >
              Remove Task
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseStateForToDo;
