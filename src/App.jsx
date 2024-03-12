import { useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import ShowTask from "./components/ShowTask";
import "./App.css";

function App() {
  const initialTasks = [
    {
      id: 10001,
      name: "TASK A",
      time: "2:09:01 AM 9/14/2023",
    },
    {
      id: 10002,
      name: "TASK B",
      time: "2:09:01 AM 9/14/2023",
    },
    {
      id: 10003,
      name: "TASK C",
      time: "2:09:01 AM 9/14/2023",
    },
  ];
  const [tasklist, setTasklist] = useState(initialTasks);
  const [task, setTask] = useState({});

  return (
    <>
      <div className="App">
        <Header />
        <AddTask
          tasklist={tasklist}
          setTasklist={setTasklist}
          task={task}
          setTask={setTask}
        />
        <ShowTask
          tasklist={tasklist}
          setTasklist={setTasklist}
          task={task}
          setTask={setTask}
        />
      </div>
    </>
  );
}

export default App;
